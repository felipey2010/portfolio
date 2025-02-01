import { Card, CardContent } from '@/components/ui/card'
import { MyContributionList } from '@/data/MyContributionList'

type Props = {
  selectedLanguage: string
}

function MyContribution({ selectedLanguage }: Props) {
  return (
    <Card className="w-full p-4 shadow-sm border border-border">
      <CardContent className="p-0">
        <div className="flex flex-col mb-2">
          <h2 className="font-semibold">
            {
              MyContributionList.label[
                selectedLanguage as keyof typeof MyContributionList.label
              ]
            }
          </h2>
          <p className="text-sm text-foreground">
            {
              MyContributionList.description[
                selectedLanguage as keyof typeof MyContributionList.description
              ]
            }
          </p>
        </div>
        <ul className="w-full ps-6 list-disc">
          {MyContributionList.contributions.map((item, index) => (
            <li
              key={`contribution-${index}`}
              className="text-sm text-muted-foreground"
            >
              {item.name[selectedLanguage as keyof typeof item.name]}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default MyContribution
