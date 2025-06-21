import Link from 'next/link';
import { Heart, Mail, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-white/20 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 品牌信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MBTI性格解读
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              基于AI技术的专业MBTI性格分析平台，帮助您深入了解自己的性格特质，
              发现内在潜能，实现个人成长和职业发展。
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Heart className="h-4 w-4 text-red-500" />
              <span>用心服务，成就更好的自己</span>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  关于MBTI
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  常见问题
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.16personalities.com/ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  性格测试
                </a>
              </li>
            </ul>
          </div>
          
          {/* 法律信息 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">法律信息</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  服务条款
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:smilezjjzjj@126.com"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  联系我们
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 分割线 */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* 版权信息 */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <span className="text-sm text-gray-500">
                © 2024-2025 MBTI性格解读平台. 保留所有权利.
              </span>
            </div>
            
            {/* 联系方式 */}
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:smilezjjzjj@126.com"
                className="text-gray-500 hover:text-purple-600 transition-colors"
                title="邮箱联系"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/smilezjjzjj/mbti-app.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 transition-colors"
                title="GitHub仓库"
              >
                <Github className="h-4 w-4" />
              </a>
              <div className="text-gray-500" title="网站域名">
                <Globe className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          {/* 技术信息 */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-400">
                基于 Next.js + TypeScript + AI 技术构建 | 
                <span className="mx-1">•</span>
                部署于 Vercel 云平台 | 
                <span className="mx-1">•</span>
                AI 分析由 DeepSeek 提供支持
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}