'use client'
import { HomePageList } from '@/data/HomePageList'
import ImageAndStatus from './ImageAndStatus'
import NamePresentation from './NamePresentation'
import Interest from './Interest'
import { useLanguage } from '@/components/providers/LanguageProvider'
import Presentation from './Presentation'
import HomeCallToAction from './HomeCallToAction'
import TechStack from '@/components/TechStack'

function HomeView() {
  const { language } = useLanguage()

  return (
    <div className="w-full flex-col items-center py-4 space-y-6 mb-14">
      {/* Image and status */}
      <ImageAndStatus
        selectedLanguage={language}
        statusText={HomePageList.statusText}
        status={HomePageList.status}
      />
      {/* Name presentation */}
      <NamePresentation
        selectedLanguage={language}
        prefixName={HomePageList.prefixName}
        name={HomePageList.name}
      />
      {/* Profession */}
      <Interest
        selectedLanguage={language}
        profession={HomePageList.profession}
      />
      {/* Description */}
      <Presentation
        selectedLanguage={language}
        description={HomePageList.description}
      />
      {/* Buttons */}
      <HomeCallToAction
        selectedLanguage={language}
        buttonContent={HomePageList.button}
      />
      {/* Tech Stack */}
      <div className="md:max-w-2xl lg:max-w-4xl 2xl:max-w-5xl flex overflow-x-hidden pb-6 sm:pb-0">
        <TechStack className="opacity-60" />
      </div>
    </div>
  )
}

export default HomeView
