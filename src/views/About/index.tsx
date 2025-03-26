'use client'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { useSearchParams } from 'next/navigation'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import General from './sections/General'
import NotFound from './sections/NotFound'
import Skills from './sections/Skills'

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
