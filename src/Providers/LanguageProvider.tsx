'use client'
import {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useContext,
} from 'react'

type LanguageContextType = {
  language: string
  handleLanguageChange: (language: string) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  handleLanguageChange: (language: string) => {},
})

export default function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const localStorageLanguage = localStorage.getItem('dev-p-lang')
    if (localStorageLanguage) {
      setLanguage(localStorageLanguage)
    }
  }, [])

  const handleLanguageChange = (language: string) => {
    setLanguage(language)
    localStorage.setItem('dev-p-lang', language)
  }

  const LanguageContextValue = {
    language,
    handleLanguageChange,
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLanguageChange,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
