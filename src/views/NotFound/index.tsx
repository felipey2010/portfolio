'use client'
import { sad } from '@/data/Images'
import { useLanguage } from '@/components/providers/LanguageProvider'
import Image from 'next/image'
import Link from 'next/link'

const PageNotFoundList = {
  header: {
    en: 'Page 404',
    pt: 'Página 404',
  },
  title: {
    en: 'Oops! Something went wrong...',
    pt: 'Oops! Algo deu errado...',
  },
  description: {
    en: `This page is hidden in a broken link labyrinth. \nGood luck finding the exit!`,
    pt: `Essa página está escondida em um labirinto de links quebrados. \nBoa sorte encontrando a saída!`,
  },
  button: {
    en: 'Go to home',
    pt: 'Pagina inicial',
  },
  keywords: {
    en: '404, error, page not found, broken link, labyrinth',
    pt: '404, erro, página não encontrada, link quebrado, labirinto',
  },
}

function NotFoundView() {
  const { language } = useLanguage()

  return (
    <div className="w-full h-full p-4">
      <div className="w-full h-full z-10 flex flex-col items-center justify-center gap-3">
        <div className="mb-4">
          <Image
            src={sad}
            width={250}
            height={250}
            alt="erro"
            priority
            className="w-full max-w-87.5"
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
          className="text-muted-foreground border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:ring-4 focus:outline-hidden focus:ring-purple-600 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-200 ease-in-out"
        >
          {
            PageNotFoundList.button[
              language as keyof typeof PageNotFoundList.button
            ]
          }
        </Link>
      </div>
    </div>
  )
}

export default NotFoundView
