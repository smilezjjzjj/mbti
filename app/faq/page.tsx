import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Target,
  Clock,
  CheckCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqCategories = [
    {
      title: "关于MBTI",
      icon: Brain,
      color: "purple",
      questions: [
        {
          question: "什么是MBTI性格类型？",
          answer: "MBTI（Myers-Briggs Type Indicator）是基于荣格心理类型理论开发的性格评估工具。它将人的性格分为16种类型，每种类型由四个维度组成：外向(E)/内向(I)、感觉(S)/直觉(N)、思考(T)/情感(F)、判断(J)/感知(P)。"
        },
        {
          question: "MBTI测试的准确性如何？",
          answer: "MBTI测试的准确性取决于多个因素，包括测试题目的质量、测试者的诚实程度和自我认知水平。虽然MBTI不是绝对科学的工具，但它能够提供有价值的自我认知参考，帮助人们更好地了解自己的行为模式和偏好。"
        },
        {
          question: "我的性格类型会改变吗？",
          answer: "根据MBTI理论，核心性格类型通常是稳定的，但随着年龄增长、生活经历和个人发展，某些行为表现可能会发生变化。此外，在不同情境下，人们可能会表现出不同的行为模式。"
        },
        {
          question: "如何知道自己的MBTI类型？",
          answer: "您可以通过专业的MBTI测试来确定自己的性格类型。我们建议使用权威的测试平台，如16personalities.com，然后使用我们的AI分析服务来获得更深入的个性化解读。"
        }
      ]
    },
    {
      title: "使用服务",
      icon: Zap,
      color: "blue",
      questions: [
        {
          question: "如何使用这个平台？",
          answer: "使用非常简单：1) 首先通过专业测试确定您的MBTI类型；2) 在我们的平台上选择您的性格类型；3) 选择快速模式或标准模式；4) 获得AI生成的个性化分析报告。整个过程只需几分钟。"
        },
        {
          question: "快速模式和标准模式有什么区别？",
          answer: "快速模式提供简洁的核心分析，适合想要快速了解基本特征的用户；标准模式提供更详细、更深入的分析，包括职业发展、人际关系、个人成长等多个维度的建议，适合想要全面了解自己的用户。"
        },
        {
          question: "分析结果有多准确？",
          answer: "我们的AI分析基于大量心理学研究数据和MBTI理论，结合先进的自然语言处理技术。虽然不能保证100%准确，但能提供高质量的个性化洞察。建议将结果作为自我认知的参考，而非绝对标准。"
        },
        {
          question: "我可以多次使用这个服务吗？",
          answer: "当然可以！您可以随时重新获取分析，特别是当您的生活状况发生变化或想要重新审视自己时。不同时期的分析结果可能会有细微差异，这也是个人成长的体现。"
        }
      ]
    },
    {
      title: "隐私安全",
      icon: Shield,
      color: "green",
      questions: [
        {
          question: "我的个人信息安全吗？",
          answer: "我们非常重视用户隐私保护。所有数据传输都使用HTTPS加密，我们不会存储您的个人敏感信息，也不会将您的数据出售给第三方。详细信息请查看我们的隐私政策。"
        },
        {
          question: "你们会保存我的分析结果吗？",
          answer: "我们不会永久保存您的详细分析结果。会话数据在浏览器关闭后自动清除，只有匿名的使用统计数据会被保留用于改进服务质量。"
        },
        {
          question: "第三方服务如何处理我的数据？",
          answer: "我们使用DeepSeek AI进行分析处理，您的性格类型数据会被发送到DeepSeek进行处理，但不包含任何个人身份信息。我们也使用Google Analytics收集匿名的网站使用数据。"
        },
        {
          question: "我可以删除我的数据吗？",
          answer: "由于我们不存储个人身份信息，大部分数据在会话结束后自动清除。如果您有特殊需求，可以通过邮件联系我们进行处理。"
        }
      ]
    },
    {
      title: "技术支持",
      icon: Target,
      color: "orange",
      questions: [
        {
          question: "网站无法正常加载怎么办？",
          answer: "请先尝试刷新页面或清除浏览器缓存。如果问题持续存在，可能是网络连接问题或服务器维护。您可以稍后再试，或通过邮件联系我们。"
        },
        {
          question: "AI分析一直显示加载中？",
          answer: "这可能是由于网络延迟或AI服务暂时繁忙。请等待几分钟后重试。如果问题持续存在，请检查网络连接或联系我们的技术支持。"
        },
        {
          question: "支持哪些浏览器？",
          answer: "我们的网站支持所有现代浏览器，包括Chrome、Firefox、Safari、Edge等。为了最佳体验，建议使用最新版本的浏览器。"
        },
        {
          question: "移动设备可以正常使用吗？",
          answer: "是的，我们的网站采用响应式设计，完全支持手机和平板电脑。您可以在任何设备上享受相同的功能和体验。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-1">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            常见问题
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            常见问题解答
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            找到您关心的问题答案，如果没有找到您需要的信息，请随时联系我们
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-12">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <category.icon className={`h-6 w-6 mr-3 text-${category.color}-600`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left hover:text-purple-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 快速提示 */}
        <Card className="modern-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
              使用提示
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">获得最佳体验的建议：</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    确保网络连接稳定
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    使用最新版本的浏览器
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    先完成专业的MBTI测试
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    诚实选择您的性格类型
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">如果遇到问题：</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    尝试刷新页面
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    清除浏览器缓存
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    检查网络连接
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    联系技术支持
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 联系支持 */}
        <Card className="modern-card bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              还有其他问题？
            </h2>
            <p className="text-lg mb-6 opacity-90">
              我们的团队随时为您提供帮助和支持
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>响应时间：1-3个工作日</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>专业技术支持团队</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="mailto:smilezjjzjj@126.com"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>发送邮件咨询</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 