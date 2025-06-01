'use client';

import { useEffect, useState } from 'react';
import { Interpretation } from '@/lib/types';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { Brain, Users, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';

interface InterpretationResultsProps {
  interpretation: Interpretation | null;
}

// 动态导入评论区组件
const CommentSection = dynamic(() => import('./CommentSection'), {
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-24 bg-gray-200 rounded-lg"></div>
      <div className="h-32 bg-gray-200 rounded-lg"></div>
    </div>
  ),
  ssr: false
});

export function InterpretationResults({ interpretation }: InterpretationResultsProps) {
  const [animated, setAnimated] = useState<boolean[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (interpretation) {
      const timer1 = setTimeout(() => {
        setAnimated([true, false, false]);
      }, 300);
      
      const timer2 = setTimeout(() => {
        setAnimated([true, true, false]);
      }, 600);
      
      const timer3 = setTimeout(() => {
        setAnimated([true, true, true]);
      }, 900);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setAnimated([]);
    }
  }, [interpretation]);
  
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const getIconForIndex = (index: number) => {
    switch(index) {
      case 0: return <Brain className="h-5 w-5" />;
      case 1: return <Users className="h-5 w-5" />;
      case 2: return <Zap className="h-5 w-5" />;
      default: return <Brain className="h-5 w-5" />;
    }
  };

  const getTitleForIndex = (index: number) => {
    switch(index) {
      case 0: return "职业发展";
      case 1: return "人际关系";
      case 2: return "个人成长";
      default: return `解读 ${index + 1}`;
    }
  };
  
  if (!interpretation) return null;

  return (
    <div className="w-full max-w-md mx-auto mt-10 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#0071E3] to-[#40AAFF] text-transparent bg-clip-text">
          {interpretation.mbtiType} 性格解读
        </h2>
        <p className="text-[#86868B] text-sm">
          基于 AI 算法的个性化深度解析
        </p>
      </div>
      
      <div className="space-y-6">
        {interpretation.interpretations.map((item, index) => (
          <div 
            key={index}
            className={`glass-effect backdrop-blur-md p-5 rounded-2xl shadow-apple ${animated[index] ? 'fade-in' : 'opacity-0'}`}
            style={{ 
              animationDelay: `${index * 300}ms`,
              background: 'rgba(255, 255, 255, 0.8)',
              borderLeft: '4px solid #0071E3'
            }}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-[#0071E3] to-[#40AAFF] text-white p-2 rounded-lg mr-3">
                  {getIconForIndex(index)}
                </div>
                <h3 className="text-[#1D1D1F] font-medium">{getTitleForIndex(index)}</h3>
              </div>
              <button 
                className="text-[#86868B] hover:text-[#1D1D1F] rounded-full p-2 hover:bg-[#F5F5F7] transition-colors"
                onClick={() => handleCopy(item, index)}
                title="复制内容"
              >
                {copiedIndex === index ? (
                  <CheckIcon className="h-5 w-5 text-[#34C759]" />
                ) : (
                  <CopyIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-[#1D1D1F] leading-relaxed pl-12">{item}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center text-sm text-[#86868B] mt-8 bg-[#F5F5F7] py-3 px-4 rounded-full inline-block mx-auto">
        解读生成时间: {new Date(interpretation.timestamp).toLocaleDateString()} {new Date(interpretation.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      <CommentSection mbtiType={interpretation.mbtiType} />
    </div>
  );
}