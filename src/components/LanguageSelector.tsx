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

const AvailableLanguages = {
  buttonText: {
    en: 'Change language',
    pt: 'Mudar idioma',
  },
  languages: [
    {
      language: {
        en: 'English',
        pt: 'Inglês',
      },
      value: 'en',
    },
    {
      language: {
        en: 'Portuguese',
        pt: 'Português',
      },
      value: 'pt',
    },
  ],
}

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
          aria-label={
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
