'use client'
import { BrazilFlag, USFlag } from '@/lib/svg/Flags'
import { useLanguage } from '@/Providers/LanguageProvider'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

function LanguageSelector() {
  const { language, handleLanguageChange } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {language === 'en' ? (
            <USFlag width={16} height={16} />
          ) : (
            <BrazilFlag width={16} height={16} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={language === 'en'}
          onClick={() => handleLanguageChange('en')}
        >
          English
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={language === 'pt'}
          onClick={() => handleLanguageChange('pt')}
        >
          Português
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSelector
