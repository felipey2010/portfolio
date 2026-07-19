import { Card, CardContent } from '@/components/ui/card'

const MyContributionList = {
  label: {
    en: 'What I bring on board',
    pt: 'O que trago a bordo',
  },
  description: {
    en: 'A showcase of my skills, experience, and the value I bring to every project.',
    pt: 'Uma apresentação de minhas habilidades, experiência e o valor que trago a cada projeto.',
  },
  contributions: [
    {
      id: 1,
      name: {
        en: 'Craft innovative solutions',
        pt: 'Criar soluções inovadoras',
      },
    },
    {
      id: 2,
      name: {
        en: 'Offer English training, if necessary',
        pt: 'Oferecer treinamento em inglês, se necessário',
      },
    },
    {
      id: 3,
      name: {
        en: 'The spirit to learn, grow and collaborate',
        pt: 'O espírito de aprender, crescer e colaborar',
      },
    },
  ],
}

type Props = {
  selectedLanguage: string
}

function MyContribution({ selectedLanguage }: Props) {
  return (
    <Card className="w-full p-4 shadow-xs border border-border">
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
