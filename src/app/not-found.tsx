'use client'
import SEO from '@/components/SEO'
import { sad } from '@/data/Images'
import { PageNotFoundList } from '@/data/SystemList'
import { useLanguage } from '@/Providers/LanguageProvider'
import Image from 'next/image'
import Link from 'next/link'

function Custom404Page() {
  const { language } = useLanguage()

  return (
    <>
      <SEO
        title={
          PageNotFoundList.header[
            language as keyof typeof PageNotFoundList.header
          ]
        }
        description={
          PageNotFoundList.description[
            language as keyof typeof PageNotFoundList.description
          ]
        }
        keywords={
          PageNotFoundList.keywords[
            language as keyof typeof PageNotFoundList.keywords
          ]
        }
      />
      <div className="w-full h-full p-4">
        <div className="w-full h-full z-10 flex flex-col items-center justify-center gap-3">
          <div className="mb-4">
            <Image
              src={sad}
              width={250}
              height={250}
              alt="erro"
              priority
              className="w-full max-w-[350px]"
            />
          </div>
          <h1 className="text-2xl text-center text-primary">
            {
              PageNotFoundList.title[
                language as keyof typeof PageNotFoundList.title
              ]
            }
          </h1>
          <h1 className="text-base text-center text-muted-foreground whitespace-pre-wrap">
            {
              PageNotFoundList.description[
                language as keyof typeof PageNotFoundList.description
              ]
            }
          </h1>
          <Link
            href="/"
            className="text-muted-foreground border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-200 ease-in-out"
          >
            {
              PageNotFoundList.button[
                language as keyof typeof PageNotFoundList.button
              ]
            }
          </Link>
        </div>
      </div>
    </>
  )
}

export default Custom404Page
