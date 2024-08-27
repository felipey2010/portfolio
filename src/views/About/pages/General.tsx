import SEO from '@/components/SEO'
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

function General({ selectedLanguage = 'en' }: Props) {
  return (
    <>
      <SEO
        title={
          GENERAL_PAGE_INFO.title[
            selectedLanguage as keyof typeof GENERAL_PAGE_INFO.title
          ]
        }
        description={
          GENERAL_PAGE_INFO.description[
            selectedLanguage as keyof typeof GENERAL_PAGE_INFO.description
          ]
        }
        keywords={
          GENERAL_PAGE_INFO.keywords[
            selectedLanguage as keyof typeof GENERAL_PAGE_INFO.keywords
          ]
        }
      />
      <div className="flex flex-col gap-4 mb-2">
        {/* Profile Section (Optional) */}
        <section className="flex flex-col md:flex-row items-center md:items-start mb-4">
          <Image
            src={profilePic}
            alt="PMA"
            width={95}
            height={95}
            className="w-24 h-24 rounded-full shadow-md mx-4"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-start gap-1">
            <h1 className="text-2xl font-semibold mb-2">
              {
                ProfileDetailsList.title[
                  selectedLanguage as keyof typeof ProfileDetailsList.title
                ]
              }
            </h1>
            <p className="text-base text-muted-foreground">
              {
                ProfileDetailsList.description[
                  selectedLanguage as keyof typeof ProfileDetailsList.description
                ]
              }
            </p>
          </div>
        </section>

        {/* About Sections */}
        <div className="grid grid-cols-12 gap-4">
          {/* Country of Origin & Languages */}
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
                      {
                        item.level[
                          selectedLanguage as keyof typeof OriginList.label
                        ]
                      }
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          {/* Hobby */}
          <Card className="col-span-12 sm:col-span-6 p-4 shadow-sm border border-border">
            <CardContent className="p-0">
              <div className="flex items-center gap-2">
                <FaHeart className="text-primary" />
                <h2 className="flex items-center">
                  {
                    HobbyList.label[
                      selectedLanguage as keyof typeof OriginList.label
                    ]
                  }
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
          {/* Education */}
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
                        <p className="text-sm">{item.date}</p>
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
                      {
                        item.level[
                          selectedLanguage as keyof typeof OriginList.label
                        ]
                      }
                    </p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
        {/* Quote */}
        <div className="w-full text-center">
          <p className="text-sm text-muted-foreground italic">
            &quot;
            {
              ProfileDetailsList.quote[
                selectedLanguage as keyof typeof ProfileDetailsList.quote
              ]
            }
            &quot;
          </p>
          <p className="text-sm text-muted-foreground italic">
            {ProfileDetailsList.quote_by}
          </p>
        </div>
      </div>
    </>
  )
}

export default General
