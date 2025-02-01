import { Card, CardContent } from '@/components/ui/card'
import { ActivityList } from '@/data/ActivityList'

type Props = {
  selectedLanguage: string
}

function Activities({ selectedLanguage }: Props) {
  return (
    <Card className="w-full p-4 shadow-sm border border-border">
      <CardContent className="p-0">
        <div className="flex flex-col mb-2">
          <h2 className="font-semibold">
            {
              ActivityList.label[
                selectedLanguage as keyof typeof ActivityList.label
              ]
            }
          </h2>
          <p className="text-sm text-foreground">
            {
              ActivityList.description[
                selectedLanguage as keyof typeof ActivityList.description
              ]
            }
          </p>
        </div>
        <ul className="w-full ps-6 list-disc">
          {ActivityList.activities.map((activity) => {
            const { id, name, date } = activity

            return (
              <li key={id} className="text-sm text-muted-foreground">
                <p>{name[selectedLanguage as keyof typeof name]}</p>
                {date && (
                  <time>{date[selectedLanguage as keyof typeof date]}</time>
                )}
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Activities
