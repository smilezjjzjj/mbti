'use client';

import Link from 'next/link';
import { EnvelopeClosedIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 flex-shrink-0">
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap"
            >
              关于MBTI
            </Link>
            <Link 
              href="/about-us" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap"
            >
              关于我们
            </Link>
            <a 
              href="mailto:smilezjjzjj@126.com"
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap"
            >
              <EnvelopeClosedIcon className="h-4 w-4 flex-shrink-0" />
              <span>联系我们</span>
            </a>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <HamburgerMenuIcon className="h-4 w-4" />
                  <span className="sr-only">打开菜单</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="w-full">
                    关于MBTI
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about-us" className="w-full">
                    关于我们
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/privacy" className="w-full">
                    隐私政策
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/terms" className="w-full">
                    服务条款
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="mailto:smilezjjzjj@126.com" className="w-full">
                    <div className="flex items-center">
                      <EnvelopeClosedIcon className="h-4 w-4 mr-2" />
                      联系我们
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}