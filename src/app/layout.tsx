import MainLayout from '@/components/MainLayout'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import LanguageProvider from '@/Providers/LanguageProvider'
import { ThemeProvider } from '@/Providers/ThemeProvider'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://dev-philip.vercel.app'

export const metadata: Metadata = {
  title: 'Philip Akpanyi - Web Developer',
  description: `Porfolio site of Philip Akpanyi, a system developer based in Brazil.`,
  keywords: 'philip, akpanyi, portfolio, web developer, dev-philip',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/opengraph-image.png',
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
