'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { MBTI_TYPES, MBTI_DESCRIPTIONS } from '@/lib/constants';
import { getLastMbtiType } from '@/lib/storage';
import { CheckIcon } from '@radix-ui/react-icons';

interface MbtiFormProps {
  onSubmit: (mbtiType: string) => void;
  isLoading: boolean;
}

export function MbtiForm({ onSubmit, isLoading }: MbtiFormProps) {
  const [inputMethod, setInputMethod] = useState<'text' | 'select'>('text');
  const [mbtiType, setMbtiType] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load last MBTI type from localStorage if available
    const lastMbti = getLastMbtiType();
    if (lastMbti) {
      setMbtiType(lastMbti);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate MBTI input
    const formattedMbti = mbtiType.trim().toUpperCase();
    if (!formattedMbti) {
      setError('请输入您的MBTI类型');
      return;
    }

    if (!MBTI_TYPES.includes(formattedMbti)) {
      setError('MBTI类型无效，请输入有效的类型（如INFJ、ENTJ等）');
      return;
    }

    setError(null);
    onSubmit(formattedMbti);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center space-x-4 mb-6 bg-[#F5F5F7] p-1 rounded-full">
        <button 
          type="button"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            inputMethod === 'text' 
              ? 'bg-white text-[#1D1D1F] shadow-apple-sm' 
              : 'bg-transparent text-[#86868B]'
          }`}
          onClick={() => setInputMethod('text')}
        >
          手动输入
        </button>
        <button 
          type="button"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            inputMethod === 'select' 
              ? 'bg-white text-[#1D1D1F] shadow-apple-sm' 
              : 'bg-transparent text-[#86868B]'
          }`}
          onClick={() => setInputMethod('select')}
        >
          选择类型
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-center font-medium text-lg text-[#1D1D1F]">我的MBTI</h2>
          
          {inputMethod === 'text' ? (
            <Input
              placeholder="输入您的MBTI类型（例如：INFJ）"
              value={mbtiType}
              onChange={(e) => setMbtiType(e.target.value.toUpperCase())}
              className="text-center h-12 text-base rounded-xl bg-[#F5F5F7] border-0 focus-visible:ring-2 focus-visible:ring-[#0071E3]"
              maxLength={4}
            />
          ) : (
            <Select value={mbtiType} onValueChange={setMbtiType}>
              <SelectTrigger className="w-full h-12 text-base rounded-xl bg-[#F5F5F7] border-0 focus:ring-2 focus:ring-[#0071E3]">
                <SelectValue placeholder="选择MBTI类型" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow-apple">
                {MBTI_TYPES.map((type) => (
                  <SelectItem 
                    key={type} 
                    value={type} 
                    className="focus:bg-[#F5F5F7] focus:text-[#1D1D1F] rounded-lg my-1"
                  >
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{type}</span>
                      <span className="text-xs text-[#86868B] truncate">
                        {MBTI_DESCRIPTIONS[type as keyof typeof MBTI_DESCRIPTIONS].substring(0, 20)}...
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {error && (
            <p className="text-[#FF3B30] text-sm text-center">{error}</p>
          )}
          
          {mbtiType && MBTI_TYPES.includes(mbtiType.trim().toUpperCase()) && (
            <div className="glass-effect p-4 rounded-xl text-sm animate-float">
              <div className="flex items-start mb-2">
                <div className="bg-[#0071E3] text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <CheckIcon className="h-3 w-3" />
                </div>
                <p className="font-medium text-[#1D1D1F]">
                  {mbtiType} - {MBTI_DESCRIPTIONS[mbtiType as keyof typeof MBTI_DESCRIPTIONS].split('。')[0]}
                </p>
              </div>
              <p className="text-[#86868B] ml-7">
                {MBTI_DESCRIPTIONS[mbtiType as keyof typeof MBTI_DESCRIPTIONS].split('。').slice(1).join('。')}
              </p>
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="apple-button w-full flex items-center justify-center h-12"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              正在解读中...
            </span>
          ) : '开始解读'}
        </button>
      </form>
    </div>
  );
}