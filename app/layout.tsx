import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { COMPANY_INFO } from '@/lib/constants';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

/**
 * SEO 元数据配置
 */
export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | 专业水性化工产品贸易`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    '水性涂料',
    '水性胶黏剂',
    '水性助剂',
    '环保化工',
    '化工贸易',
    '绿源化工'
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  metadataBase: COMPANY_INFO.website ? new URL(`https://${COMPANY_INFO.website}`) : undefined,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | 专业水性化工产品贸易`,
    description: COMPANY_INFO.description,
  },
};

/**
 * 根布局组件
 * 包含全局 Header 和 Footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
