export default function Footer() {
  return (
    <footer className="py-8 text-center mt-auto border-t border-[#D2D2D7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-sm text-[#86868B] mb-2 md:mb-0">
            © {new Date().getFullYear()} MBTI解读 • 探索内在的你
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#86868B]">Powered by</span>
            <span className="text-sm font-medium bg-gradient-to-r from-[#0071E3] to-[#40AAFF] text-transparent bg-clip-text">
              DeepSeek
            </span>
          </div>
        </div>
        <p className="mt-4 text-xs text-[#86868B] max-w-md mx-auto">
          MBTI解读帮助你了解自己的性格特质，探索内在潜能，改善人际关系
        </p>
      </div>
    </footer>
  );
}