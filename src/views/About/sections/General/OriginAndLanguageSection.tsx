import { Card, CardContent } from '@/components/ui/card'
import { LanguageList, OriginList } from '@/data/AboutPageList'
import { FaFlag } from 'react-icons/fa'
import { IoLanguageSharp } from 'react-icons/io5'

type Props = {
  selectedLanguage: string
}

function OriginAndLanguageSection({ selectedLanguage }: Props) {
  return (
    <Card className="col-span-12 sm:col-span-6 p-4 shadow-sm border border-border">
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
                  selectedLanguage as keyof typeof OriginList.label
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
                {
                  item.language[
                    selectedLanguage as keyof typeof OriginList.label
                  ]
                }{' '}
                -{' '}
                {item.level[selectedLanguage as keyof typeof OriginList.label]}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default OriginAndLanguageSection
