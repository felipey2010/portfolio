'use client'
import CVDownloader from '@/components/CVDownloader'
import HomeFooter from '@/components/HomeFooter'
import SEO from '@/components/SEO'
import TechStack from '@/components/TechStack'
import { Button } from '@/components/ui/button'
import { HomePageList } from '@/data/HomePageList'
import { profilePic } from '@/data/Images'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/Providers/LanguageProvider'
import Image from 'next/image'
import { RiSparkling2Fill } from 'react-icons/ri'

function HomeView() {
  const { language } = useLanguage()

  return (
    <>
      <SEO title="" description="Página inicial" />
      <div className="w-full h-full flex flex-1 flex-col items-center py-4 overflow-y-auto">
        <div className="w-full flex flex-col space-y-6 mb-14">
          {/* Image and status */}
          <div className="w-full flex flex-col items-center gap-2">
            {/* <Image
              src={profilePic}
              alt="PMA"
              width={95}
              height={95}
              className="rounded-full shadow-sm"
            /> */}
            <span className="flex items-center gap-4 border border-border bg-border py-0.5 px-2 rounded-xl">
              <span
                className={cn(
                  'w-3 h-3 rounded-full animate-pulse',
                  HomePageList.status ? 'bg-green-500' : 'bg-red-500'
                )}
              />
              <p className="text-muted-foreground text-xs font-source-code">
                {
                  HomePageList.statusText[
                    language as keyof typeof HomePageList.statusText
                  ]
                }
              </p>
            </span>
          </div>
          {/* Name presentation */}
          <div className="w-full flex flex-col items-center gap-2">
            <h3 className="text-2xl font-semibold">
              {HomePageList.prefixName}
            </h3>
            <h1 className="text-foreground text-4xl sm:text-6xl font-bold">
              {HomePageList.name}
            </h1>
          </div>
          {/* Profession */}
          <div className="w-full flex items-center justify-center">
            <span className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card-foreground/85 border-border text-input">
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
          <div className="w-full flex items-center justify-center px-16">
            <h2
              className="text-foreground whitespace-pre-wrap text-center"
              dangerouslySetInnerHTML={{
                __html:
                  HomePageList.description[
                    language as keyof typeof HomePageList.description
                  ],
              }}
            ></h2>
          </div>
          {/* Buttons */}
          <div className="w-full flex items-center justify-center gap-4">
            <Button variant="default" size="lg" borderStyle="left-rounded">
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
            />
          </div>
          <TechStack className="opacity-60" />
        </div>
        {/* Footer */}
        <HomeFooter />
      </div>
    </>
  )
}

export default HomeView
