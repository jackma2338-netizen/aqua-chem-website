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
    default: `${COMPANY_INFO.name} | 专业水性合成乳液供应商`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    '水性合成乳液',
    '密封胶',
    '防水涂料',
    '纸品包装胶',
    '工业漆',
    '植绒胶',
    '硬挺剂',
    '梦泽精细化工',
    '佛山化工',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  metadataBase: COMPANY_INFO.website ? new URL(`https://${COMPANY_INFO.website}`) : undefined,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | 专业水性合成乳液供应商`,
    description: COMPANY_INFO.description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} | 专业水性合成乳液供应商`,
    description: COMPANY_INFO.description,
    images: ['/images/og-image.png'],
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
        {/* JSON-LD 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY_INFO.name,
              alternateName: '梦泽精细化工',
              url: `https://${COMPANY_INFO.website}`,
              telephone: COMPANY_INFO.phone,
              email: COMPANY_INFO.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: COMPANY_INFO.address.city,
                addressRegion: COMPANY_INFO.address.province,
                postalCode: COMPANY_INFO.address.postalCode,
                addressCountry: 'CN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                telephone: COMPANY_INFO.phone,
                contactOption: 'TollFree',
                availableLanguage: ['Chinese'],
              },
              description: COMPANY_INFO.description,
              foundingDate: COMPANY_INFO.established,
            }),
          }}
        />
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
