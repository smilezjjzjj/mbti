import { Card, CardContent } from '@/components/ui/card';
import MbtiDimensions from '@/components/MbtiDimensions';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="modern-card w-full max-w-4xl">
        <CardContent className="p-6 sm:p-8 lg:p-12">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="text-4xl sm:text-6xl lg:text-7xl">🧠</div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About MBTI
              </h1>
            </div>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                <strong>MBTI (Myers-Briggs Type Indicator)</strong> is a personality assessment tool based on Carl Jung's psychological type theory. It helps people understand their personality preferences and behavioral patterns.
              </p>
              
              <p>
                MBTI categorizes personality into <strong>16 different types</strong> through four dimensions:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6 text-xs sm:text-sm">
                <div className="glass-effect p-3 sm:p-4 rounded-lg">
                  <strong>E (Extraversion) vs I (Introversion)</strong><br/>
                  Energy source and focus direction
                </div>
                <div className="glass-effect p-3 sm:p-4 rounded-lg">
                  <strong>S (Sensing) vs N (Intuition)</strong><br/>
                  Information processing method
                </div>
                <div className="glass-effect p-3 sm:p-4 rounded-lg">
                  <strong>T (Thinking) vs F (Feeling)</strong><br/>
                  Decision-making basis
                </div>
                <div className="glass-effect p-3 sm:p-4 rounded-lg">
                  <strong>J (Judging) vs P (Perceiving)</strong><br/>
                  Lifestyle preference
                </div>
              </div>
            </div>

            <section className="glass-effect p-4 sm:p-6 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">About Our AI Analysis</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our MBTI personality interpretation tool uses advanced AI technology combined with extensive psychological research data to provide personalized in-depth analysis. Our goal is to help everyone better understand themselves, discover their potential, and achieve personal growth.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center justify-center">
                <a 
                  href="mailto:smilezjjzjj@126.com" 
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors text-sm sm:text-base"
                >
                  <span className="text-base sm:text-lg">✉️</span>
                  <span>Contact us: smilezjjzjj@126.com</span>
                </a>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 