'use client'
import { PageInConstruction } from '@/data/SystemList'
import { useLanguage } from '@/providers/LanguageProvider'
import { useRouter } from 'next/navigation'

function PageUnderConstruction() {
  const { language } = useLanguage()
  const router = useRouter()

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-text text-center">
        {
          PageInConstruction.title[
            language as keyof typeof PageInConstruction.title
          ]
        }
      </h1>
      <div className="w-full mx-auto text-center">
        <p className="text-lg mb-8 text-muted-foreground">
          {
            PageInConstruction.description[
              language as keyof typeof PageInConstruction.description
            ]
          }
        </p>
        <button
          className="min-w-[100px] bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:dark:ring-white focus:ring-black transition-colors duration-100 ease-in-out"
          onClick={() => router.back()}
        >
          {
            PageInConstruction.button[
              language as keyof typeof PageInConstruction.button
            ]
          }{' '}
        </button>
      </div>
    </div>
  )
}

export default PageUnderConstruction
