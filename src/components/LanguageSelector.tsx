'use client'
import { BrazilFlag, USFlag } from '@/components/svg/Flags'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { AvailableLanguages } from '@/data/LanguageList'

function LanguageSelector() {
  const { language, handleLanguageChange } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          title={
            AvailableLanguages.buttonText[
              language as keyof typeof AvailableLanguages.buttonText
            ]
          }
        >
          {language === 'en' ? (
            <USFlag width={16} height={16} />
          ) : (
            <BrazilFlag width={16} height={16} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {AvailableLanguages.languages.map((item) => (
          <DropdownMenuCheckboxItem
            checked={language === item.value}
            key={item.value}
            onClick={() => handleLanguageChange(item.value)}
          >
            {item.language[language as keyof typeof item.language]}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSelector
