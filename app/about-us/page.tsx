import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Target, 
  Users, 
  Lightbulb, 
  Award, 
  Brain,
  Rocket,
  Shield,
  Star,
  Mail,
  Github,
  Globe
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-1">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Heart className="h-4 w-4 mr-2" />
            关于我们
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            探索内心，成就更好的自己
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们致力于通过先进的AI技术和专业的心理学知识，为每个人提供深度的性格解读和个人成长指导，帮助您更好地了解自己，发现内在潜能。
          </p>
        </div>

        {/* 使命愿景 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="modern-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 mr-3 text-purple-600" />
                我们的使命
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                通过科学的性格分析和个性化的指导，帮助每个人更深入地了解自己的性格特质、优势和成长空间，
                从而在职业发展、人际关系和个人成长方面做出更明智的选择，实现自我价值的最大化。
              </p>
            </CardContent>
          </Card>
          
          <Card className="modern-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="h-6 w-6 mr-3 text-blue-600" />
                我们的愿景
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                成为全球领先的AI驱动性格分析平台，让每个人都能轻松获得专业、准确、个性化的性格解读服务，
                构建一个更加理解自我、包容多样性的社会，让每个人都能在适合自己的道路上发光发热。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 核心价值观 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              核心价值观
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们的价值观指导着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">科学严谨</h3>
                <p className="text-gray-600 text-sm">
                  基于心理学理论和科学研究，确保分析结果的专业性和准确性
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">用户至上</h3>
                <p className="text-gray-600 text-sm">
                  始终以用户需求为中心，提供最优质的服务体验
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">隐私保护</h3>
                <p className="text-gray-600 text-sm">
                  严格保护用户隐私，确保数据安全和信息保密
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">持续创新</h3>
                <p className="text-gray-600 text-sm">
                  不断探索新技术，优化产品功能，提升用户体验
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 技术优势 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              技术优势
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们采用最先进的技术栈，确保服务的稳定性和用户体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Brain className="h-5 w-5 mr-3 text-purple-600" />
                  AI智能分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    集成DeepSeek AI，提供深度个性化分析
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    基于大量心理学数据训练的专业模型
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    支持快速模式和深度分析两种模式
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Rocket className="h-5 w-5 mr-3 text-blue-600" />
                  现代化架构
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    基于Next.js 13 App Router构建
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    TypeScript确保代码质量和类型安全
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tailwind CSS + Shadcn UI现代设计
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="h-5 w-5 mr-3 text-green-600" />
                  安全可靠
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    HTTPS加密传输，保护数据安全
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Vercel云平台部署，全球CDN加速
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    严格的隐私保护和数据处理规范
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="h-5 w-5 mr-3 text-orange-600" />
                  用户体验
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    响应式设计，完美适配各种设备
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    直观的用户界面，操作简单便捷
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    快速加载，流畅的交互体验
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 发展历程 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              发展历程
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从想法到现实，我们的成长之路
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-12">
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-2">
                        <Badge variant="secondary" className="mr-2">2024年初</Badge>
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">项目构思</h3>
                      <p className="text-gray-600 text-sm">
                        基于对心理学和AI技术的热爱，开始构思MBTI性格解读平台的想法
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full z-10"></div>
                <div className="w-1/2 pl-8">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Rocket className="h-5 w-5 text-blue-500 mr-2" />
                        <Badge variant="secondary">2024年中</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">技术开发</h3>
                      <p className="text-gray-600 text-sm">
                        选择Next.js技术栈，集成DeepSeek AI，开始平台的核心功能开发
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-2">
                        <Badge variant="secondary" className="mr-2">2024年底</Badge>
                        <Award className="h-5 w-5 text-green-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">正式上线</h3>
                      <p className="text-gray-600 text-sm">
                        完成平台开发和测试，正式向用户提供MBTI性格解读服务
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full z-10"></div>
                <div className="w-1/2 pl-8">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Target className="h-5 w-5 text-orange-500 mr-2" />
                        <Badge variant="secondary">未来规划</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">持续优化</h3>
                      <p className="text-gray-600 text-sm">
                        不断优化AI算法，增加更多个性化功能，为用户提供更好的服务
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="mb-16">
          <Card className="modern-card bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                让我们一起探索内心世界
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                如果您有任何问题、建议或合作意向，我们很乐意与您交流
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href="mailto:smilezjjzjj@126.com">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    联系我们
                  </Button>
                </a>
                
                <a 
                  href="https://github.com/smilezjjzjj/mbti-app.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    查看源码
                  </Button>
                </a>
              </div>
              
              <div className="flex justify-center space-x-8 text-sm opacity-90">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  smilezjjzjj@126.com
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  mbti-app.online
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 致谢 */}
        <div className="text-center mb-12">
          <Card className="modern-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                特别致谢
              </h3>
              <p className="text-gray-600 leading-relaxed">
                感谢所有支持我们的用户和朋友们，感谢开源社区提供的优秀技术和工具，
                感谢心理学研究者们为MBTI理论做出的贡献。正是因为有了大家的支持，
                我们才能为用户提供专业、准确、有价值的性格解读服务。
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-600">用心服务，成就更好的自己</span>
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 