import { Card, CardContent } from '@/components/ui/card'
import { HobbyList, OriginList } from '@/data/AboutPageList'
import { FaHeart } from 'react-icons/fa'

type Props = {
  selectedLanguage: string
}

function HobbySection({ selectedLanguage }: Props) {
  return (
    <Card className="col-span-12 sm:col-span-6 p-4 shadow-sm border border-border">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <FaHeart className="text-primary" />
          <h2 className="flex items-center">
            {HobbyList.label[selectedLanguage as keyof typeof OriginList.label]}
          </h2>
        </div>
        <ul className="list-disc ps-6">
          {HobbyList.hobbies.map((item, index) => (
            <li
              key={`hobby-${index}`}
              className="text-sm text-muted-foreground"
            >
              {item[selectedLanguage as keyof typeof OriginList.label]}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default HobbySection
