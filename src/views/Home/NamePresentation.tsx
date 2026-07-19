type Props = {
  selectedLanguage: string
}

const prefixName = {
  en: `<Hello World, I am />`,
  pt: `<Olá Mundo, Eu sou />`,
}
const name = 'Philip Akpanyi'

function NamePresentation({ selectedLanguage }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-2 text-center">
      <h3 className="text-2xl font-semibold">
        {prefixName[selectedLanguage as keyof typeof prefixName]}
      </h3>
      <h1 className="text-foreground text-4xl sm:text-6xl font-bold">{name}</h1>
    </div>
  )
}

export default NamePresentation
