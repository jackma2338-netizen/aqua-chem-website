import type { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * sitemap.xml 动态生成
 * 帮助搜索引擎发现和索引所有页面
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${COMPANY_INFO.website}`;

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/products', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFreq: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
