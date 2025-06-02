import Link from 'next/link';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MBTI性格解读
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              关于MBTI
            </Link>
            <a 
              href="mailto:smilezjjzjj@126.com"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              <EnvelopeClosedIcon className="h-4 w-4" />
              <span>联系我们</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}