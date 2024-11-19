'use client'
import CVDownloader from '@/components/CVDownloader'
import SEO from '@/components/SEO'
import TechStack from '@/components/TechStack'
import { Button } from '@/components/ui/button'
import { HomePageList } from '@/data/HomePageList'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/Providers/LanguageProvider'
import { useRouter } from 'next/navigation'
import { RiSparkling2Fill } from 'react-icons/ri'

function HomeView() {
  const { language } = useLanguage()
  const router = useRouter()

  return (
    <>
      <SEO title="Home" description="Página inicial" />
      <div className="w-full flex-col items-center py-4 space-y-6 mb-14">
        {/* Image and status */}
        <div className="w-full flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 border border-border bg-border py-0.5 px-2 rounded-xl">
            <span
              className={cn(
                'w-3 h-3 rounded-full animate-pulse',
                HomePageList.status ? 'bg-green-500' : 'bg-red-500'
              )}
            />
            <p className="flex-1 text-muted-foreground text-xs font-source-code">
              {
                HomePageList.statusText[
                  language as keyof typeof HomePageList.statusText
                ]
              }
            </p>
          </div>
        </div>
        {/* Name presentation */}
        <div className="w-full flex flex-col items-center gap-2 text-center">
          <h3 className="text-2xl font-semibold">{HomePageList.prefixName}</h3>
          <h1 className="text-foreground text-4xl sm:text-6xl font-bold">
            {HomePageList.name}
          </h1>
        </div>
        {/* Profession */}
        <div className="w-full flex items-center justify-center">
          <span className="flex flex-col sm:flex-row items-center text-center justify-center gap-4 p-4 rounded-xl bg-card-foreground/85 border-border text-input">
            <RiSparkling2Fill className="w-4 h-4 mx-2" />
            <h2 className="uppercase">
              {
                HomePageList.profession[
                  language as keyof typeof HomePageList.profession
                ]
              }
            </h2>
            <RiSparkling2Fill className="w-4 h-4 mx-2" />
          </span>
        </div>
        {/* Description */}
        <div className="w-full flex items-center justify-center px-2 md:px-16">
          <h2 className="w-full sm:w-auto text-foreground text-center">
            {
              HomePageList.description[
                language as keyof typeof HomePageList.description
              ]
            }
          </h2>
        </div>
        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            borderStyle="left-rounded"
            className="w-full sm:w-auto"
            onClick={() => router.push('/about?tab=contact')}
          >
            {
              HomePageList.button.contactMe[
                language as keyof typeof HomePageList.button.contactMe
              ]
            }
          </Button>
          <CVDownloader
            buttonText={
              HomePageList.button.downloadCV[
                language as keyof typeof HomePageList.button.downloadCV
              ]
            }
            language={language}
          />
        </div>
        <div className="md:max-w-2xl lg:max-w-4xl 2xl:max-w-5xl flex overflow-x-hidden">
          <TechStack className="opacity-60" />
        </div>
      </div>
    </>
  )
}

export default HomeView
