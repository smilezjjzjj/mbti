export default function Footer() {
  return (
    <footer className="glass-effect border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-gray-600 text-sm">
              © 2025 MBTI性格解读. 探索你的内在世界
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500 whitespace-nowrap">
            MBTI性格解读工具 - 基于人工智能的深度分析，帮助你更好地了解自己的性格特质和潜在优势。
          </p>
        </div>
      </div>
    </footer>
  );
}