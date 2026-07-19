'use client'
import { useLanguage } from '@/components/providers/LanguageProvider'
import TechStack from '@/components/TechStack'
import HomeCallToAction from './HomeCallToAction'
import ImageAndStatus from './ImageAndStatus'
import Interest from './Interest'
import NamePresentation from './NamePresentation'
import Presentation from './Presentation'

function HomeView() {
  const { language } = useLanguage()

  return (
    <div className="w-full flex-col items-center py-4 space-y-6 mb-14">
      {/* Image and status */}
      <ImageAndStatus selectedLanguage={language} />
      {/* Name presentation */}
      <NamePresentation selectedLanguage={language} />
      {/* Profession */}
      <Interest selectedLanguage={language} />
      {/* Description */}
      <Presentation selectedLanguage={language} />
      {/* Buttons */}
      <HomeCallToAction selectedLanguage={language} />
      {/* Tech Stack */}
      <div className="md:max-w-2xl lg:max-w-4xl 2xl:max-w-5xl flex overflow-x-hidden pb-6 sm:pb-0">
        <TechStack className="opacity-60" />
      </div>
    </div>
  )
}

export default HomeView
