import MainLayout from '@/components/MainLayout'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/Providers/ThemeProvider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { poppins, source_code_pro } from '@/lib/fonts'
import LanguageProvider from '@/Providers/LanguageProvider'

export const metadata: Metadata = {
  title: 'Philip Akpanyi - Web Developer',
  description: `Philip Akpanyi's portfolio site`,
  keywords: 'philip, akpanyi, portfolio, web developer',
}

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
          source_code_pro.className,
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
