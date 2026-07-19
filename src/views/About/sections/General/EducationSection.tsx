import { Card, CardContent } from '@/components/ui/card'
import { IoSchoolSharp } from 'react-icons/io5'

type Props = {
  selectedLanguage: string
}
const EducationList = {
  label: {
    en: 'Education',
    pt: 'Educação',
  },
  schools: [
    {
      level: {
        en: 'Bachelor',
        pt: 'Bacharelado',
      },
      institution: {
        en: 'Federal University of Roraima - (UFRR)',
        pt: 'Universidade Federal de Roraima - (UFRR)',
      },
      status: {
        en: 'July, 2026',
        pt: 'Julho, 2026',
      },
      location: {
        en: 'Roraima - Brazil',
        pt: 'Roraima - Brasil',
      },
    },
    {
      level: {
        en: 'Senior High',
        pt: 'Ensino médio',
      },
      institution: {
        en: 'Ghana Secondary Technical School - (G.S.T.S)',
        pt: 'Ghana Secondary Technical School - (G.S.T.S)',
      },
      status: {
        en: 'Completed',
        pt: 'Completo',
      },
      date: '2008 - 2012',
      location: {
        en: 'Takoradi - Ghana',
        pt: 'Takoradi - Gana',
      },
    },
    {
      level: {
        en: 'Junior High',
        pt: 'Ensino básico',
      },
      institution: {
        en: 'Pentecost Preparatory School - (P.P.S)',
        pt: 'Pentecost Preparatory School - (P.P.S)',
      },
      status: {
        en: 'Completed',
        pt: 'Completo',
      },
      date: '2005 - 2008',
      location: {
        en: 'Takoradi - Ghana',
        pt: 'Takoradi - Gana',
      },
    },
  ],
}

function EducationSection({ selectedLanguage }: Props) {
  return (
    <Card className="col-span-12 p-4 shadow-xs border border-border">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <IoSchoolSharp className="text-primary" />
          <h2 className="flex items-center">
            {
              EducationList.label[
                selectedLanguage as keyof typeof EducationList.label
              ]
            }
          </h2>
        </div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-2 ps-6 ml-4 mt-2">
          {EducationList.schools.map((item, index) => (
            <li
              key={`institution-${index}`}
              className="text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full -left-3 ring-4 ring-white dark:ring-gray-800">
                  <span className="h-3 w-3 bg-primary/75 rounded-full"></span>
                </span>
                {item.date ? (
                  <time className="text-sm">{item.date}</time>
                ) : (
                  <p className="text-sm">
                    {item.status[selectedLanguage as keyof typeof item.status]}
                  </p>
                )}
              </div>
              <h4 className="font-semibold">
                {
                  item.institution[
                    selectedLanguage as keyof typeof item.institution
                  ]
                }
              </h4>
              <p className="text-sm">
                {item.level[selectedLanguage as keyof typeof item.level]}
              </p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

export default EducationSection
