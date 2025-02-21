import { AboutSidebarList } from '@/data/AboutPageList'
import type { MetadataRoute } from 'next'

const getActiveTabs = () => {
  return AboutSidebarList.map((item) => ({
    link: item.activeTab ? `?tab=${item.activeTab}` : '',
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://dev-philip.vercel.app'

  const aboutPage = getActiveTabs().map((item) => {
    return {
      url: `${baseUrl}/about${item.link}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...aboutPage,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
  ]
}
