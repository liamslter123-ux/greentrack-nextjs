import type { MetadataRoute } from 'next'
import { insights } from '@/lib/insights'
import { BASE_URL } from '@/lib/site'

export const dynamic = 'force-static'

/* Bump this when a core page's content meaningfully changes */
const SITE_UPDATED = new Date('2026-10-20')

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/coaching', priority: 0.9 },
    { path: '/mentoring', priority: 0.9 },
    { path: '/what-to-expect', priority: 0.8 },
    { path: '/mentoring/doug-nevill', priority: 0.7 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/testimonials', priority: 0.7 },
    { path: '/resources', priority: 0.7 },
    { path: '/insights', priority: 0.7 },
  ]

  return [
    ...pages.map(({ path, priority }) => ({
      url: path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`,
      lastModified: SITE_UPDATED,
      priority,
    })),
    ...insights.map((i) => ({
      url: `${BASE_URL}/insights/${i.slug}`,
      lastModified: new Date(i.updated),
      priority: 0.7,
    })),
  ]
}
