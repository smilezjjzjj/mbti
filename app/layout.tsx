import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MBTI Interpretation - Explore Your Personality Type',
  description: 'AI-powered MBTI personality type interpretation tool to help you better understand yourself',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WP31TWS8BG"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WP31TWS8BG');
          `}
        </Script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen gradient-bg-soft overflow-x-hidden`}>
        <Header />
        <main className="flex-grow w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-8 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}