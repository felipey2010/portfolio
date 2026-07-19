import { Card, CardContent } from '@/components/ui/card'
import { FaFlag } from 'react-icons/fa'
import { IoLanguageSharp } from 'react-icons/io5'

const OriginList = {
  label: {
    en: 'Country of Origin',
    pt: 'País de Origem',
  },
  country: {
    en: 'Ghana - West Africa',
    pt: 'Gana - África Ocidental',
  },
}

const LanguageList = {
  label: {
    en: 'Languages',
    pt: 'Línguas faladas',
  },
  languages: [
    {
      language: {
        en: 'English',
        pt: 'Inglês',
      },
      level: {
        en: 'Native',
        pt: 'Nativo',
      },
    },
    {
      language: {
        en: 'Portuguese',
        pt: 'Português',
      },
      level: {
        en: 'Fluent',
        pt: 'Fluente',
      },
    },
  ],
}

type Props = {
  selectedLanguage: string
}

function OriginAndLanguageSection({ selectedLanguage }: Props) {
  return (
    <Card className="col-span-12 sm:col-span-6 p-4 shadow-xs border border-border">
      <CardContent className="p-0 flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <FaFlag size={18} className="text-primary" />
            <h2 className="flex items-center">
              {
                OriginList.label[
                  selectedLanguage as keyof typeof OriginList.label
                ]
              }
            </h2>
          </div>
          <p className="text-sm text-muted-foreground ps-6">
            {
              OriginList.country[
                selectedLanguage as keyof typeof OriginList.country
              ]
            }
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <IoLanguageSharp size={18} className="text-primary" />
            <h2 className="flex items-center">
              {
                LanguageList.label[
                  selectedLanguage as keyof typeof LanguageList.label
                ]
              }
            </h2>
          </div>
          <ul className="list-disc ps-6">
            {LanguageList.languages.map((item, index) => (
              <li
                key={`language-${index}`}
                className="text-sm text-muted-foreground"
              >
                {item.language[selectedLanguage as keyof typeof item.language]}{' '}
                - {item.level[selectedLanguage as keyof typeof item.level]}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default OriginAndLanguageSection
