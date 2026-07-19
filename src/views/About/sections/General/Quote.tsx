const quote = {
  en: 'Excellence is to do a common thing in an uncommon way.',
  pt: 'Excelência é fazer uma coisa comum de uma maneira desconhecida.',
}
const quote_by = 'Booker T. Washington'

type Props = {
  selectedLanguage: string
}

function Quote({ selectedLanguage }: Props) {
  return (
    <div className="w-full text-center">
      <p className="text-sm text-muted-foreground italic">
        &quot;
        {quote[selectedLanguage as keyof typeof quote]}
        &quot;
      </p>
      <p className="text-sm text-muted-foreground italic">{quote_by}</p>
    </div>
  )
}

export default Quote
