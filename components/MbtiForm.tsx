'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MBTI_TYPES, MBTI_DESCRIPTIONS } from '@/lib/constants';
import { getLastMbtiType } from '@/lib/storage';
import { CheckIcon } from '@radix-ui/react-icons';

interface MbtiFormProps {
  onSubmit: (mbtiType: string) => void;
  isLoading: boolean;
}

export default function MbtiForm({ onSubmit, isLoading }: MbtiFormProps) {
  const [mbtiType, setMbtiType] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeToSubmit = selectedType || mbtiType.toUpperCase();
    if (typeToSubmit && MBTI_TYPES.includes(typeToSubmit)) {
      onSubmit(typeToSubmit);
    }
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setMbtiType(type);
  };

  return (
    <Card className="modern-card border-0 shadow-none">
      <CardHeader className="text-center pb-4 sm:pb-6">
        <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          MBTI性格解读
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm sm:text-base px-2">
          选择或输入你的MBTI类型，获得AI驱动的深度性格分析
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-3">
            <Label htmlFor="mbti-input" className="text-sm font-medium text-gray-700">
              选择或输入你的MBTI类型
            </Label>
            
            {/* MBTI类型选择网格 - 移动端2列，桌面端4列 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
              {MBTI_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleTypeSelect(type)}
                  className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-sm sm:text-base ${
                    selectedType === type
                      ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 shadow-md'
                      : 'border-gray-200 bg-white/50 text-gray-600 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* 手动输入框 */}
            <div className="relative">
              <Input
                id="mbti-input"
                type="text"
                value={mbtiType}
                onChange={(e) => {
                  setMbtiType(e.target.value);
                  setSelectedType('');
                }}
                placeholder="或手动输入 (如: INTJ)"
                className="glass-effect border-white/30 focus:border-purple-400 focus:ring-purple-400 text-center font-medium text-base sm:text-lg tracking-wider h-12 sm:h-auto"
                maxLength={4}
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading || (!selectedType && !mbtiType.trim())}
            className="modern-button w-full py-3 sm:py-4 text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed h-12 sm:h-auto"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>AI正在分析中...</span>
              </div>
            ) : (
              '开始AI解读'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}