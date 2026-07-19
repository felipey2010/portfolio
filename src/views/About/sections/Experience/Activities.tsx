import { Card, CardContent } from '@/components/ui/card'

type Props = {
  selectedLanguage: string
}

const ActivityList = {
  label: {
    en: 'Activities',
    pt: 'Atividades',
  },
  description: {
    en: 'My list of activities',
    pt: 'Minha lista de atividades',
  },
  activities: [
    {
      id: 1,
      name: {
        en: 'Active member of the local Roraima Full Stack Dev developer community',
        pt: 'Membro ativo da comunidade de desenvolvedores Roraima Full Stack Dev',
      },
      date: '',
    },
    {
      id: 2,
      name: {
        en: 'Participant of the AgroTech Hackathon (competitive programming event at the EXPOFERR Show)',
        pt: 'Participante do Hackathon AgroTech (evento de competição de programação na EXPOFERR Show)',
      },
      date: {
        en: '5th - 7th November, 2024',
        pt: '5 - 7 de novembro, 2024',
      },
    },
    {
      id: 3,
      name: {
        en: 'Participant programming marathon',
        pt: 'Participante do maratona de programação',
      },
      date: {
        en: 'August (2017), May (2018) & November (2024)',
        pt: 'Agosto (2017), Maio (2018) & Novembro (2024)',
      },
    },
    {
      id: 4,
      name: {
        en: 'Event organizer - Africa Day',
        pt: 'Organizador de evento - Africa Day',
      },
      date: {
        en: 'Editions 2014 - 2018',
        pt: 'Edições 2014 - 2018',
      },
    },
  ],
}

function Activities({ selectedLanguage }: Props) {
  return (
    <Card className="w-full p-4 shadow-xs border border-border">
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
