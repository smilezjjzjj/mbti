'use client';

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
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Basic Questions",
      icon: HelpCircle,
      color: "purple",
      questions: [
        {
          question: "What is MBTI personality type assessment?",
          answer: "MBTI (Myers-Briggs Type Indicator) is a personality assessment tool based on Carl Jung's psychological type theory. It categorizes people into 16 different personality types by measuring four dimensions: Extraversion/Introversion (E/I), Sensing/Intuition (S/N), Thinking/Feeling (T/F), and Judging/Perceiving (J/P). Each type has unique characteristics and behavioral patterns."
        },
        {
          question: "How accurate is the AI analysis?",
          answer: "Our AI analysis is based on advanced deep learning models trained on extensive psychological research data and MBTI theory. While we strive to provide the most accurate analysis possible, personality is complex and multifaceted. Our results should be used as a reference for self-understanding rather than absolute conclusions. We recommend combining the results with professional psychological counseling for the best outcomes."
        },
        {
          question: "What's the difference between quick mode and standard mode?",
          answer: "Quick mode provides concise personality analysis suitable for users who want fast results, typically completed within 1-2 minutes. Standard mode offers comprehensive, in-depth analysis including detailed career development suggestions, relationship guidance, and personal growth plans, usually taking 3-5 minutes. We recommend standard mode for first-time users."
        },
        {
          question: "Is my personal information secure?",
          answer: "We take user privacy very seriously. All data transmission uses HTTPS encryption, and we don't store your personal sensitive information. Analysis results are only stored locally in your browser and won't be uploaded to our servers. You can clear this data anytime, and we comply with relevant privacy protection regulations."
        }
      ]
    },
    {
      title: "Usage Guide",
      icon: Brain,
      color: "blue",
      questions: [
        {
          question: "How do I get the most accurate analysis results?",
          answer: "To get accurate results: 1) Answer questions honestly based on your true preferences rather than ideal self; 2) Choose answers that reflect your natural tendencies, not learned behaviors; 3) Take the assessment when you're in a calm, focused state; 4) Don't overthink - go with your first instinct; 5) If unsure about an answer, think about how you behave in comfortable, familiar environments."
        },
        {
          question: "Can I retake the assessment?",
          answer: "Yes, you can retake the assessment anytime. However, we recommend waiting at least a few weeks between assessments, as personality traits are relatively stable. If you get different results, consider which one feels more authentic to you, or take the assessment again after some self-reflection."
        },
        {
          question: "How should I interpret the analysis results?",
          answer: "Analysis results are tools for self-understanding, not limitations. Focus on: 1) Which descriptions resonate with you; 2) How to leverage your strengths; 3) Areas for potential growth; 4) How to improve relationships and work performance. Remember, everyone is unique, and MBTI is just one way to understand personality."
        },
        {
          question: "Can I share my results with others?",
          answer: "Of course! You can copy and share your analysis results. Many people find it helpful to discuss results with family, friends, or colleagues to gain deeper self-understanding. However, please remember that personality types are personal information - only share with people you trust."
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      color: "green",
      questions: [
        {
          question: "What data do you collect?",
          answer: "We only collect data necessary for providing analysis services, including: your answers to assessment questions, selected analysis mode (quick/standard), and basic usage statistics (like page visits). We don't collect personal identification information such as name, email, or phone number."
        },
        {
          question: "How is my data stored?",
          answer: "Your analysis results are stored locally in your browser using localStorage technology and are not uploaded to our servers. This means only you can access this data on your device. If you clear your browser data or use a different device, you'll need to retake the assessment."
        },
        {
          question: "Do you share data with third parties?",
          answer: "No, we don't share your personal data with any third parties. We may use anonymized, aggregated statistical data to improve our services, but this data cannot identify individual users. We strictly comply with privacy protection regulations and user data security standards."
        },
        {
          question: "How can I delete my data?",
          answer: "Since data is stored locally in your browser, you can delete it anytime by: 1) Clearing your browser's localStorage data; 2) Using your browser's clear browsing data function; 3) Using incognito/private browsing mode. If you need help deleting data, please contact our support team."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Target,
      color: "orange",
      questions: [
        {
          question: "What should I do if the website won't load properly?",
          answer: "Please try refreshing the page or clearing your browser cache first. If the problem persists, it might be a network connection issue or server maintenance. You can try again later or contact us via email."
        },
        {
          question: "What if AI analysis keeps showing 'loading'?",
          answer: "This might be due to network latency or temporary AI service congestion. Please wait a few minutes and try again. If the problem persists, please check your network connection or contact our technical support."
        },
        {
          question: "Which browsers are supported?",
          answer: "Our website supports all modern browsers including Chrome, Firefox, Safari, Edge, etc. For the best experience, we recommend using the latest version of your browser."
        },
        {
          question: "Does it work properly on mobile devices?",
          answer: "Yes, our website uses responsive design and fully supports phones and tablets. You can enjoy the same functionality and experience on any device."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-1 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            FAQ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our MBTI personality analysis service
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <div className={`w-8 h-8 bg-gradient-to-r ${
                    category.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    category.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    category.color === 'green' ? 'from-green-500 to-teal-500' :
                    'from-orange-500 to-red-500'
                  } rounded-lg flex items-center justify-center mr-3`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-800">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="modern-card mt-12">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Need More Help?
              </h2>
              <p className="text-gray-600">
                If you encounter any issues, try these solutions:
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">If you encounter problems:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Try refreshing the page
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Clear browser cache
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Check network connection
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contact technical support
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="modern-card bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Have Other Questions?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Our team is always ready to provide help and support
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Response time: 1-3 business days</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Professional technical support team</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="mailto:smilezjjzjj@126.com"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Send Email Inquiry</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 