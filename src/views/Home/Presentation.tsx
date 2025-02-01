import { HomePageList } from '@/data/HomePageList'

type Props = {
  selectedLanguage: string
  description: {
    en: JSX.Element
    pt: JSX.Element
  }
}

function Presentation({ selectedLanguage, description }: Props) {
  return (
    <div className="w-full flex items-center justify-center px-2 md:px-16">
      <h2 className="w-full sm:w-auto text-foreground text-center">
        {description[selectedLanguage as keyof typeof HomePageList.description]}
      </h2>
    </div>
  )
}

export default Presentation
