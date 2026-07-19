import { Card, CardContent } from '@/components/ui/card'
import { FaHeart } from 'react-icons/fa'

type Props = {
  selectedLanguage: string
}

const HobbyList = {
  label: {
    en: 'Hobbies',
    pt: 'Passatempo',
  },
  hobbies: [
    {
      en: 'Listen to music',
      pt: 'Ouvir música',
    },
    {
      en: 'Swim',
      pt: 'Nadar',
    },
    {
      en: 'Watch basketball',
      pt: 'Assistir basquete',
    },
    {
      en: 'Play games',
      pt: 'Jogar jogos',
    },
    {
      en: 'Ride motorbike',
      pt: 'Andar de moto',
    },
  ],
}

function HobbySection({ selectedLanguage }: Props) {
  return (
    <Card className="col-span-12 sm:col-span-6 p-4 shadow-xs border border-border">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <FaHeart className="text-primary" />
          <h2 className="flex items-center">
            {HobbyList.label[selectedLanguage as keyof typeof HobbyList.label]}
          </h2>
        </div>
        <ul className="list-disc ps-6">
          {HobbyList.hobbies.map((item, index) => (
            <li
              key={`hobby-${index}`}
              className="text-sm text-muted-foreground"
            >
              {item[selectedLanguage as keyof typeof item]}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default HobbySection
