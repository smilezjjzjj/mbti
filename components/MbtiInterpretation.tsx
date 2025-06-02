'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMbtiInterpretationWithDeepseek } from '@/lib/deepseek';
import { Loader2, User, Briefcase, Heart, TrendingUp, RefreshCw, Lightbulb } from 'lucide-react';

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

  const generateInterpretation = async () => {
    setLoading(true);
    setError(null);
    setLoadingProgress(0);
    setLoadingMessage(quickMode ? '正在快速生成解读...' : '正在连接AI服务...');
    
    // 根据模式调整进度更新速度
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev < 90) {
          const increment = quickMode ? Math.random() * 25 + 10 : Math.random() * 15 + 5;
          const newProgress = Math.min(prev + increment, 90);
          
          // 根据进度和模式更新消息
          if (quickMode) {
            if (newProgress < 50) {
              setLoadingMessage('快速分析中...');
            } else if (newProgress < 90) {
              setLoadingMessage('即将完成...');
            }
          } else {
            if (newProgress < 30) {
              setLoadingMessage('正在分析您的性格类型...');
            } else if (newProgress < 60) {
              setLoadingMessage('AI正在生成个性化解读...');
            } else if (newProgress < 90) {
              setLoadingMessage('正在整理专业建议...');
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
    } catch (err) {
      console.error('生成解读失败:', err);
      setError(err instanceof Error ? err.message : '生成解读时发生未知错误');
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
    { title: '职业发展深度解析', icon: Briefcase, color: 'text-blue-600' },
    { title: '人际关系深度剖析', icon: Heart, color: 'text-green-600' },
    { title: '个人成长全面指南', icon: TrendingUp, color: 'text-purple-600' }
  ];

  // 为每个部分提供针对性的实用建议
  const getSectionAdvice = (index: number, mbtiType: string) => {
    // 根据MBTI类型和部分索引提供具体建议
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
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-lg font-medium text-gray-700">{loadingMessage}</p>
              <p className="text-sm text-gray-500">
                {quickMode ? '预计需要10-15秒' : '预计需要15-30秒'}，请稍候
              </p>
            </div>
            
            {/* 改进的进度条 */}
            <div className="w-80 max-w-full">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>进度</span>
                <span>{Math.round(loadingProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{width: `${loadingProgress}%`}}
                >
                  <div className="h-full bg-white bg-opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* 提示信息 */}
            <div className="text-center max-w-md">
              <p className="text-xs text-gray-400">
                💡 小贴士：首次生成可能需要稍长时间，后续会更快
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-4xl mx-auto border-red-200">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="text-red-600 text-lg font-medium">解读生成失败</div>
            <p className="text-gray-600">{error}</p>
            <Button 
              onClick={generateInterpretation}
              variant="outline"
              className="mt-4"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              重新生成
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (interpretation.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center">
            <p className="text-gray-600">暂无解读内容</p>
            <Button 
              onClick={generateInterpretation}
              className="mt-4"
            >
              生成解读
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
      {/* 返回选择按钮 */}
      <div className="text-center">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          重新选择MBTI类型
        </button>
      </div>

      {/* 标题区域 */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          {mbtiType} 性格类型{quickMode ? '快速' : '专业'}解读报告
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          {quickMode 
            ? '基于MBTI理论的快速性格洞察和核心建议' 
            : '基于心理学理论和专业分析，为您提供深度的性格洞察和发展建议'
          }
        </p>
        <div className="mt-4 sm:mt-6">
          <Button 
            onClick={generateInterpretation}
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm"
          >
            <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            重新生成解读
          </Button>
        </div>
      </div>

      {/* 解读内容 */}
      <div className="grid gap-6 sm:gap-8">
        {interpretation.map((content, index) => {
          const section = sectionTitles[index];
          const Icon = section?.icon || User;
          const paragraphs = formatText(content);
          
          return (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl">
                  <div className={`p-2 sm:p-3 rounded-lg bg-gray-50 ${section?.color || 'text-gray-600'}`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="font-bold text-gray-800">
                    第 {index + 1} 部分
                  </span>
                </CardTitle>
                {section && (
                  <div className="ml-12 sm:ml-16">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                      {section.title}
                    </h3>
                  </div>
                )}
              </CardHeader>
              <CardContent className="pt-0">
                <div className="ml-0 sm:ml-4 space-y-4 sm:space-y-6">
                  {paragraphs.map((paragraph, pIndex) => (
                    <div key={pIndex} className="relative">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify indent-8 sm:indent-12">
                        {paragraph}
                      </p>
                      {pIndex < paragraphs.length - 1 && (
                        <div className="mt-3 sm:mt-4 border-b border-gray-100"></div>
                      )}
                    </div>
                  ))}
                  
                  {/* 针对性的实用建议与发展策略 */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                        实用建议与发展策略
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {getSectionAdvice(index, mbtiType).map((advice, adviceIndex) => (
                        <div
                          key={adviceIndex}
                          className="flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-blue-200 transition-all duration-200 hover:shadow-md hover:from-blue-100 hover:to-purple-100"
                        >
                          <span className="mr-2 text-blue-600">•</span>
                          {advice}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 底部总结 */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none shadow-lg">
        <CardContent className="p-6 sm:p-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">专业建议总结</h3>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              以上解读基于MBTI理论框架和心理学研究，旨在帮助您更好地了解自己的性格特质和发展潜力。
              请记住，性格类型是一个参考工具，真正的成长来自于持续的自我觉察、学习和实践。
              建议您将这些洞察与实际生活相结合，制定个性化的发展计划。
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm">
                🎯 目标导向
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm">
                🌱 持续成长
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm">
                🤝 和谐关系
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm">
                💡 自我觉察
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MbtiInterpretation;