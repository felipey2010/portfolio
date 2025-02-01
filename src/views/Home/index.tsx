'use client'
import SEO from '@/components/SEO'
import TechStack from '@/components/TechStack'
import { HomePageList } from '@/data/HomePageList'
import { useLanguage } from '@/Providers/LanguageProvider'
import HomeCallToAction from './HomeCallToAction'
import ImageAndStatus from './ImageAndStatus'
import Interest from './Interest'
import Presentation from './Presentation'
import NamePresentation from './NamePresentation'

function HomeView() {
  const { language } = useLanguage()

  return (
    <>
      <SEO title="Home" description="Página inicial" />
      <div className="w-full flex-col items-center py-4 space-y-6 mb-14">
        {/* Image and status */}
        <ImageAndStatus
          selectedLanguage={language}
          statusText={HomePageList.statusText}
          status={HomePageList.status}
        />
        {/* Name presentation */}
        <NamePresentation
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
    </>
  )
}

export default HomeView
