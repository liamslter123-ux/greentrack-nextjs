import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dist/'],
      },
      /* Explicitly welcome AI crawlers and discovery bots */
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'Google-Extended',
          'PerplexityBot',
          'Applebot',
          'LinkedInBot',
          'Twitterbot',
          'AhrefsBot',
          'SemrushBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://greentrackcc.com/sitemap.xml',
  }
}
