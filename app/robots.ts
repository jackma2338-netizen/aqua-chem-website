import type { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * robots.txt 动态生成
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${COMPANY_INFO.website}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
