'use client'
import { FooterList } from '@/data/FooterList'
import Clock from './Clock'
import DateDisplay from './DateDisplay'
import { useLanguage } from '@/Providers/LanguageProvider'

function Footer() {
  const { language } = useLanguage()

  return (
    <div className="w-full min-h-6 bg-card flex items-center justify-center sm:justify-between gap-4 text-xs px-6">
      <div className="hidden sm:block">
        <h2 className="font-normal">
          {
            FooterList.rightReserved[
              language as keyof typeof FooterList.rightReserved
            ]
          }
        </h2>
      </div>
      <div className="hidden md:block">
        <h2 className="font-normal">
          {
            FooterList.madeWithLove[
              language as keyof typeof FooterList.madeWithLove
            ]
          }
        </h2>
      </div>
      <div className="min-w-fit flex items-center gap-4">
        <DateDisplay />
        <Clock />
      </div>
    </div>
  )
}

export default Footer
