import MbtiInterpretation from '@/components/MbtiInterpretation';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="modern-card max-w-4xl mx-auto p-4 sm:p-8 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            探索你的内在世界
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            基于AI的MBTI性格深度解读，帮助你更好地了解自己
          </p>
          
          {/* MBTI相关标签 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
            {['性格分析', '自我认知', '人际关系', '职业发展', '个人成长', '心理学', '性格类型', '潜能挖掘'].map((tag) => (
              <span key={tag} className="tech-tag text-xs sm:text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="glass-effect rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              🧠 <strong>MBTI性格解读工具</strong> - 基于人工智能的深度分析，帮助你更好地了解自己的性格特质和潜在优势。
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600">
              💡 想了解你的MBTI类型吗？
              <a 
                href="https://www.16personalities.com/ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline ml-1 font-medium"
              >
                点击这里进行免费测试
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* MBTI Interpretation Component */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <MbtiInterpretation />
      </div>
    </div>
  );
}