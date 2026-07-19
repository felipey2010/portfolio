'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { useRouter } from 'next/navigation'

const PageInConstruction = {
  header: {
    en: 'Blog',
    pt: 'Blog',
  },
  title: {
    en: 'Coming Soon | Page Under Construction',
    pt: 'Em Breve | Página em Construção',
  },
  description: {
    en: (
      <>
        We&apos;re working hard to build something amazing for you.
        <br />
        Check back soon to see what we&apos;ve created!
      </>
    ),
    pt: (
      <>
        Estamos trabalhando duro para construir algo incrível para você.
        <br />
        Volte em breve para ver o que criamos!
      </>
    ),
  },
  button: {
    en: 'Return',
    pt: 'Voltar',
  },
  keywords: {
    en: '404, error, page not found, broken link, labyrinth',
    pt: '404, erro, página não encontrada, link quebrado, labirinto',
  },
}

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
          className="min-w-25 bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-lg focus:outline-hidden focus:ring-2 dark:focus:ring-white focus:ring-black transition-colors duration-100 ease-in-out"
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
