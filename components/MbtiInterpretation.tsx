'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMbtiInterpretationWithDeepseek } from '@/lib/deepseek';
import { Loader2, User, Briefcase, Heart, TrendingUp, RefreshCw, Lightbulb, ArrowLeft, BookOpen, Target, Users } from 'lucide-react';

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
    setLoadingMessage(quickMode ? '启动快速解读模式...' : '启动AI深度分析...');
    
    if (isRetry) {
      setRetryCount(prev => prev + 1);
    } else {
      setRetryCount(0);
    }
    
    // 根据模式调整进度更新速度
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev < 90) {
          const increment = quickMode ? Math.random() * 25 + 10 : Math.random() * 15 + 5;
          const newProgress = Math.min(prev + increment, 90);
          
          // 根据进度和模式更新消息
          if (quickMode) {
            if (newProgress < 50) {
              setLoadingMessage(isRetry ? '重新连接中...' : '快速分析性格特质...');
            } else if (newProgress < 90) {
              setLoadingMessage('生成解读报告...');
            }
          } else {
            if (newProgress < 30) {
              setLoadingMessage(isRetry ? '重新连接AI服务...' : '深度分析性格类型...');
            } else if (newProgress < 60) {
              setLoadingMessage('构建个性化解读...');
            } else if (newProgress < 90) {
              setLoadingMessage('生成专业建议...');
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
      setLoadingMessage('解读完成！');
      setInterpretation(result);
      setRetryCount(0); // 成功后重置重试计数
    } catch (err) {
      console.error('生成解读失败:', err);
      
      // 智能错误处理 - 不直接显示技术错误信息
      let friendlyError = '服务暂时繁忙，请稍后重试';
      
      if (err instanceof Error) {
        const errorMessage = err.message.toLowerCase();
        
        if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
          friendlyError = '网络连接不稳定';
        } else if (errorMessage.includes('timeout') || errorMessage.includes('abort')) {
          friendlyError = '请求超时，服务器响应较慢';
        } else if (errorMessage.includes('rate limit') || errorMessage.includes('quota')) {
          friendlyError = '当前访问量较大，请稍后再试';
        } else if (errorMessage.includes('unauthorized') || errorMessage.includes('api key')) {
          friendlyError = '服务配置异常，请联系管理员';
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
      title: '职业发展深度解析', 
      icon: Briefcase, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-blue-600',
      description: '探索您的职业优势与发展路径'
    },
    { 
      title: '人际关系深度剖析', 
      icon: Heart, 
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-pink-600',
      description: '深入了解您的社交模式与关系建立'
    },
    { 
      title: '个人成长全面指南', 
      icon: TrendingUp, 
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-600',
      description: '制定专属的成长策略与发展计划'
    }
  ];

  // 为每个部分提供针对性的实用建议
  const getSectionAdvice = (index: number, mbtiType: string) => {
    const adviceData: { [key: string]: string[][] } = {
      'INTJ': [
        // 职业发展建议
        [
          '学习系统架构设计',
          '培养战略思维能力', 
          '掌握项目管理技能',
          '建立个人品牌影响力'
        ],
        // 人际关系建议
        [
          '练习主动倾听技巧',
          '学会表达情感需求',
          '定期维护重要关系',
          '参与团队协作项目'
        ],
        // 个人成长建议
        [
          '设定5年职业规划',
          '培养公众演讲能力',
          '学习跨领域知识',
          '建立反思总结习惯'
        ]
      ],
      'ENFP': [
        // 职业发展建议
        [
          '发展创意表达技能',
          '建立广泛人脉网络',
          '学习项目执行方法',
          '培养市场敏感度'
        ],
        // 人际关系建议
        [
          '学会深度倾听',
          '练习冲突解决技巧',
          '建立稳定友谊圈',
          '平衡给予与接受'
        ],
        // 个人成长建议
        [
          '培养专注力训练',
          '建立目标管理系统',
          '学习情绪调节技巧',
          '发展长期坚持能力'
        ]
      ],
      'ISTJ': [
        // 职业发展建议
        [
          '掌握新技术工具',
          '建立标准化流程',
          '培养团队领导力',
          '学习变革管理'
        ],
        // 人际关系建议
        [
          '练习情感表达',
          '学会灵活沟通',
          '主动关心他人',
          '参与社交活动'
        ],
        // 个人成长建议
        [
          '拥抱适度变化',
          '培养创新思维',
          '学习压力管理',
          '发展兴趣爱好'
        ]
      ],
      'ESFP': [
        // 职业发展建议
        [
          '发展人际影响力',
          '学习客户服务技巧',
          '培养团队协作能力',
          '掌握沟通表达技能'
        ],
        // 人际关系建议
        [
          '学会深度交流',
          '建立长期关系',
          '练习边界设定',
          '发展同理心技能'
        ],
        // 个人成长建议
        [
          '培养计划执行力',
          '学习时间管理',
          '发展专业技能',
          '建立学习习惯'
        ]
      ],
      'INFJ': [
        // 职业发展建议
        [
          '发展咨询指导技能',
          '学习内容创作',
          '培养教育培训能力',
          '建立专业声誉'
        ],
        // 人际关系建议
        [
          '学会设定边界',
          '练习直接沟通',
          '建立支持网络',
          '平衡独处与社交'
        ],
        // 个人成长建议
        [
          '将理想转化为行动',
          '学习压力释放技巧',
          '培养实用技能',
          '建立自我关怀习惯'
        ]
      ],
      'ENTP': [
        // 职业发展建议
        [
          '发展创新思维',
          '学习快速原型制作',
          '培养说服影响力',
          '掌握多项目管理'
        ],
        // 人际关系建议
        [
          '学会深度承诺',
          '练习耐心倾听',
          '建立稳定关系',
          '发展情感智慧'
        ],
        // 个人成长建议
        [
          '培养执行完成力',
          '学习细节关注',
          '建立持续学习',
          '发展专业深度'
        ]
      ],
      'ISFJ': [
        // 职业发展建议
        [
          '发展服务管理技能',
          '学习团队协调',
          '培养质量控制能力',
          '建立专业网络'
        ],
        // 人际关系建议
        [
          '学会表达需求',
          '练习说"不"的技巧',
          '建立互惠关系',
          '发展自信表达'
        ],
        // 个人成长建议
        [
          '培养自我倡导',
          '学习变化适应',
          '发展创新思维',
          '建立个人目标'
        ]
      ],
      'ESTP': [
        // 职业发展建议
        [
          '发展销售谈判技能',
          '学习危机处理',
          '培养团队激励能力',
          '掌握实战经验'
        ],
        // 人际关系建议
        [
          '学会深度交流',
          '练习长期承诺',
          '建立稳定友谊',
          '发展情感敏感度'
        ],
        // 个人成长建议
        [
          '培养长远规划',
          '学习理论学习',
          '发展反思能力',
          '建立学习习惯'
        ]
      ],
      'INFP': [
        // 职业发展建议
        [
          '发展创意写作技能',
          '学习个人品牌建设',
          '培养独立工作能力',
          '建立价值观匹配'
        ],
        // 人际关系建议
        [
          '学会直接沟通',
          '练习冲突处理',
          '建立支持圈子',
          '发展社交技能'
        ],
        // 个人成长建议
        [
          '将想法付诸实践',
          '学习时间管理',
          '培养决策能力',
          '建立行动计划'
        ]
      ],
      'ESTJ': [
        // 职业发展建议
        [
          '发展战略领导力',
          '学习数字化管理',
          '培养创新思维',
          '建立行业影响力'
        ],
        // 人际关系建议
        [
          '学会灵活沟通',
          '练习情感理解',
          '建立多元关系',
          '发展包容性'
        ],
        // 个人成长建议
        [
          '培养适应性思维',
          '学习创意方法',
          '发展情商技能',
          '建立工作生活平衡'
        ]
      ],
      'ISFP': [
        // 职业发展建议
        [
          '发展艺术创作技能',
          '学习客户关系管理',
          '培养手工技艺',
          '建立作品集'
        ],
        // 人际关系建议
        [
          '学会主动表达',
          '练习自我倡导',
          '建立信任关系',
          '发展沟通自信'
        ],
        // 个人成长建议
        [
          '培养目标设定',
          '学习自我推广',
          '发展组织能力',
          '建立成长计划'
        ]
      ],
      'ESFJ': [
        // 职业发展建议
        [
          '发展人力资源技能',
          '学习团队建设',
          '培养服务管理',
          '建立专业认证'
        ],
        // 人际关系建议
        [
          '学会设定边界',
          '练习接受批评',
          '建立平等关系',
          '发展独立性'
        ],
        // 个人成长建议
        [
          '培养批判思维',
          '学习变革适应',
          '发展创新能力',
          '建立个人兴趣'
        ]
      ],
      'INTP': [
        // 职业发展建议
        [
          '发展技术专长',
          '学习研究方法',
          '培养理论建构',
          '建立学术声誉'
        ],
        // 人际关系建议
        [
          '学会情感表达',
          '练习社交技巧',
          '建立协作关系',
          '发展团队精神'
        ],
        // 个人成长建议
        [
          '培养实践应用',
          '学习项目管理',
          '发展沟通技能',
          '建立执行力'
        ]
      ],
      'ENTJ': [
        // 职业发展建议
        [
          '发展企业战略',
          '学习全球化管理',
          '培养创新领导',
          '建立商业帝国'
        ],
        // 人际关系建议
        [
          '学会情感关怀',
          '练习耐心倾听',
          '建立信任文化',
          '发展人文关怀'
        ],
        // 个人成长建议
        [
          '培养工作生活平衡',
          '学习压力管理',
          '发展情商技能',
          '建立可持续发展'
        ]
      ],
      'ENFJ': [
        // 职业发展建议
        [
          '发展教练指导技能',
          '学习组织发展',
          '培养公众演讲',
          '建立影响力平台'
        ],
        // 人际关系建议
        [
          '学会自我关怀',
          '练习设定边界',
          '建立支持系统',
          '发展个人需求表达'
        ],
        // 个人成长建议
        [
          '培养个人兴趣',
          '学习独处技能',
          '发展批判思维',
          '建立自我价值感'
        ]
      ],
      'ISTP': [
        // 职业发展建议
        [
          '发展技术维修技能',
          '学习工程设计',
          '培养问题解决',
          '建立实用专长'
        ],
        // 人际关系建议
        [
          '学会情感分享',
          '练习主动沟通',
          '建立深度友谊',
          '发展团队合作'
        ],
        // 个人成长建议
        [
          '培养长期规划',
          '学习理论学习',
          '发展表达能力',
          '建立学习体系'
        ]
      ]
    };

    // 默认通用建议
    const defaultAdvice = [
      [
        '提升核心竞争力',
        '建立职业网络',
        '学习行业趋势',
        '培养领导能力'
      ],
      [
        '改善沟通技巧',
        '建立信任关系',
        '学会情感表达',
        '发展社交技能'
      ],
      [
        '制定成长计划',
        '培养学习能力',
        '建立反思习惯',
        '发展多元技能'
      ]
    ];

    const typeAdvice = adviceData[mbtiType] || defaultAdvice;
    return typeAdvice[index] || defaultAdvice[index];
  };

  // 格式化文本，添加段落分隔和改善可读性
  const formatText = (text: string) => {
    // 移除开头的标题（如果存在）
    const cleanText = text.replace(/^[^：]*：\s*/, '');
    
    // 按句号分割，但保留句号
    const sentences = cleanText.split(/([。！？])/);
    let formattedSentences = [];
    
    for (let i = 0; i < sentences.length; i += 2) {
      const sentence = sentences[i];
      const punctuation = sentences[i + 1] || '';
      
      if (sentence && sentence.trim()) {
        formattedSentences.push(sentence.trim() + punctuation);
      }
    }
    
    // 每3-4句为一段
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
      <div className="w-full max-w-6xl mx-auto">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
          <CardContent className="p-12">
            <div className="flex flex-col items-center justify-center space-y-8">
              {/* 动画加载器 */}
              <div className="relative">
                <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin">
                  <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 text-blue-600 animate-pulse" />
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">{loadingMessage}</h3>
                <p className="text-lg text-gray-600">
                  {quickMode ? '预计需要10-15秒' : '预计需要15-30秒'}，请稍候
                </p>
                <p className="text-sm text-gray-500">
                  正在为您的 <span className="font-semibold text-blue-600">{mbtiType}</span> 类型生成专业解读
                </p>
              </div>
              
              {/* 改进的进度条 */}
              <div className="w-96 max-w-full">
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span className="font-medium">解读进度</span>
                  <span className="font-bold">{Math.round(loadingProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-700 ease-out relative"
                    style={{width: `${loadingProgress}%`}}
                  >
                    <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                    <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/30 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* 提示信息 */}
              <div className="text-center max-w-lg bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Lightbulb className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">专业提示</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  我们正在运用先进的AI技术，结合心理学理论为您生成个性化的深度解读报告
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
      <div className="w-full max-w-4xl mx-auto">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-orange-50/30 to-red-50/30">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center space-y-8">
              {/* 友好的图标 */}
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {/* 装饰性光环 */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  解读服务暂时繁忙
                </h3>
                <div className="max-w-lg mx-auto space-y-3">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    我们的AI解读服务正在处理大量请求，请稍后再试
                  </p>
                  <p className="text-sm text-gray-500">
                    通常几分钟后就会恢复正常，感谢您的耐心等待
                  </p>
                  {retryCount > 0 && (
                    <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                      已重试 {retryCount} 次 {retryCount >= 3 ? '• 建议稍后再试' : ''}
                    </p>
                  )}
                </div>
              </div>
              
              {/* 重试选项 */}
              <div className="space-y-4">
                <Button 
                  onClick={() => generateInterpretation(true)}
                  disabled={retryCount >= 5}
                  className={`${
                    retryCount >= 5 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                  } text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:shadow-lg`}
                >
                  <RefreshCw className="w-5 h-5 mr-3" />
                  {retryCount >= 5 ? '已达重试上限' : '立即重试'}
                </Button>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    重新选择类型
                  </button>
                  
                  <button
                    onClick={() => generateInterpretation(true)}
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    稍后重试
                  </button>
                </div>
              </div>
              
              {/* 友好提示 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
                <div className="flex items-center justify-center mb-3">
                  <Lightbulb className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">
                    {retryCount >= 3 ? '温馨建议' : '小贴士'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {retryCount >= 3 
                    ? '多次重试未成功，建议您稍后再来体验。我们的技术团队正在优化服务，为您提供更稳定的解读体验。'
                    : retryCount >= 1
                    ? '如果重试仍然失败，可能是当前访问量较大。建议等待几分钟后再试，或检查网络连接。'
                    : '如果问题持续存在，可能是网络连接不稳定。建议检查网络后重试，或稍后再来体验我们的专业解读服务。'
                  }
                </p>
              </div>
              
              {/* 调试信息（仅在开发环境显示） */}
              {process.env.NODE_ENV === 'development' && (
                <details className="text-left max-w-lg mx-auto">
                  <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                    开发调试信息（点击展开）
                  </summary>
                  <div className="mt-2 p-3 bg-gray-100 rounded-lg text-xs text-gray-600 font-mono break-all">
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
      <div className="w-full max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <BookOpen className="w-16 h-16 mx-auto text-gray-400" />
              <p className="text-lg text-gray-600">暂无解读内容</p>
              <Button 
                onClick={() => generateInterpretation()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                开始生成解读
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      {/* 返回选择按钮 */}
      <div className="flex justify-center">
        <button
          onClick={() => window.location.reload()}
          className="group inline-flex items-center px-6 py-3 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          重新选择MBTI类型
        </button>
      </div>

      {/* 标题区域 */}
      <div className="text-center space-y-6">
        <div className="relative">
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
            {/* MBTI类型徽章 */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">{mbtiType}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              {mbtiType} 性格类型解读报告
            </h1>
            
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-700">
                {quickMode ? '🚀 快速模式' : '🎯 专业深度模式'}
              </span>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {quickMode 
                ? '基于MBTI理论的快速性格洞察，为您提供核心建议和发展方向' 
                : '基于心理学理论和AI深度分析，为您呈现全面的性格洞察和专业发展建议'
              }
            </p>
            
            <Button 
              onClick={() => generateInterpretation()}
              variant="outline"
              className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 font-medium px-6 py-3 rounded-xl transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              重新生成解读
            </Button>
          </div>
        </div>
      </div>

      {/* 解读内容 */}
      <div className="space-y-12">
        {interpretation.map((content, index) => {
          const section = sectionTitles[index];
          const Icon = section?.icon || User;
          const paragraphs = formatText(content);
          
          return (
            <div key={index} className="relative">
              {/* 背景装饰 */}
              <div className={`absolute inset-0 bg-gradient-to-r ${section?.gradientFrom || 'from-gray-500'} ${section?.gradientTo || 'to-gray-600'} opacity-5 rounded-3xl blur-2xl`}></div>
              
              <Card className={`relative border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden`}>
                {/* 顶部装饰条 */}
                <div className={`h-2 bg-gradient-to-r ${section?.gradientFrom || 'from-gray-500'} ${section?.gradientTo || 'to-gray-600'}`}></div>
                
                <CardHeader className="pb-6 pt-8 px-8 sm:px-12">
                  <div className="flex items-start gap-6">
                    {/* 图标区域 */}
                    <div className={`flex-shrink-0 p-4 rounded-2xl ${section?.bgColor || 'bg-gray-50'} ${section?.borderColor || 'border-gray-200'} border-2 shadow-lg`}>
                      <Icon className={`h-8 w-8 ${section?.color || 'text-gray-600'}`} />
                    </div>
                    
                    {/* 标题区域 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${section?.gradientFrom || 'from-gray-500'} ${section?.gradientTo || 'to-gray-600'} text-white text-sm font-bold`}>
                          {index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {section?.title || `第 ${index + 1} 部分`}
                        </h2>
                      </div>
                      {section?.description && (
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {section.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 sm:px-12 pb-8">
                  {/* 主要内容 */}
                  <div className="space-y-8">
                    {paragraphs.map((paragraph, pIndex) => (
                      <div key={pIndex} className="relative">
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-800 leading-relaxed text-justify text-base sm:text-lg font-normal tracking-wide">
                            {paragraph}
                          </p>
                        </div>
                        {pIndex < paragraphs.length - 1 && (
                          <div className="mt-6 flex justify-center">
                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* 实用建议区域 */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-amber-100 rounded-lg">
                          <Target className="h-5 w-5 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          实用建议与行动指南
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {getSectionAdvice(index, mbtiType).map((advice, adviceIndex) => (
                          <div
                            key={adviceIndex}
                            className={`group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br ${section?.bgColor || 'bg-gray-50'} border ${section?.borderColor || 'border-gray-200'} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section?.gradientFrom || 'from-gray-500'} ${section?.gradientTo || 'to-gray-600'} flex-shrink-0`}></div>
                              <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                                {advice}
                              </span>
                            </div>
                            
                            {/* 悬停效果 */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${section?.gradientFrom || 'from-gray-500'} ${section?.gradientTo || 'to-gray-600'} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
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

      {/* 底部总结卡片 */}
      <Card className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 border-0 shadow-2xl rounded-3xl overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <CardContent className="p-8 sm:p-12">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-lg">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                专业解读总结
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                以上解读基于<span className="font-semibold text-blue-600">MBTI理论框架</span>和<span className="font-semibold text-purple-600">现代心理学研究</span>，
                结合<span className="font-semibold text-pink-600">AI深度分析技术</span>，为您提供个性化的成长指导。
                请将这些洞察与实际生活相结合，制定属于您的发展蓝图。
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: '🎯', label: '目标导向', color: 'from-blue-500 to-blue-600' },
                  { icon: '🌱', label: '持续成长', color: 'from-green-500 to-emerald-600' },
                  { icon: '🤝', label: '和谐关系', color: 'from-pink-500 to-rose-600' },
                  { icon: '💡', label: '自我觉察', color: 'from-purple-500 to-violet-600' }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-4 text-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-white font-medium text-sm">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-sm text-gray-600 leading-relaxed">
                  💫 <strong>温馨提示：</strong>性格类型是了解自己的工具，而非限制。真正的成长来自于持续的自我探索、学习实践和勇于突破舒适圈的勇气。
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