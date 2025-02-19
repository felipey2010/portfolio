'use client'
import { useLanguage } from '@/Providers/LanguageProvider'
import './styles.css'

const loadingText = {
  en: 'LOADING',
  pt: 'CARREGANDO',
}

function Loading() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-1 w-full justify-center items-center font-source-code">
      <ul className="list-none flex items-center justify-center text-foreground">
        {loadingText[language as keyof typeof loadingText]
          .split('')
          .map((char, index) => (
            <li key={index} className="loading-li">
              {char}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Loading
