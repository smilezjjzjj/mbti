'use client';

import { useState, useEffect } from 'react';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';

export default function NetworkStatusClient() {
  const [isOnline, setIsOnline] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // 初始化网络状态
    setIsOnline(navigator.onLine);

    // 监听网络状态变化
    const handleOnline = () => {
      setIsOnline(true);
      // 显示短暂的提示
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showMessage) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 py-2 px-4 rounded-full shadow-md transition-all duration-300 ${isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {isOnline ? (
        <>
          <CheckIcon className="h-4 w-4" />
          <span className="text-sm">网络已连接</span>
        </>
      ) : (
        <>
          <Cross2Icon className="h-4 w-4" />
          <span className="text-sm">网络已断开</span>
        </>
      )}
    </div>
  );
} 