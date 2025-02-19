import { LanguageType } from '@/types'
import { RiSparkling2Fill } from 'react-icons/ri'

type Props = {
  selectedLanguage: string
  profession: LanguageType
}

function Interest({ selectedLanguage, profession }: Props) {
  return (
    <div className="w-full flex items-center justify-center">
      <span className="flex flex-col sm:flex-row items-center text-center justify-center gap-4 p-4 rounded-xl bg-card-foreground/85 border-border text-input">
        <RiSparkling2Fill className="w-4 h-4 mx-2" />
        <h2 className="uppercase">
          {profession[selectedLanguage as keyof typeof profession]}
        </h2>
        <RiSparkling2Fill className="w-4 h-4 mx-2" />
      </span>
    </div>
  )
}

export default Interest
