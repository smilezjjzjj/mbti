'use client';

import { DEEPSEEK_CONFIG } from './constants';
import { DeepseekResponse } from './types';

function cleanMarkdownSyntax(text: string): string {
  return text
    .replace(/[*#_`]/g, '') // 移除 Markdown 标记
    .replace(/\n+/g, ' ') // 将多个换行替换为单个空格
    .replace(/\s+/g, ' ') // 将多个空格替换为单个空格
    .trim(); // 移除首尾空格
}

async function fetchWithRetry(url: string, options: RequestInit, retries = 2, delay = 1000): Promise<Response> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时
    
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    // 对于特定错误码的处理
    if (response.status === 429) {
      throw new Error('API 请求超过频率限制，请稍后再试');
    }
    
    if (response.status === 401) {
      throw new Error('API 密钥无效或已过期，请检查您的 API 密钥设置');
    }
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API 请求失败: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
    }
    
    return response;
  } catch (error) {
    if (retries <= 0) throw error;
    
    console.log(`请求失败，${delay}ms 后重试...`, error);
    await new Promise(resolve => setTimeout(resolve, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}

export async function generateMbtiInterpretationWithDeepseek(mbtiType: string): Promise<string[]> {
  try {
    if (!DEEPSEEK_CONFIG.apiKey || DEEPSEEK_CONFIG.apiKey.includes('请在.env.local文件中设置')) {
      throw new Error('未设置 Deepseek API 密钥。请在 .env.local 文件中配置 NEXT_PUBLIC_DEEPSEEK_API_KEY');
    }
    
    const response = await fetchWithRetry(
      `${DEEPSEEK_CONFIG.baseUrl}/chat/completions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_CONFIG.apiKey}`,
        },
        body: JSON.stringify({
          model: DEEPSEEK_CONFIG.model,
          messages: [
            {
              role: 'system',
              content: '你是一位专业的MBTI性格分析专家，请用中文提供有见地、准确和有用的MBTI性格类型解读。为所请求的MBTI类型提供三个不同方面的分析。请不要使用任何特殊符号或标记语法，直接用纯文本表达。'
            },
            {
              role: 'user',
              content: `我的MBTI类型是${mbtiType}。请从职业发展、人际关系和个人成长三个不同角度，为我提供简明但有深度的性格解读。`
            }
          ],
          stream: false,
          max_tokens: DEEPSEEK_CONFIG.maxTokens,
          temperature: DEEPSEEK_CONFIG.temperature,
          top_p: DEEPSEEK_CONFIG.topP,
          response_format: {
            type: "text"
          },
        }),
      },
      2 // 最多重试2次
    );

    const data = await response.json() as DeepseekResponse;
    
    if (!data.choices || data.choices.length === 0 || !data.choices[0].message.content) {
      throw new Error('API 返回的数据格式不正确或内容为空');
    }
    
    // 解析响应内容，提取解读内容
    const content = data.choices[0].message.content;
    
    // 按段落分割并选择前三个
    const paragraphs = content
      .split('\n\n')
      .filter((p: string) => p.trim().length > 0)
      .slice(0, 3)
      .map((p: string) => cleanMarkdownSyntax(p)); // 清理每个段落中的特殊字符
      
    // 如果段落少于3个，尝试按编号点分割
    if (paragraphs.length < 3) {
      const numberedPoints = content
        .match(/\d+[.、][\s\S]+?(?=\d+[.、]|$)/g) || [];
      if (numberedPoints.length >= 3) {
        return numberedPoints
          .slice(0, 3)
          .map((point: string) => cleanMarkdownSyntax(point.trim()));
      }
    }
    
    return paragraphs.length >= 3 ? paragraphs : content
      .split('\n')
      .filter((line: string) => line.trim().length > 0)
      .slice(0, 3)
      .map((line: string) => cleanMarkdownSyntax(line));
  } catch (error) {
    console.error('Error generating MBTI interpretation with Deepseek:', error);
    throw error;
  }
}