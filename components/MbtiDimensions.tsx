'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function MbtiDimensions() {
  const dimensions = [
    {
      id: 'EI',
      left: 'Extraversion (E)',
      right: 'Introversion (I)',
      description: 'Energy source and attention direction',
      leftFeatures: ['Gain energy from external world', 'Enjoy social interaction', 'Think while speaking', 'Broad interests'],
      rightFeatures: ['Gain energy from inner world', 'Prefer deep thinking', 'Think before speaking', 'Deep interests']
    },
    {
      id: 'SN',
      left: 'Sensing (S)',
      right: 'iNtuition (N)',
      description: 'Information gathering and cognitive approach',
      leftFeatures: ['Focus on concrete facts', 'Trust experience', 'Detail-oriented', 'Practical approach'],
      rightFeatures: ['Focus on possibilities', 'Trust intuition', 'Big picture thinking', 'Innovative approach']
    },
    {
      id: 'TF',
      left: 'Thinking (T)',
      right: 'Feeling (F)',
      description: 'Decision-making and judgment basis',
      leftFeatures: ['Logic-based decisions', 'Objective analysis', 'Focus on fairness', 'Task-oriented'],
      rightFeatures: ['Value-based decisions', 'Consider people\'s feelings', 'Focus on harmony', 'People-oriented']
    },
    {
      id: 'JP',
      left: 'Judging (J)',
      right: 'Perceiving (P)',
      description: 'Lifestyle and behavioral patterns',
      leftFeatures: ['Prefer structure', 'Like planning', 'Decisive', 'Goal-oriented'],
      rightFeatures: ['Prefer flexibility', 'Like spontaneity', 'Adaptable', 'Process-oriented']
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {dimensions.map((dimension, index) => (
        <Card key={dimension.id} className="modern-card overflow-hidden">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            {/* Title and Description */}
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                {dimension.left} vs {dimension.right}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{dimension.description}</p>
            </div>
            
            {/* Dimension Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Side */}
              <div className={`glass-effect p-4 sm:p-6 rounded-xl border-l-4 ${
                index === 0 ? 'border-l-purple-500' :
                index === 1 ? 'border-l-blue-500' :
                index === 2 ? 'border-l-green-500' : 'border-l-orange-500'
              }`}>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">
                  {dimension.left}
                </h4>
                <ul className="space-y-2">
                  {dimension.leftFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-gray-600">
                      <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right Side */}
              <div className={`glass-effect p-4 sm:p-6 rounded-xl border-l-4 ${
                index === 0 ? 'border-l-pink-500' :
                index === 1 ? 'border-l-cyan-500' :
                index === 2 ? 'border-l-teal-500' : 'border-l-red-500'
              }`}>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">
                  {dimension.right}
                </h4>
                <ul className="space-y-2">
                  {dimension.rightFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-gray-600">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <div className="text-center glass-effect p-4 sm:p-6 rounded-xl">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          <strong>Note:</strong> Each person has preferences on all four dimensions, forming one of 16 personality types. 
          Understanding these dimensions helps us better understand ourselves and others.
        </p>
      </div>
    </div>
  );
} 