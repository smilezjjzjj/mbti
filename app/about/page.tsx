import { Card } from '@/components/ui/card';
import MbtiDimensions from '@/components/MbtiDimensions';

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-12">
      <Card className="modern-card border-0 p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-center">
          关于MBTI性格类型
        </h1>
        
        <div className="space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">什么是MBTI？</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              MBTI（迈尔斯-布里格斯类型指标）是一个基于荣格类型学说的性格评估工具，由凯瑟琳·布里格斯和伊莎贝尔·迈尔斯·布里格斯共同开发。它通过四个维度来描述人的性格特征：
            </p>
          </section>

          {/* MBTI维度说明 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">MBTI的四个维度</h2>
            <MbtiDimensions />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">MBTI的应用价值</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-effect p-4 sm:p-6 rounded-xl">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">个人成长</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  了解自己的性格类型有助于认识自己的优势和潜在的发展方向，促进个人成长和自我提升。
                </p>
              </div>
              <div className="glass-effect p-4 sm:p-6 rounded-xl">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">职业发展</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  不同性格类型适合不同的工作环境和职业方向，了解自己的类型有助于职业规划和选择。
                </p>
              </div>
              <div className="glass-effect p-4 sm:p-6 rounded-xl">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">人际关系</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  理解不同性格类型的特点，有助于改善人际沟通，建立更好的人际关系。
                </p>
              </div>
              <div className="glass-effect p-4 sm:p-6 rounded-xl">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">团队协作</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  在团队中了解成员的性格类型，有助于优化团队配置，提高团队效率。
                </p>
              </div>
            </div>
          </section>

          <section className="glass-effect p-4 sm:p-6 rounded-xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">关于我们的AI解读</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              我们的MBTI性格解读工具采用先进的AI技术，结合大量心理学研究数据，为您提供个性化的深度解读。我们的目标是帮助每个人更好地认识自己，发掘潜能，实现个人成长。
            </p>
            <div className="mt-4 sm:mt-6 flex items-center justify-center">
              <a 
                href="mailto:smilezjjzjj@126.com" 
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors text-sm sm:text-base"
              >
                <span className="text-base sm:text-lg">✉️</span>
                <span>联系我们：smilezjjzjj@126.com</span>
              </a>
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
} 