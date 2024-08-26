import { sad } from '@/data/Images'
import Image from 'next/image'
import Link from 'next/link'

const TITLE = 'Oops! Algo deu errado...'
const DESCRIPTION = `Essa página está escondida em um labirinto de links quebrados. \nBoa sorte encontrando a saída!`
const BUTTON_TEXT = 'Página inicial'

function Custom404Page() {
  return (
    <div className="w-full h-full p-4">
      <div className="w-full h-full z-10 flex flex-col items-center justify-center gap-3">
        <div className="mb-4">
          <Image
            src={sad}
            width={250}
            height={250}
            alt="erro"
            className="w-full max-w-[350px]"
          />
        </div>
        <h1 className="text-2xl text-center text-primary">{TITLE}</h1>
        <h1 className="text-base text-center text-muted-foreground whitespace-pre-wrap">
          {DESCRIPTION}
        </h1>
        <Link
          href="/"
          className="text-muted-foreground border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-200 ease-in-out"
        >
          {BUTTON_TEXT}
        </Link>
      </div>
    </div>
  )
}

export default Custom404Page
