type Props = {
  prefixName: string
  name: string
}

function NamePresentation({ prefixName, name }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-2 text-center">
      <h3 className="text-2xl font-semibold">{prefixName}</h3>
      <h1 className="text-foreground text-4xl sm:text-6xl font-bold">{name}</h1>
    </div>
  )
}

export default NamePresentation
