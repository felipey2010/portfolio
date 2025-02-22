import Head from 'next/head'
import { AppConfig } from '@/config'

type Props = {
  title: string
  description?: string
  keywords?: string
  path?: string
  image?: string
}

export default function SEO({
  title,
  description = AppConfig.description,
  keywords = AppConfig.keywords,
  path = '',
  image,
}: Props) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://dev-philip.vercel.app'
  const fullUrl = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
  const defaultImage = `${baseUrl}/assets/site.png`
  const ogImage = image
    ? `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`
    : defaultImage

  const completeTitle = title
    ? `${title} - ${AppConfig.title}`
    : AppConfig.title

  return (
    <Head>
      <title>{completeTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={completeTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={completeTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@your_twitter_handle" />
      <link rel="icon" href="/assets/images/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="/assets/images/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/assets/images/favicon.ico" />
    </Head>
  )
}
