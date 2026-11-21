import type { MetadataRoute } from 'next';
import { INITIAL_VENTURES } from '@/lib/holysun-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.APP_URL || 'https://holysun.com.bd').replace(/\/$/, '');
  const lastModified = new Date();

  const ventureRoutes: MetadataRoute.Sitemap = INITIAL_VENTURES.map((venture) => ({
    url: `${baseUrl}/ventures/${venture.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...ventureRoutes,
  ];
}
