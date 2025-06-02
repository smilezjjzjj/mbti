'use client';

import { useState, useCallback } from 'react';
import { generateMbtiInterpretationWithDeepseek } from '@/lib/deepseek';
import MbtiForm from '@/components/MbtiForm';
import { InterpretationResults } from '@/components/InterpretationResults';
import { saveLastMbtiType, saveInterpretation, getInterpretationByMbtiType } from '@/lib/storage';
import { Interpretation, InterpretationState } from '@/lib/types';
// import { Progress } from '@/components/ui/progress';

export default function MbtiInterpretation() {
  const [interpretationState, setInterpretationState] = useState<InterpretationState>({
    loading: false,
    error: null,
    data: null,
  });
  const [progress, setProgress] = useState(0);

  const handleFormSubmit = useCallback(async (mbtiType: string) => {
    let progressInterval: NodeJS.Timeout | undefined;
    try {
      // Check if we already have this interpretation in localStorage
      const existingInterpretation = getInterpretationByMbtiType(mbtiType);
      
      if (existingInterpretation) {
        setInterpretationState({
          loading: false,
          error: null,
          data: existingInterpretation,
        });
        return;
      }
      
      // Start loading
      setInterpretationState({
        loading: true,
        error: null,
        data: null,
      });
      
      // 启动进度动画
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            return prev;
          }
          return prev + 10;
        });
      }, 500);
      
      // Save the MBTI type to localStorage
      saveLastMbtiType(mbtiType);
      
      // Generate interpretation using Deepseek API
      const interpretations = await generateMbtiInterpretationWithDeepseek(mbtiType);
      
      // 完成进度动画
      clearInterval(progressInterval);
      setProgress(100);
      
      // Create new interpretation object
      const newInterpretation: Interpretation = {
        id: `${mbtiType}-${Date.now()}`,
        mbtiType,
        content: interpretations.join('\n\n'),
        timestamp: Date.now(),
      };
      
      // Save to localStorage
      saveInterpretation(newInterpretation);
      
      // 短暂延迟后重置进度条并显示结果
      setTimeout(() => {
        setProgress(0);
        setInterpretationState({
          loading: false,
          error: null,
          data: newInterpretation,
        });
      }, 300);
    } catch (error) {
      console.error('Error generating interpretation:', error);
      clearInterval(progressInterval);
      setProgress(0);
      setInterpretationState({
        loading: false,
        error: error instanceof Error ? error.message : '解读生成失败，请稍后重试',
        data: null,
      });
    }
  }, []);

  return (
    <>
      {/* MBTI表单 */}
      <MbtiForm 
        onSubmit={handleFormSubmit} 
        isLoading={interpretationState.loading} 
      />
      
      {/* 加载状态 */}
      {interpretationState.loading && (
        <div className="glass-effect rounded-2xl p-8 text-center mt-8">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">AI正在深度分析中...</h3>
              <p className="text-gray-600">正在为你生成个性化的MBTI解读</p>
            </div>
            <div className="max-w-xs mx-auto">
              {/* 暂时使用简单的进度条替代 */}
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{progress}%</p>
            </div>
          </div>
        </div>
      )}
      
      {/* 错误状态 */}
      {interpretationState.error && (
        <div className="glass-effect rounded-2xl p-6 text-center border-2 border-red-200 mt-8">
          <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 text-xl">⚠️</span>
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">解读生成失败</h3>
          <p className="text-red-600">{interpretationState.error}</p>
        </div>
      )}
      
      {/* 解读结果 */}
      {interpretationState.data && (
        <div className="mt-8">
          <InterpretationResults interpretation={interpretationState.data} />
        </div>
      )}
    </>
  );
}