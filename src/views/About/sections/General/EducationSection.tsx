import { Card, CardContent } from '@/components/ui/card'
import {
  EducationList,
  GENERAL_PAGE_INFO,
  HobbyList,
  LanguageList,
  OriginList,
  ProfileDetailsList,
} from '@/data/AboutPageList'
import { profilePic } from '@/data/Images'
import Image from 'next/image'
import { FaFlag, FaHeart } from 'react-icons/fa'
import { IoLanguageSharp, IoSchoolSharp } from 'react-icons/io5'

type Props = {
  selectedLanguage: string
}

function EducationSection({ selectedLanguage }: Props) {
  return (
    <Card className="col-span-12 p-4 shadow-sm border border-border">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <IoSchoolSharp className="text-primary" />
          <h2 className="flex items-center">
            {
              EducationList.label[
                selectedLanguage as keyof typeof OriginList.label
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
                    {
                      item.status[
                        selectedLanguage as keyof typeof OriginList.label
                      ]
                    }
                  </p>
                )}
              </div>
              <h4 className="font-semibold">
                {
                  item.institution[
                    selectedLanguage as keyof typeof OriginList.label
                  ]
                }
              </h4>
              <p className="text-sm">
                {item.level[selectedLanguage as keyof typeof OriginList.label]}
              </p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

export default EducationSection
