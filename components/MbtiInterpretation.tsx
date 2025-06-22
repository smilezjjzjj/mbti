'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMbtiInterpretationWithDeepseek } from '@/lib/deepseek';
import { Loader2, User, Briefcase, Heart, TrendingUp, RefreshCw, Lightbulb, ArrowLeft, BookOpen, Target, Users, AlertCircle } from 'lucide-react';

interface MbtiInterpretationProps {
  mbtiType: string;
  quickMode?: boolean;
}

const MbtiInterpretation: React.FC<MbtiInterpretationProps> = ({ mbtiType, quickMode = false }) => {
  const [interpretation, setInterpretation] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const generateInterpretation = async (isRetry = false) => {
    setLoading(true);
    setError(null);
    setLoadingProgress(0);
    setLoadingMessage(quickMode ? 'Starting quick analysis mode...' : 'Starting AI deep analysis...');
    
    if (isRetry) {
      setRetryCount(prev => prev + 1);
    } else {
      setRetryCount(0);
    }
    
    // Adjust progress update speed based on mode
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev < 90) {
          const increment = quickMode ? Math.random() * 25 + 10 : Math.random() * 15 + 5;
          const newProgress = Math.min(prev + increment, 90);
          
          // Update message based on progress and mode
          if (quickMode) {
            if (newProgress < 50) {
              setLoadingMessage(isRetry ? 'Reconnecting...' : 'Quick analysis of personality traits...');
            } else if (newProgress < 90) {
              setLoadingMessage('Generating interpretation report...');
            }
          } else {
            if (newProgress < 30) {
              setLoadingMessage(isRetry ? 'Reconnecting to AI service...' : 'Deep analysis of personality type...');
            } else if (newProgress < 60) {
              setLoadingMessage('Building personalized interpretation...');
            } else if (newProgress < 90) {
              setLoadingMessage('Generating professional advice...');
            }
          }
          
          return newProgress;
        }
        return prev;
      });
    }, quickMode ? 400 : 800);

    try {
      const result = await generateMbtiInterpretationWithDeepseek(mbtiType, quickMode);
      setLoadingProgress(100);
      setLoadingMessage('Interpretation complete!');
      setInterpretation(result);
      setRetryCount(0); // Reset retry count on success
    } catch (err) {
      console.error('Failed to generate interpretation:', err);
      
      // Smart error handling - don't directly show technical error messages
      let friendlyError = 'Service temporarily busy, please try again later';
      
      if (err instanceof Error) {
        const errorMessage = err.message.toLowerCase();
        
        if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
          friendlyError = 'Network connection unstable';
        } else if (errorMessage.includes('timeout') || errorMessage.includes('abort')) {
          friendlyError = 'Request timeout, server response is slow';
        } else if (errorMessage.includes('rate limit') || errorMessage.includes('quota')) {
          friendlyError = 'High traffic currently, please try again later';
        } else if (errorMessage.includes('unauthorized') || errorMessage.includes('api key')) {
          friendlyError = 'Service configuration error, please contact administrator';
        }
      }
      
      setError(friendlyError);
    } finally {
      clearInterval(progressInterval);
      setLoading(false);
      setLoadingProgress(0);
      setLoadingMessage('');
    }
  };

  useEffect(() => {
    if (mbtiType) {
      generateInterpretation();
    }
  }, [mbtiType]);

  const sectionTitles = [
    { 
      title: 'Career Development In-Depth Analysis', 
      icon: Briefcase, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-blue-600',
      description: 'Explore your career advantages and development paths'
    },
    { 
      title: 'Interpersonal Relationships In-Depth Analysis', 
      icon: Heart, 
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-pink-600',
      description: 'Deep understanding of your social patterns and relationship building'
    },
    { 
      title: 'Personal Growth Comprehensive Guide', 
      icon: TrendingUp, 
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-600',
      description: 'Create exclusive growth strategies and development plans'
    }
  ];

  // Provide targeted practical advice for each section
  const getSectionAdvice = (index: number, mbtiType: string) => {
    const adviceData: { [key: string]: string[][] } = {
      'INTJ': [
        // Career Development Advice
        [
          'Learn system architecture design',
          'Develop strategic thinking skills', 
          'Master project management skills',
          'Build personal brand influence'
        ],
        // Interpersonal Relationship Advice
        [
          'Practice active listening skills',
          'Learn to express emotional needs',
          'Regularly maintain important relationships',
          'Participate in team collaboration projects'
        ],
        // Personal Growth Advice
        [
          'Set 5-year career plan',
          'Develop public speaking abilities',
          'Learn cross-disciplinary knowledge',
          'Build reflection and summary habits'
        ]
      ],
      'ENFP': [
        // Career Development Advice
        [
          'Develop creative expression skills',
          'Build extensive professional networks',
          'Learn project execution methods',
          'Cultivate market sensitivity'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn deep listening skills',
          'Practice conflict resolution techniques',
          'Build stable friendship circles',
          'Balance giving and receiving'
        ],
        // Personal Growth Advice
        [
          'Cultivate focus training',
          'Build goal management systems',
          'Learn emotional regulation techniques',
          'Develop long-term persistence abilities'
        ]
      ],
      'ISTJ': [
        // Career Development Advice
        [
          'Master new technology tools',
          'Build standardized processes',
          'Cultivate team leadership',
          'Learn change management'
        ],
        // Interpersonal Relationship Advice
        [
          'Practice emotional expression',
          'Learn flexible communication',
          'Actively care for others',
          'Participate in social activities'
        ],
        // Personal Growth Advice
        [
          'Embrace moderate change',
          'Cultivate innovative thinking',
          'Learn stress management',
          'Develop hobbies and interests'
        ]
      ],
      'ESFP': [
        // Career Development Advice
        [
          'Develop performance and presentation skills',
          'Learn customer service excellence',
          'Cultivate event planning abilities',
          'Build social media presence'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn to handle criticism',
          'Practice deep conversation skills',
          'Build lasting friendships',
          'Develop conflict resolution'
        ],
        // Personal Growth Advice
        [
          'Cultivate long-term planning',
          'Learn financial management',
          'Develop analytical thinking',
          'Build study discipline'
        ]
      ],
      'INFJ': [
        // Career Development Advice
        [
          'Develop counseling and coaching skills',
          'Learn writing and communication',
          'Cultivate research abilities',
          'Build thought leadership'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn to set healthy boundaries',
          'Practice assertive communication',
          'Build supportive networks',
          'Develop social confidence'
        ],
        // Personal Growth Advice
        [
          'Cultivate practical implementation',
          'Learn stress management',
          'Develop self-care routines',
          'Build realistic expectations'
        ]
      ],
      'ENTP': [
        // Career Development Advice
        [
          'Develop innovation and entrepreneurship',
          'Learn debate and persuasion',
          'Cultivate strategic thinking',
          'Build diverse skill sets'
        ],
        // Interpersonal Relationship Advice
        [
          'Practice patience and listening',
          'Learn to follow through',
          'Build deep connections',
          'Develop empathy skills'
        ],
        // Personal Growth Advice
        [
          'Cultivate focus and completion',
          'Learn routine establishment',
          'Develop emotional intelligence',
          'Build consistent habits'
        ]
      ],
      'ISFJ': [
        // Career Development Advice
        [
          'Develop healthcare and service skills',
          'Learn administrative excellence',
          'Cultivate teaching abilities',
          'Build professional certifications'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn to ask for help',
          'Practice saying no appropriately',
          'Build reciprocal relationships',
          'Develop self-advocacy'
        ],
        // Personal Growth Advice
        [
          'Cultivate self-confidence',
          'Learn to take calculated risks',
          'Develop innovation skills',
          'Build personal interests'
        ]
      ],
      'ESTP': [
        // Career Development Advice
        [
          'Develop sales and negotiation skills',
          'Learn hands-on technical skills',
          'Cultivate emergency response',
          'Build networking abilities'
        ],
        // Interpersonal Relationship Advice
        [
          'Practice long-term commitment',
          'Learn emotional depth',
          'Build stable relationships',
          'Develop listening patience'
        ],
        // Personal Growth Advice
        [
          'Cultivate strategic planning',
          'Learn theoretical understanding',
          'Develop reflection habits',
          'Build learning systems'
        ]
      ],
      'INFP': [
        // Career Development Advice
        [
          'Develop creative writing skills',
          'Learn artistic expression',
          'Cultivate counseling abilities',
          'Build portfolio and showcase'
        ],
        // Interpersonal Relationship Advice
        [
          'Practice assertive communication',
          'Learn conflict engagement',
          'Build professional networks',
          'Develop social skills'
        ],
        // Personal Growth Advice
        [
          'Cultivate practical skills',
          'Learn time management',
          'Develop organizational abilities',
          'Build achievement habits'
        ]
      ],
      'ENTJ': [
        // Career Development Advice
        [
          'Develop executive leadership',
          'Learn strategic planning',
          'Cultivate business acumen',
          'Build industry expertise'
        ],
        // Interpersonal Relationship Advice
        [
          'Practice empathetic listening',
          'Learn collaborative leadership',
          'Build inclusive culture',
          'Develop emotional intelligence'
        ],
        // Personal Growth Advice
        [
          'Cultivate work-life balance',
          'Learn stress management',
          'Develop mindfulness practices',
          'Build sustainable habits'
        ]
      ],
      'INTP': [
        // Career Development Advice
        [
          'Develop research and analysis',
          'Learn technical expertise',
          'Cultivate problem-solving',
          'Build knowledge specialization'
        ],
        // Interpersonal Relationship Advice
        [
          'Practice social interaction',
          'Learn emotional expression',
          'Build collaborative skills',
          'Develop networking abilities'
        ],
        // Personal Growth Advice
        [
          'Cultivate practical application',
          'Learn project completion',
          'Develop communication skills',
          'Build implementation habits'
        ]
      ],
      'ENFJ': [
        // Career Development Advice
        [
          'Develop teaching and mentoring',
          'Learn organizational leadership',
          'Cultivate public speaking',
          'Build community influence'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn to receive support',
          'Practice self-care boundaries',
          'Build reciprocal relationships',
          'Develop personal time'
        ],
        // Personal Growth Advice
        [
          'Cultivate personal interests',
          'Learn stress management',
          'Develop self-awareness',
          'Build individual goals'
        ]
      ],
      'ESTJ': [
        // Career Development Advice
        [
          'Develop strategic leadership',
          'Learn digital management',
          'Cultivate innovative thinking',
          'Build industry influence'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn emotional care',
          'Practice patient listening',
          'Build trust culture',
          'Develop humanistic care'
        ],
        // Personal Growth Advice
        [
          'Cultivate work-life balance',
          'Learn stress management',
          'Develop emotional intelligence',
          'Build sustainable development'
        ]
      ],
      'ISFP': [
        // Career Development Advice
        [
          'Develop artistic creation skills',
          'Learn customer relationship management',
          'Cultivate craftsmanship',
          'Build portfolio collection'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn active expression',
          'Practice self-advocacy',
          'Build trust relationships',
          'Develop communication confidence'
        ],
        // Personal Growth Advice
        [
          'Cultivate goal setting',
          'Learn self-promotion',
          'Develop organizational abilities',
          'Build growth plans'
        ]
      ],
      'ESFJ': [
        // Career Development Advice
        [
          'Develop human resources skills',
          'Learn team building',
          'Cultivate service management',
          'Build professional certifications'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn to set boundaries',
          'Practice accepting criticism',
          'Build equal relationships',
          'Develop independence'
        ],
        // Personal Growth Advice
        [
          'Cultivate critical thinking',
          'Learn change adaptation',
          'Develop innovation abilities',
          'Build personal interests'
        ]
      ],
      'ISTP': [
        // Career Development Advice
        [
          'Develop technical repair skills',
          'Learn engineering design',
          'Cultivate problem-solving',
          'Build practical expertise'
        ],
        // Interpersonal Relationship Advice
        [
          'Learn emotional sharing',
          'Practice active communication',
          'Build deep friendships',
          'Develop team cooperation'
        ],
        // Personal Growth Advice
        [
          'Cultivate long-term planning',
          'Learn theoretical learning',
          'Develop expression abilities',
          'Build learning systems'
        ]
      ]
    };

    // Default general advice
    const defaultAdvice = [
      [
        'Enhance core competitiveness',
        'Build professional networks',
        'Learn industry trends',
        'Cultivate leadership abilities'
      ],
      [
        'Improve communication skills',
        'Build trust relationships',
        'Learn emotional expression',
        'Develop social skills'
      ],
      [
        'Create growth plans',
        'Cultivate learning abilities',
        'Build reflection habits',
        'Develop diverse skills'
      ]
    ];

    const typeAdvice = adviceData[mbtiType] || defaultAdvice;
    return typeAdvice[index] || defaultAdvice[index];
  };

  // Format text, add paragraph separation and improve readability
  const formatText = (text: string) => {
    // Remove title at the beginning (if exists)
    const cleanText = text.replace(/^[^：]*：\s*/, '');
    
    // Split by periods but keep the periods
    const sentences = cleanText.split(/([。！？])/);
    let formattedSentences = [];
    
    for (let i = 0; i < sentences.length; i += 2) {
      const sentence = sentences[i];
      const punctuation = sentences[i + 1] || '';
      
      if (sentence && sentence.trim()) {
        formattedSentences.push(sentence.trim() + punctuation);
      }
    }
    
    // 3-4 sentences per paragraph
    const paragraphs = [];
    for (let i = 0; i < formattedSentences.length; i += 3) {
      const paragraph = formattedSentences.slice(i, i + 3).join('');
      if (paragraph.trim()) {
        paragraphs.push(paragraph.trim());
      }
    }
    
    return paragraphs;
  };

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
          <CardContent className="p-4 sm:p-8 lg:p-12">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-8">
              {/* Loading Animation */}
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-200 rounded-full animate-spin">
                  <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 animate-pulse" />
                </div>
              </div>
              
              <div className="text-center space-y-3 sm:space-y-4 px-2">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800">{loadingMessage}</h3>
                <p className="text-sm sm:text-lg text-gray-600">
                  {quickMode ? 'Estimated 10-15 seconds' : 'Estimated 15-30 seconds'}, please wait
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Generating professional interpretation for your <span className="font-semibold text-blue-600">{mbtiType}</span> type
                </p>
              </div>
              
              {/* Improved Progress Bar */}
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg px-2">
                <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  <span className="font-medium">Interpretation Progress</span>
                  <span className="font-bold">{Math.round(loadingProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 sm:h-4 rounded-full transition-all duration-700 ease-out relative"
                    style={{width: `${loadingProgress}%`}}
                  >
                    <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                    <div className="absolute right-0 top-0 h-full w-6 sm:w-8 bg-gradient-to-l from-white/30 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Tips */}
              <div className="text-center max-w-xs sm:max-w-lg bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 mx-2">
                <div className="flex items-center justify-center mb-2">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Professional Tip</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We are using advanced AI technology combined with psychological theories to generate a personalized in-depth interpretation report for you
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-orange-50/30 to-red-50/30">
          <CardContent className="p-4 sm:p-8 lg:p-12">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-8">
              {/* Error Icon */}
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center border-4 border-orange-200">
                  <AlertCircle className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 px-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                  Interpretation Service Temporarily Busy
                </h3>
                <div className="max-w-xs sm:max-w-lg mx-auto space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Our AI interpretation service is processing a large number of requests, please try again later
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Usually returns to normal within a few minutes, thank you for your patience
                  </p>
                  {retryCount > 0 && (
                    <p className="text-xs text-amber-600 bg-amber-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-amber-200">
                      Retried {retryCount} times {retryCount >= 3 ? '• Suggest trying again later' : ''}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Retry Options */}
              <div className="space-y-3 sm:space-y-4 px-2">
                <Button 
                  onClick={() => generateInterpretation(true)}
                  disabled={retryCount >= 5}
                  className={`${
                    retryCount >= 5 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                  } text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:shadow-lg text-sm sm:text-base`}
                >
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  {retryCount >= 5 ? 'Retry Limit Reached' : 'Retry Now'}
                </Button>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Reselect Type
                  </button>
                  
                  <button
                    onClick={() => generateInterpretation(true)}
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Try Again Later
                  </button>
                </div>
              </div>
              
              {/* Friendly Tips */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {retryCount >= 3 ? 'Friendly Suggestion' : 'Tips'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {retryCount >= 3 
                    ? 'Multiple retries unsuccessful, suggest you try again later. Our technical team is optimizing the service to provide you with a more stable interpretation experience.'
                    : retryCount >= 1
                    ? 'If retry still fails, it may be due to high current traffic. Suggest waiting a few minutes before trying again, or check network connection.'
                    : 'If the problem persists, it may be due to unstable network connection. Suggest checking the network and retrying, or come back later to experience our professional interpretation service.'
                  }
                </p>
              </div>
              
              {/* Debug Info (only shown in development environment) */}
              {process.env.NODE_ENV === 'development' && (
                <details className="text-left max-w-xs sm:max-w-lg mx-auto px-2">
                  <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                    Development Debug Info (click to expand)
                  </summary>
                  <div className="mt-2 p-2 sm:p-3 bg-gray-100 rounded-lg text-xs text-gray-600 font-mono break-all">
                    {error}
                  </div>
                </details>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (interpretation.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-8">
            <div className="text-center space-y-4">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400" />
              <p className="text-base sm:text-lg text-gray-600">No interpretation content available</p>
              <Button 
                onClick={() => generateInterpretation()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                Start Generating Interpretation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-8 px-2 sm:px-3 lg:px-8">
      {/* Return Selection Button */}
      <div className="flex justify-center px-1">
        <button
          onClick={() => window.location.reload()}
          className="group inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Reselect MBTI Type
        </button>
      </div>

      {/* Title Area */}
      <div className="text-center space-y-4 sm:space-y-6 px-1">
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-white/20 shadow-2xl">
            {/* MBTI Type Badge */}
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 lg:mb-6 shadow-lg">
              <span className="text-base sm:text-xl lg:text-2xl font-bold text-white">{mbtiType}</span>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent px-1">
              {mbtiType} Personality Type Interpretation Report
            </h1>
            
            <div className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-3 sm:mb-4 lg:mb-6">
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {quickMode ? '🚀 Quick Mode' : '🎯 Professional In-Depth Mode'}
              </span>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 lg:mb-8 px-1">
              {quickMode 
                ? 'Quick personality insights based on MBTI theory, providing core advice and development directions' 
                : 'Based on psychological theory and AI deep analysis, presenting comprehensive personality insights and professional development advice'
              }
            </p>
            
            <Button 
              onClick={() => generateInterpretation()}
              variant="outline"
              className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Regenerate Interpretation
            </Button>
          </div>
        </div>
      </div>

      {/* Interpretation Content */}
      <div className="space-y-4 sm:space-y-8 lg:space-y-12">
        {interpretation.map((content, index) => {
          const section = sectionTitles[index];
          const Icon = section?.icon || User;
          const paragraphs = formatText(content);
          
          return (
            <div key={index} className="relative px-1">
              {/* Background Decoration */}
              <div className={`absolute inset-0 bg-gradient-to-r ${section?.gradientFrom || 'from-gray-500'} ${section?.gradientTo || 'to-gray-600'} opacity-5 rounded-2xl sm:rounded-3xl blur-2xl`}></div>
              
              <Card className={`relative border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden`}>
                {/* Top Decoration Bar */}
                <div className={`h-1 sm:h-2 bg-gradient-to-r ${section?.gradientFrom || 'from-gray-500'} ${section?.gradientTo || 'to-gray-600'}`}></div>
                
                <CardHeader className="pb-3 sm:pb-4 lg:pb-6 pt-4 sm:pt-6 lg:pt-8 px-3 sm:px-4 lg:px-6 xl:px-8">
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-6">
                    {/* Icon Area */}
                    <div className={`flex-shrink-0 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl ${section?.bgColor || 'bg-gray-50'} ${section?.borderColor || 'border-gray-200'} border border-2 shadow-lg`}>
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${section?.color || 'text-gray-600'}`} />
                    </div>
                    
                    {/* Title Area */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {section?.title || `Section ${index + 1}`}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {section?.description || 'Professional personality analysis content'}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-3 sm:px-4 lg:px-6 xl:px-8 pb-4 sm:pb-6 lg:pb-8">
                  {/* Main Content */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {paragraphs.map((paragraph, pIndex) => (
                      <div key={pIndex} className="relative">
                        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                          <p className="text-gray-800 leading-relaxed text-justify text-xs sm:text-sm lg:text-base xl:text-lg font-normal tracking-wide">
                            {paragraph}
                          </p>
                        </div>
                        {pIndex < paragraphs.length - 1 && (
                          <div className="mt-3 sm:mt-4 lg:mt-6 flex justify-center">
                            <div className="w-12 sm:w-16 lg:w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Practical Advice Area */}
                    <div className="mt-6 sm:mt-8 lg:mt-10 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">Key Actionable Advice</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {getSectionAdvice(index, mbtiType).map((advice: string, adviceIndex: number) => (
                          <div key={adviceIndex} className="flex items-center text-xs sm:text-sm text-gray-700 bg-white/60 rounded-lg p-2 sm:p-3 shadow-sm">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                            <span className="leading-relaxed">{advice}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Professional Summary */}
      <Card className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 border-0 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden mx-1">
        <div className="h-1 sm:h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <CardContent className="p-3 sm:p-4 lg:p-8 xl:p-12">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
              <div className="p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                Professional Interpretation Summary
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto px-1">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                The above interpretation is based on <span className="font-semibold text-blue-600">MBTI theoretical framework</span> and <span className="font-semibold text-purple-600">modern psychological research</span>,
                combined with <span className="font-semibold text-pink-600">AI deep analysis technology</span>, providing personalized growth guidance for you.
                Please integrate these insights with real life to create your own development blueprint.
              </p>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                {[
                  { icon: '🎯', label: 'Goal-Oriented', color: 'from-blue-500 to-blue-600' },
                  { icon: '🌱', label: 'Continuous Growth', color: 'from-green-500 to-emerald-600' },
                  { icon: '🤝', label: 'Harmonious Relations', color: 'from-pink-500 to-rose-600' },
                  { icon: '💡', label: 'Self-Awareness', color: 'from-purple-500 to-violet-600' }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className={`bg-gradient-to-br ${item.color} rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 text-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                      <div className="text-base sm:text-lg lg:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                      <div className="text-white font-medium text-xs sm:text-sm">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  💫 <strong>Warm Reminder:</strong> Personality type is a tool for understanding yourself, not a limitation. True growth comes from continuous self-exploration, learning practice, and the courage to break out of your comfort zone.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MbtiInterpretation;