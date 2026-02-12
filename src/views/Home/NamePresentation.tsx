import { LanguageType } from "@/types"

type Props = {
  prefixName: LanguageType
  name: string
  selectedLanguage: string
}

function NamePresentation({ prefixName, name, selectedLanguage }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-2 text-center">
      <h3 className="text-2xl font-semibold">{prefixName[selectedLanguage as keyof typeof prefixName]}</h3>
      <h1 className="text-foreground text-4xl sm:text-6xl font-bold">{name}</h1>
    </div>
  )
}

export default NamePresentation
