'use client'
import { useSearchParams } from 'next/navigation'
import General from './pages/General'
import { useLanguage } from '@/Providers/LanguageProvider'
import NotFound from './pages/NotFound'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

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
