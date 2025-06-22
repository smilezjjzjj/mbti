import Link from 'next/link';
import { Heart, Mail, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-white/20 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Information */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MBTI Interpretation
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A professional AI-powered MBTI personality analysis platform that helps you deeply understand your personality traits, 
              discover your inner potential, and achieve personal growth and career development.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Serving with care, achieving a better you</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  About MBTI
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.16personalities.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Personality Test
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal Information */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:smilezjjzjj@126.com"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <span className="text-sm text-gray-500">
                © 2025 MBTI Interpretation Platform. All rights reserved.
              </span>
            </div>
            
            {/* Contact Information */}
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:smilezjjzjj@126.com"
                className="text-gray-500 hover:text-purple-600 transition-colors"
                title="Email Contact"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/smilezjjzjj/mbti-app.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 transition-colors"
                title="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </a>
              <div className="text-gray-500" title="Website Domain">
                <Globe className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          {/* Technical Information */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-400">
                Built with Next.js + TypeScript + AI Technology | 
                <span className="mx-1">•</span>
                Deployed on Vercel Platform | 
                <span className="mx-1">•</span>
                AI Analysis Powered by DeepSeek
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}