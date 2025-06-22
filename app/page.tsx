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
    // Scroll to test section
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
              ← Back to Home
            </Button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Start Your MBTI Personality Interpretation
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
            🚀 AI-Powered Personality Analysis Platform
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Explore Your Inner World
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            AI-powered in-depth MBTI personality interpretation to help you better understand your personality traits, strengths, and development directions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={handleStartTest}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Interpretation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a 
              href="https://www.16personalities.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg rounded-xl">
                Don't know your type? Take the test
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {['Personality Analysis', 'Career Development', 'Interpersonal Relations', 'Personal Growth', 'Psychology', 'Potential Discovery'].map((tag) => (
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
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide professional, accurate, and personalized MBTI personality interpretation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Intelligence Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Based on advanced AI technology, providing deep personalized personality interpretation
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast & Convenient</h3>
                <p className="text-gray-600 text-sm">
                  Supports both quick mode and standard mode to meet different analysis depth needs
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy Protection</h3>
                <p className="text-gray-600 text-sm">
                  Strictly protect user privacy, all data is encrypted
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional & Authoritative</h3>
                <p className="text-gray-600 text-sm">
                  Based on psychological theory, providing scientifically accurate personality analysis reports
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
              How It Works?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start your personality exploration journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Type</h3>
              <p className="text-gray-600">
                Enter your MBTI personality type, or take a test first if you're unsure
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI system will deeply analyze your personality traits and potential strengths
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
              <p className="text-gray-600">
                Receive detailed personality interpretation report with career development and relationship advice
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
              In-Depth Analysis Dimensions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive interpretation of your personality traits to support personal growth and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="modern-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Career Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Suitable career directions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Work style analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Leadership ability assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Workplace development advice
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Interpersonal Relations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Communication style analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Team collaboration ability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Conflict resolution approach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Relationship building skills
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Personal Growth</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Personality strength discovery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Growth blind spot identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Potential development advice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Self-improvement pathway
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
                Ready to Explore Your True Self?
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                Start your MBTI personality interpretation journey now and discover your infinite potential
              </p>
              <Button 
                size="lg" 
                onClick={handleStartTest}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Interpretation <ArrowRight className="ml-2 h-5 w-5" />
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
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What is MBTI?</h3>
                <p className="text-gray-600">
                  MBTI (Myers-Briggs Type Indicator) is a personality classification system based on psychological theory that categorizes personalities into 16 different types, helping people better understand themselves and others.
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How do I know my MBTI type?</h3>
                <p className="text-gray-600">
                  If you don't know your MBTI type yet, you can click the "Don't know your type? Take the test" button to visit the authoritative 16personalities website for a free test.
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Are the interpretation results accurate?</h3>
                <p className="text-gray-600">
                  Our AI system is based on extensive psychological research and data training, providing professional and accurate personality interpretations. However, remember that any personality test is just one tool for understanding yourself.
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What's the difference between Quick Mode and Standard Mode?</h3>
                <p className="text-gray-600">
                  Quick Mode provides concise core interpretation, suitable for quick understanding; Standard Mode offers more detailed and in-depth analysis with more dimensions of interpretation and advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}