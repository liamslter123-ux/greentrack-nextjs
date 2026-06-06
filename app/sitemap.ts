import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://greentrackcc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/coaching`,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mentoring`,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
