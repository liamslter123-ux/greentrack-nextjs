import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* ── Default: allow all bots, block internal paths ────────────────── */
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },

      /* ── Search engines ───────────────────────────────────────────────── */
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'Exabot',
          'Sogou',
        ],
        allow: '/',
      },

      /* ── AI crawlers and answer engines ───────────────────────────────── */
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Claude-Web',
          'ClaudeBot',
          'anthropic-ai',
          'CCBot',
          'PerplexityBot',
          'cohere-ai',
          'Google-Extended',
          'Gemini',
          'Applebot-Extended',
          'Amazonbot',
          'YouBot',
          'AwarioBot',
          'Diffbot',
          'Bytespider',
          'Meta-ExternalAgent',
          'Meta-ExternalFetcher',
          'iaskspider',
          'DuckAssistBot',
          'Timpibot',
          'Omgilibot',
          'KangarooBot',
        ],
        allow: '/',
      },

      /* ── Social and discovery ─────────────────────────────────────────── */
      {
        userAgent: [
          'Twitterbot',
          'LinkedInBot',
          'Pinterestbot',
          'Slackbot',
          'Discordbot',
          'WhatsApp',
          'Applebot',
          'facebot',
          'FacebookBot',
        ],
        allow: '/',
      },

      /* ── SEO tools ────────────────────────────────────────────────────── */
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'rogerbot',
          'BLEXBot',
          'DataForSeoBot',
        ],
        allow: '/',
      },

      /* ── Archive, shopping and voice assistants ───────────────────────── */
      {
        userAgent: [
          'Alexabot',
          'ia_archiver',
          'CCBot',
        ],
        allow: '/',
      },

      /* ── Block known malicious scrapers ───────────────────────────────── */
      {
        userAgent: [
          'MegaIndex',
          'PetalBot',
          'SiteAuditBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://greentrackcc.com/sitemap.xml',
  }
}
