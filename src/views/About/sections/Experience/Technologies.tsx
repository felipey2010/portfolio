import { Card, CardContent } from '@/components/ui/card'

type Props = {
  selectedLanguage: string
}

const TechnologiesList = {
  label: {
    en: 'Technologies',
    pt: 'Tecnologias',
  },
  description: {
    en: 'The list of some of the technologies I work with',
    pt: 'A lista de algumas das tecnologias com que eu trabalho',
  },
  technologies: [
    {
      name: 'Javascript ( Next JS)',
    },
    {
      name: 'Java (Spring framework)',
    },
    {
      name: 'Node JS (REST APIs)',
    },
    {
      name: 'Angular JS',
    },
    {
      name: 'Flutter',
    },
    {
      name: 'PostgreSQL',
    },
    {
      name: 'Tomcat & JBoss/Wildfly',
    },
    {
      name: 'Git',
    },
    {
      name: 'Maven',
    },
    {
      name: 'JIRA',
    },
  ],
}

function Technologies({ selectedLanguage }: Props) {
  return (
    <Card className="w-full p-4 shadow-xs border border-border">
      <CardContent className="p-0">
        <div className="flex flex-col mb-2">
          <h2 className="font-semibold">
            {
              TechnologiesList.label[
                selectedLanguage as keyof typeof TechnologiesList.label
              ]
            }
          </h2>
          <p className="text-sm text-foreground">
            {
              TechnologiesList.description[
                selectedLanguage as keyof typeof TechnologiesList.description
              ]
            }
          </p>
        </div>
        <ul className="w-full ps-6 list-disc">
          {TechnologiesList.technologies.map((item, index) => (
            <li
              key={`techs-${index}`}
              className="text-sm text-muted-foreground"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Technologies
