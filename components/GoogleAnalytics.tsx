'use client';

import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    // 创建 gtag 脚本
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-WP31TWS8BG';
    document.head.appendChild(script1);

    // 创建配置脚本
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WP31TWS8BG');
    `;
    document.head.appendChild(script2);

    return () => {
      // 清理脚本
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
} 