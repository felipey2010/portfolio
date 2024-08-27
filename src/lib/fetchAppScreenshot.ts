import { useQuery } from '@tanstack/react-query'

export default function fetchAppScreenshot(appUrl: string) {
  return useQuery({
    queryKey: ['app-screenshot', appUrl],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SITE_SHOT_URL}/url=${appUrl}&userkey=${process.env.NEXT_PUBLIC_API_SITE_SHOT_KEY}`,
        { method: 'GET' }
      )
      const data = await response.json()
      return data.url as string
    },
    enabled: !!appUrl,
  })
}
