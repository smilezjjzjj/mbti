import Link from 'next/link';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="w-full max-w-7xl mx-auto px-1 sm:px-4 lg:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-xl">M</span>
            </div>
            <span className="text-sm sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
              <span className="hidden sm:inline">MBTI性格解读</span>
              <span className="sm:hidden">MBTI</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-6 flex-shrink-0">
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-xs sm:text-base whitespace-nowrap"
            >
              关于MBTI
            </Link>
            <a 
              href="mailto:smilezjjzjj@126.com"
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium text-xs sm:text-base whitespace-nowrap"
            >
              <EnvelopeClosedIcon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span>联系我们</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}