type Props = {
  language: string
  content: {
    title: {
      en: string
      pt: string
    }
    description: {
      en: string
      pt: string
    }
  }
}

function SectionHeader({ language, content }: Props) {
  const { title, description } = content

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-2xl font-bold tracking-tighter">
        {title[language as keyof typeof title]}
      </h1>
      <p className="text-sm italic">
        {description[language as keyof typeof description]}
      </p>
    </div>
  )
}

export default SectionHeader
