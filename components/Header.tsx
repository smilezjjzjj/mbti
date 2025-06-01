import Image from 'next/image';
import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md py-4 sticky top-0 z-10 border-b border-[#D2D2D7]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-[#0071E3] to-[#40AAFF] p-2 rounded-lg">
            <Brain size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-semibold text-[#1D1D1F]">MBTI解读</h1>
        </div>
        <div className="text-sm text-[#86868B] font-medium tracking-wide">
          探索你的性格密码
        </div>
      </div>
    </header>
  );
}