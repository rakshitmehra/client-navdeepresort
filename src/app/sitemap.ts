import type { MetadataRoute } from 'next';

const BASE_URL = 'https://navdeepresort.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/packages', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/pool', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/restaurant', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/bar', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
