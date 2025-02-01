import { Card, CardContent } from '@/components/ui/card'
import { WorkExperienceList } from '@/data/AboutPageList'

type Props = {
  selectedLanguage: string
}

function AreaOfExpertise({ selectedLanguage }: Props) {
  return (
    <Card className="w-full p-4 shadow-sm border border-border">
      <CardContent className="p-0">
        <h2 className="flex items-center font-semibold">
          {
            WorkExperienceList.areaOfExpertise.label[
              selectedLanguage as keyof typeof WorkExperienceList.areaOfExpertise.label
            ]
          }
        </h2>
        <ul className="w-full ps-6 list-disc">
          {WorkExperienceList.areaOfExpertise.areas.map((item, index) => (
            <li key={`area-${index}`} className="text-sm text-muted-foreground">
              {item[selectedLanguage as keyof typeof item]}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default AreaOfExpertise
