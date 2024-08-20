'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ThemeList } from '@/data/ThemeList'
import { useLanguage } from '@/Providers/LanguageProvider'

export function ThemeToggle() {
  const { setTheme, theme: selectedTheme } = useTheme()
  const { language } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="!rounded-full">
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">
            {ThemeList.title[language as keyof typeof ThemeList.title]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {ThemeList.theme.map((theme) => (
          <DropdownMenuCheckboxItem
            checked={theme.value === selectedTheme}
            key={theme.name.en}
            onClick={() => setTheme(theme.value)}
          >
            {theme.name[language as keyof typeof theme.name]}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
