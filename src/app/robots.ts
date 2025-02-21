import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://dev-philip.vercel.app/'

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/about',
        '/projects',
        '/blog',
        '/resources',
        '/privacy-policy',
      ],
      disallow: '/private/',
    },
    sitemap: `${baseUrl}sitemap.xml`,
  }
}
