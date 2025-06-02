'use client';

import { useEffect, useState } from 'react';
import { Interpretation } from '@/lib/types';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { Brain, Users, Zap, Heart, Target, Lightbulb } from 'lucide-react';
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

  // 将content分割成段落
  const interpretationSections = interpretation?.content.split('\n\n').filter(section => section.trim()) || [];

  useEffect(() => {
    if (interpretation && interpretationSections.length > 0) {
      const timers: NodeJS.Timeout[] = [];
      
      interpretationSections.forEach((_, index) => {
        const timer = setTimeout(() => {
          setAnimated(prev => {
            const newAnimated = [...prev];
            newAnimated[index] = true;
            return newAnimated;
          });
        }, (index + 1) * 300);
        timers.push(timer);
      });
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    } else {
      setAnimated([]);
    }
  }, [interpretation, interpretationSections.length]);
  
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const getIconForIndex = (index: number) => {
    const icons = [Brain, Target, Users, Heart, Zap, Lightbulb];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="h-5 w-5" />;
  };

  const getTitleForIndex = (index: number) => {
    const titles = ["核心特质", "职业发展", "人际关系", "情感表达", "个人成长", "潜在优势"];
    return titles[index % titles.length];
  };

  const getGradientForIndex = (index: number) => {
    const gradients = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500", 
      "from-green-500 to-teal-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
      "from-yellow-500 to-orange-500"
    ];
    return gradients[index % gradients.length];
  };
  
  if (!interpretation) return null;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* 标题区域 */}
      <div className="text-center modern-card p-8">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{interpretation.mbtiType}</span>
        </div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          {interpretation.mbtiType} 性格解读
        </h2>
        <p className="text-gray-600 text-lg">
          基于AI算法的个性化深度解析 • 探索你的内在世界
        </p>
        <div className="mt-4 glass-effect rounded-full px-4 py-2 inline-block">
          <span className="text-sm text-gray-600">
            解读时间: {new Date(interpretation.timestamp).toLocaleDateString()} {new Date(interpretation.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
      
      {/* 解读内容 */}
      <div className="grid gap-6">
        {interpretationSections.map((section, index) => (
          <div 
            key={index}
            className={`modern-card p-6 transition-all duration-500 ${animated[index] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
            style={{ 
              animationDelay: `${index * 300}ms`,
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className={`bg-gradient-to-r ${getGradientForIndex(index)} text-white p-3 rounded-xl shadow-lg`}>
                  {getIconForIndex(index)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{getTitleForIndex(index)}</h3>
                  <p className="text-sm text-gray-500">第 {index + 1} 部分</p>
                </div>
              </div>
              <button 
                className="glass-effect p-2 rounded-lg hover:bg-white/30 transition-all duration-200 group"
                onClick={() => handleCopy(section, index)}
                title="复制内容"
              >
                {copiedIndex === index ? (
                  <CheckIcon className="h-5 w-5 text-green-600" />
                ) : (
                  <CopyIcon className="h-5 w-5 text-gray-600 group-hover:text-gray-800" />
                )}
              </button>
            </div>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                {section}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* 评论区 */}
      <div className="modern-card p-6">
        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          交流讨论区
        </h3>
        <p className="text-center text-gray-600 mb-6">
          分享你的MBTI体验，与其他用户交流讨论，互相学习成长
        </p>
        <CommentSection mbtiType={interpretation.mbtiType} />
      </div>
    </div>
  );
}