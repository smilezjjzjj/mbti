'use client';

import { Card } from '@/components/ui/card';

const dimensions = [
  {
    id: 'EI',
    title: 'E / I',
    left: '外向 (Extraversion)',
    right: '内向 (Introversion)',
    description: '能量来源和注意力方向',
    leftIcon: '🌟',
    rightIcon: '🌙'
  },
  {
    id: 'SN',
    title: 'S / N',
    left: '感觉 (Sensing)',
    right: '直觉 (iNtuition)',
    description: '信息收集和认知方式',
    leftIcon: '👁️',
    rightIcon: '🔮'
  },
  {
    id: 'TF',
    title: 'T / F',
    left: '思考 (Thinking)',
    right: '情感 (Feeling)',
    description: '决策和判断依据',
    leftIcon: '🧠',
    rightIcon: '💝'
  },
  {
    id: 'JP',
    title: 'J / P',
    left: '判断 (Judging)',
    right: '知觉 (Perceiving)',
    description: '生活方式和行为模式',
    leftIcon: '📋',
    rightIcon: '🎨'
  }
];

export default function MbtiDimensions() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {dimensions.map((dim) => (
        <Card 
          key={dim.id} 
          className="overflow-hidden bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-0"
        >
          <div className="p-3 sm:p-4">
            {/* 标题和描述 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
              <h3 className="text-base sm:text-lg font-medium text-gray-700">
                {dim.title}
              </h3>
              <span className="text-xs sm:text-sm text-gray-500">{dim.description}</span>
            </div>

            {/* 维度对比 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* 左侧 */}
              <div className="p-3 sm:p-4 rounded-xl bg-white shadow-[0_4px_15px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl flex-shrink-0">{dim.leftIcon}</span>
                  <span className="text-xs sm:text-sm text-gray-700 leading-tight">{dim.left}</span>
                </div>
              </div>

              {/* 右侧 */}
              <div className="p-3 sm:p-4 rounded-xl bg-white shadow-[0_4px_15px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl flex-shrink-0">{dim.rightIcon}</span>
                  <span className="text-xs sm:text-sm text-gray-700 leading-tight">{dim.right}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
} 