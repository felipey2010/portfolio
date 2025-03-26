import MainLayout from '@/components/MainLayout'
import { Toaster } from '@/components/ui/toaster'
import { AppConfig } from '@/config'
import { cn } from '@/lib/utils'
import LanguageProvider from '@/components/providers/LanguageProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://dev-philip.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'Philip Akpanyi - Web Developer',
    template: `%s - ${AppConfig.title}`,
  },
  description: AppConfig.description,
  keywords: AppConfig.keywords,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: ['/opengraph-image.png', `${baseUrl}/assets/site.png`],
  },
}

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '400 500 700 900',
  style: 'italic normal',
})

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '400 500 700 900',
  style: 'italic normal',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(geistMono.className, geistSans.className, 'antialiased')}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <MainLayout> {children}</MainLayout>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
