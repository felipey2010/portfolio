import { ProfileDetailsList } from '@/data/AboutPageList'

type Props = {
  selectedLanguage: string
}

function Quote({ selectedLanguage }: Props) {
  return (
    <div className="w-full text-center">
      <p className="text-sm text-muted-foreground italic">
        &quot;
        {
          ProfileDetailsList.quote[
            selectedLanguage as keyof typeof ProfileDetailsList.quote
          ]
        }
        &quot;
      </p>
      <p className="text-sm text-muted-foreground italic">
        {ProfileDetailsList.quote_by}
      </p>
    </div>
  )
}

export default Quote
