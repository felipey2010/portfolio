'use client'
import { useSearchParams } from 'next/navigation'
import General from './pages/General'
import { useLanguage } from '@/Providers/LanguageProvider'
import NotFound from './pages/NotFound'

function AboutView() {
  const searchParam = useSearchParams()
  const tabQuery = searchParam.get('tab')
  const { language } = useLanguage()

  if (tabQuery === null || tabQuery === undefined) {
    return <General selectedLanguage={language} />
  }

  const tabPages = {
    experience: <General selectedLanguage={language} />,
  }

  return <NotFound selectedLanguage={language} />
}

export default AboutView
