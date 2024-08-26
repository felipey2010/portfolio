'use client'
import { useLanguage } from '@/Providers/LanguageProvider'
import { useSearchParams } from 'next/navigation'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import General from './pages/General'
import NotFound from './pages/NotFound'
import Skills from './pages/Skills'

function AboutView() {
  const searchParam = useSearchParams()
  const tabQuery = searchParam.get('tab')
  const { language } = useLanguage()

  if (tabQuery === null || tabQuery === undefined) {
    return <General selectedLanguage={language} />
  }

  const tabPages = {
    experience: <Experience selectedLanguage={language} />,
    skills: <Skills selectedLanguage={language} />,
    contact: <Contact selectedLanguage={language} />,
  }

  return (
    tabPages[tabQuery as keyof typeof tabPages] || (
      <NotFound selectedLanguage={language} />
    )
  )
}

export default AboutView
