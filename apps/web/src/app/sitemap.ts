import { MetadataRoute } from 'next';
import { venturesData } from '@/lib/data/ventures';

const BASE_URL = 'https://pis-labs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date('2026-04-11'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-04-11'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic research/case study pages from ventures data
  const researchPages: MetadataRoute.Sitemap = venturesData.map((venture) => ({
    url: `${BASE_URL}/research/${venture.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...researchPages];
}
