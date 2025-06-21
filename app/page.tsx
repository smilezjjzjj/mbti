'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Award
} from 'lucide-react';
import MbtiForm from '@/components/MbtiForm';
import MbtiInterpretation from '@/components/MbtiInterpretation';

export default function Home() {
  const [selectedMbtiType, setSelectedMbtiType] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [quickMode, setQuickMode] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const handleMbtiSubmit = async (mbtiType: string, isQuickMode: boolean) => {
    setQuickMode(isQuickMode);
    setSelectedMbtiType(mbtiType);
    setIsLoading(false);
  };

  const handleStartTest = () => {
    setShowTest(true);
    // 滚动到测试区域
    setTimeout(() => {
      document.getElementById('test-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  if (selectedMbtiType) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden">
        <div className="mt-8 sm:mt-12 w-full">
          <MbtiInterpretation mbtiType={selectedMbtiType} quickMode={quickMode} />
        </div>
      </div>
    );
  }

  if (showTest) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden" id="test-section">
        <div className="max-w-2xl mx-auto px-1">
          <div className="text-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => setShowTest(false)}
              className="mb-4"
            >
              ← 返回首页
            </Button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              开始你的MBTI性格解读
            </h2>
          </div>
          <MbtiForm onSubmit={handleMbtiSubmit} isLoading={isLoading} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center mb-16 sm:mb-20 px-1">
        <div className="modern-card max-w-5xl mx-auto p-6 sm:p-12 mb-8">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            🚀 AI驱动的性格分析平台
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            探索你的内在世界
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            基于人工智能的MBTI性格深度解读，帮助你更好地了解自己的性格特质、优势潜能和发展方向
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={handleStartTest}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              开始免费解读 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a 
              href="https://www.16personalities.com/ch" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg rounded-xl">
                还不知道类型？先测试
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {['性格分析', '职业发展', '人际关系', '个人成长', '心理学', '潜能挖掘'].map((tag) => (
              <span key={tag} className="tech-tag text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 sm:mb-20 px-1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              为什么选择我们？
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们提供专业、准确、个性化的MBTI性格解读服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI智能分析</h3>
                <p className="text-gray-600 text-sm">
                  基于先进的人工智能技术，提供深度个性化的性格解读
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">快速便捷</h3>
                <p className="text-gray-600 text-sm">
                  支持快速模式和标准模式，满足不同深度的分析需求
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">隐私保护</h3>
                <p className="text-gray-600 text-sm">
                  严格保护用户隐私，所有数据都经过加密处理
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">专业权威</h3>
                <p className="text-gray-600 text-sm">
                  基于心理学理论，提供科学准确的性格分析报告
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16 sm:mb-20 px-1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              如何使用？
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              三个简单步骤，开启你的性格探索之旅
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">选择类型</h3>
              <p className="text-gray-600">
                输入你的MBTI性格类型，如果不确定可以先进行测试
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI分析</h3>
              <p className="text-gray-600">
                我们的AI系统会深度分析你的性格特质和潜在优势
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">获得洞察</h3>
              <p className="text-gray-600">
                获得详细的性格解读报告，包含职业发展和人际关系建议
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Dimensions Section */}
      <section className="mb-16 sm:mb-20 px-1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              深度分析维度
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              全方位解读你的性格特质，助力个人成长和发展
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="modern-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">职业发展</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    适合的职业方向
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    工作风格分析
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    领导能力评估
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    职场发展建议
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">人际关系</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    沟通风格解析
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    团队协作能力
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    冲突处理方式
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    关系建立技巧
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">个人成长</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    性格优势发掘
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    成长盲点识别
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    潜能开发建议
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    自我提升路径
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 sm:mb-20 px-1">
        <div className="max-w-4xl mx-auto">
          <Card className="modern-card bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                准备好探索真实的自己了吗？
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                立即开始你的MBTI性格解读之旅，发现内在的无限可能
              </p>
              <Button 
                size="lg" 
                onClick={handleStartTest}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                开始免费解读 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 sm:mb-20 px-1">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              常见问题
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">什么是MBTI？</h3>
                <p className="text-gray-600">
                  MBTI（Myers-Briggs Type Indicator）是一种基于心理学理论的性格分类系统，将人的性格分为16种不同类型，帮助人们更好地了解自己和他人。
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">如何知道自己的MBTI类型？</h3>
                <p className="text-gray-600">
                  如果您还不知道自己的MBTI类型，可以点击"还不知道类型？先测试"按钮，前往权威的16personalities网站进行免费测试。
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">解读结果准确吗？</h3>
                <p className="text-gray-600">
                  我们的AI系统基于大量的心理学研究和数据训练，能够提供专业、准确的性格解读。但请记住，任何性格测试都只是了解自己的工具之一。
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">快速模式和标准模式有什么区别？</h3>
                <p className="text-gray-600">
                  快速模式提供简洁的核心解读，适合快速了解；标准模式提供更详细深入的分析，包含更多维度的解读和建议。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}