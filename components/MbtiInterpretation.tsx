'use client';

import { useState, useCallback, useEffect } from 'react';
import { generateMbtiInterpretationWithDeepseek } from '@/lib/deepseek';
import { MbtiForm } from '@/components/MbtiForm';
import { InterpretationResults } from '@/components/InterpretationResults';
import { saveLastMbtiType, saveInterpretation, getInterpretationByMbtiType, getInterpretationHistory } from '@/lib/storage';
import { Interpretation, InterpretationState } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ClockIcon } from '@radix-ui/react-icons';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function MbtiInterpretation() {
  const [interpretationState, setInterpretationState] = useState<InterpretationState>({
    loading: false,
    error: null,
    data: null,
  });
  const [progress, setProgress] = useState(0);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<Interpretation[]>([]);

  // 加载历史记录
  useEffect(() => {
    if (historyOpen) {
      setHistory(getInterpretationHistory());
    }
  }, [historyOpen]);

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
        interpretations,
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

  // 选择历史记录中的解读
  const selectHistoryItem = (item: Interpretation) => {
    setInterpretationState({
      loading: false,
      error: null,
      data: item,
    });
    setHistoryOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Dialog open={historyOpen} onOpenChange={setHistoryOpen}>
          <DialogTrigger asChild>
            <Button variant="apple-secondary" className="flex items-center gap-1 px-4">
              <ClockIcon className="h-4 w-4" />
              <span>历史记录</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-xl border-[#D2D2D7] bg-white/95 backdrop-blur-md">
            <DialogHeader>
              <DialogTitle className="text-center text-[#1D1D1F] text-xl">历史记录</DialogTitle>
            </DialogHeader>
            <div className="max-h-[400px] overflow-y-auto">
              {history.length === 0 ? (
                <p className="text-center py-6 text-[#86868B]">暂无历史记录</p>
              ) : (
                <div className="space-y-3 p-2">
                  {history.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-4 border border-[#E8E8ED] rounded-xl cursor-pointer hover:bg-[#F5F5F7] transition-colors"
                      onClick={() => selectHistoryItem(item)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-[#1D1D1F]">{item.mbtiType}</span>
                        <span className="text-xs text-[#86868B] bg-[#F5F5F7] px-3 py-1 rounded-full">
                          {new Date(item.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="bg-white/90 backdrop-blur-md shadow-apple hover:shadow-apple-lg transition-shadow duration-300 rounded-xl border-[#E8E8ED]">
        <CardContent className="p-6">
          <MbtiForm 
            onSubmit={handleFormSubmit} 
            isLoading={interpretationState.loading} 
          />
          
          {interpretationState.loading && (
            <div className="mt-6 space-y-3">
              <div className="text-sm text-center text-[#86868B] font-medium">
                正在生成解读结果...
              </div>
              <Progress value={progress} className="w-full h-2 rounded-full bg-[#F5F5F7]" indicatorClassName="bg-gradient-to-r from-[#0071E3] to-[#40AAFF]" />
            </div>
          )}
          
          {interpretationState.error && (
            <div className="mt-6 p-4 bg-[#FEF2F2] text-[#FF3B30] rounded-xl text-center">
              {interpretationState.error}
            </div>
          )}
        </CardContent>
      </Card>
      
      {interpretationState.data && (
        <InterpretationResults interpretation={interpretationState.data} />
      )}
    </div>
  );
}