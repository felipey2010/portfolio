import MainLayout from '@/components/MainLayout'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import LanguageProvider from '@/Providers/LanguageProvider'
import { ThemeProvider } from '@/Providers/ThemeProvider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Philip Akpanyi - Web Developer',
  description: `Philip Akpanyi's portfolio site`,
  keywords: 'philip, akpanyi, portfolio, web developer',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          poppins.className,
          // source_code_pro.className,
          'antialiased'
        )}
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
      </body>
    </html>
  )
}
