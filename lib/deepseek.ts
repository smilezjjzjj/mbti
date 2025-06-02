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

// 模拟数据，用于测试
function getMockInterpretation(mbtiType: string): string[] {
  const mockData: { [key: string]: string[] } = {
    'INTJ': [
      '职业发展：作为战略家型人格，你天生具备长远规划能力和系统性思维。在职场中，你适合从事需要深度分析和创新思维的工作，如战略规划、系统架构、研发管理等。建议选择能够发挥你独立思考和创新能力的岗位，避免过于繁琐的日常事务性工作。',
      '人际关系：你倾向于建立少而深的人际关系，重视质量胜过数量。在社交中，你可能显得较为内敛，但一旦建立信任，就会成为可靠的朋友和伙伴。建议主动表达关心，学会在适当时候展现你的温暖一面，这有助于建立更深层的连接。',
      '个人成长：持续学习和自我完善是你的天性。建议设定明确的长期目标，并制定详细的实现计划。同时，要注意平衡理性思考与情感表达，适当关注他人的感受，这将帮助你在个人和职业生活中取得更大的成功。'
    ],
    'ENFP': [
      '职业发展：作为活动家型人格，你充满创意和热情，善于激发他人。适合从事创意类、教育类或人际交往密集的工作，如市场营销、培训师、咨询顾问等。建议选择能够发挥你创新思维和人际影响力的职位，避免过于机械化的重复性工作。',
      '人际关系：你天生具备感染他人的能力，容易与各种类型的人建立联系。你的热情和真诚让人感到温暖，但要注意保持适度的边界感。建议在给予他人支持的同时，也要学会接受他人的帮助，建立互惠的关系模式。',
      '个人成长：你的成长路径充满可能性和变化。建议培养专注力和执行力，将创意转化为实际成果。同时，学会在追求新鲜事物的同时保持一定的稳定性，这将帮助你在实现理想的道路上走得更远。'
    ]
  };

  return mockData[mbtiType] || [
    `职业发展：${mbtiType}类型的人具有独特的职业优势，建议根据自己的性格特点选择合适的职业方向，发挥自身优势，在工作中寻找成就感和满足感。`,
    `人际关系：在人际交往中，${mbtiType}类型的人有着自己的特色，建议了解自己的沟通风格，学会与不同类型的人有效互动，建立和谐的人际关系网络。`,
    `个人成长：作为${mbtiType}类型，你的成长之路充满独特性，建议持续自我反思，发展自己的优势，同时也要关注需要改进的方面，实现全面的个人发展。`
  ];
}

async function fetchWithRetry(url: string, options: RequestInit, retries = 2, delay = 1000): Promise<Response> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 30000); // 增加到30秒超时
    
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
    // 改善错误处理
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('请求超时，请检查网络连接或稍后重试');
      }
      if (error.message.includes('Failed to fetch')) {
        throw new Error('网络连接失败，请检查网络设置');
      }
    }
    
    if (retries <= 0) throw error;
    
    console.log(`请求失败，${delay}ms 后重试...`, error);
    await new Promise(resolve => setTimeout(resolve, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}

export async function generateMbtiInterpretationWithDeepseek(mbtiType: string): Promise<string[]> {
  try {
    // 检查API密钥是否设置
    if (!DEEPSEEK_CONFIG.apiKey || DEEPSEEK_CONFIG.apiKey.includes('请在.env.local文件中设置')) {
      console.warn('未设置 Deepseek API 密钥，使用模拟数据');
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 2000));
      return getMockInterpretation(mbtiType);
    }
    
    console.log('使用真实API进行MBTI解读...');
    
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
    
    console.log('API调用成功，解析响应内容...');
    
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
    // 如果API调用失败，返回模拟数据作为备选
    console.warn('API调用失败，使用模拟数据');
    return getMockInterpretation(mbtiType);
  }
}