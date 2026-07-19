import { Button } from '@/components/ui/button'
import { logistics } from '@/data/Images'
import Image from 'next/image'
import { redirect } from 'next/navigation'

type Props = {
  selectedLanguage: string
}

const AboutPageNotFoundList = {
  label: {
    en: 'Page Not Found',
    pt: 'Página Não encontrada',
  },
  title: {
    en: 'Oops...Page not found',
    pt: 'Opaa...Página não encontrada',
  },
  description: {
    en: `Our digital librarian has misplaced your requested page. \nFear not, we are on the case!`,
    pt: `Nosso bibliotecário digital perdeu a página solicitada. \nNão tema, estamos cuidando do caso!`,
  },
  button: {
    en: 'Go back home',
    pt: 'Página inicial',
  },
}

function NotFound({ selectedLanguage }: Props) {
  return (
    <main className="flex flex-1 flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {
            AboutPageNotFoundList.label[
              selectedLanguage as keyof typeof AboutPageNotFoundList.label
            ]
          }
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-border border-dashed shadow-xs">
        <div className="flex flex-col items-center gap-2 text-center">
          <Image src={logistics} alt="404" width={240} height={240} />
          <h3 className="text-2xl font-bold tracking-tight">
            {
              AboutPageNotFoundList.title[
                selectedLanguage as keyof typeof AboutPageNotFoundList.title
              ]
            }
          </h3>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            {
              AboutPageNotFoundList.description[
                selectedLanguage as keyof typeof AboutPageNotFoundList.description
              ]
            }
          </p>
          <Button className="mt-4" onClick={() => redirect('/')}>
            {
              AboutPageNotFoundList.button[
                selectedLanguage as keyof typeof AboutPageNotFoundList.button
              ]
            }
          </Button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
