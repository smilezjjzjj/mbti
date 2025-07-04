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
  onSubmit: (mbtiType: string, quickMode: boolean) => void;
  isLoading: boolean;
}

export default function MbtiForm({ onSubmit, isLoading }: MbtiFormProps) {
  const [mbtiType, setMbtiType] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [quickMode, setQuickMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeToSubmit = selectedType || mbtiType.toUpperCase();
    if (typeToSubmit && MBTI_TYPES.includes(typeToSubmit)) {
      onSubmit(typeToSubmit, quickMode);
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
          MBTI Personality Interpretation
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm sm:text-base px-2">
          Select or enter your MBTI type to get AI-powered in-depth personality analysis
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-3">
            <Label htmlFor="mbti-input" className="text-sm font-medium text-gray-700">
              Select or enter your MBTI type
            </Label>
            
            {/* MBTI Type Selection Grid - 2 columns on mobile, 4 columns on desktop */}
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
            
            {/* Manual Input Field */}
            <div className="relative">
              <Input
                id="mbti-input"
                type="text"
                value={mbtiType}
                onChange={(e) => {
                  setMbtiType(e.target.value);
                  setSelectedType('');
                }}
                placeholder="Or enter manually (e.g., INTJ)"
                className="glass-effect border-white/30 focus:border-purple-400 focus:ring-purple-400 text-center font-medium text-base sm:text-lg tracking-wider h-12 sm:h-auto"
                maxLength={4}
              />
            </div>

            {/* Quick Mode Option */}
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <input
                type="checkbox"
                id="quick-mode"
                checked={quickMode}
                onChange={(e) => setQuickMode(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="quick-mode" className="text-sm text-gray-700 cursor-pointer">
                <span className="font-medium">Quick Mode</span>
                <span className="text-gray-500 ml-1">(10-15 seconds, simplified interpretation)</span>
              </label>
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
                <span>{quickMode ? 'Quick Generating...' : 'AI Analyzing...'}</span>
              </div>
            ) : (
              quickMode ? 'Quick AI Interpretation' : 'Start AI Interpretation'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}