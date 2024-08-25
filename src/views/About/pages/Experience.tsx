import SEO from '@/components/SEO'
import { Card, CardContent } from '@/components/ui/card'
import {
  EXPERIENCE_PAGE_INFO,
  TechnologiesList,
  WorkExperienceList,
} from '@/data/AboutPageList'

type Props = {
  selectedLanguage: string
}

function Experience({ selectedLanguage = 'en' }: Props) {
  return (
    <>
      {' '}
      <SEO
        title={
          EXPERIENCE_PAGE_INFO.title[
            selectedLanguage as keyof typeof EXPERIENCE_PAGE_INFO.title
          ]
        }
        description={
          EXPERIENCE_PAGE_INFO.description[
            selectedLanguage as keyof typeof EXPERIENCE_PAGE_INFO.description
          ]
        }
        keywords={
          EXPERIENCE_PAGE_INFO.keywords[
            selectedLanguage as keyof typeof EXPERIENCE_PAGE_INFO.keywords
          ]
        }
      />
      <div className="flex flex-col gap-4">
        <div className="w-full flex flex-col text-center">
          <h1 className="text-2xl font-bold">
            {
              WorkExperienceList.title[
                selectedLanguage as keyof typeof WorkExperienceList.title
              ]
            }
          </h1>
          <p className="text-sm italic">
            {
              WorkExperienceList.description[
                selectedLanguage as keyof typeof WorkExperienceList.description
              ]
            }
          </p>
        </div>
        {/* Area of expertise */}
        <Card className="w-full p-4 shadow-sm border border-border">
          <CardContent className="p-0">
            <h2 className="flex items-center font-semibold">
              {
                WorkExperienceList.areaOfExpertise.label[
                  selectedLanguage as keyof typeof WorkExperienceList.areaOfExpertise.label
                ]
              }
            </h2>
            <ul className="w-full ps-6 list-disc">
              {WorkExperienceList.areaOfExpertise.areas.map((item, index) => (
                <li
                  key={`area-${index}`}
                  className="text-sm text-muted-foreground"
                >
                  {item[selectedLanguage as keyof typeof item]}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Working experiences */}
        <Card className="w-full shadow-sm border border-border p-4">
          <CardContent className="p-0">
            <h2 className="flex items-center font-semibold">
              {
                WorkExperienceList.label[
                  selectedLanguage as keyof typeof WorkExperienceList.label
                ]
              }
            </h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-2 ps-6 ml-4 mt-2">
              {WorkExperienceList.experiences.map((item, index) => {
                const posComLoc = `${item.position[selectedLanguage as keyof typeof item.position]} - ${item.company[selectedLanguage as keyof typeof item.company]} - ${item.location[selectedLanguage as keyof typeof item.location]}`

                return (
                  <li key={`experience-${index}`} className="flex flex-col">
                    <span className="absolute h-3 w-3 bg-primary/75 rounded-full -left-1.5" />
                    <div className="mb-2">
                      <h3 className="font-semibold">{posComLoc}</h3>
                      <p className="text-sm text-muted-foreground">
                        {
                          item.period[
                            selectedLanguage as keyof typeof item.period
                          ]
                        }
                      </p>
                    </div>
                    <div className="flex flex-col mb-2">
                      <h3 className="text-sm">
                        {
                          WorkExperienceList.responsibilitiesTitle[
                            selectedLanguage as keyof typeof WorkExperienceList.responsibilitiesTitle
                          ]
                        }
                      </h3>
                      <ul className="w-full ps-6 list-disc">
                        {item.responsibilities.map((responsibility, index) => (
                          <li
                            key={`${item.position.en}-responsibility-${index}`}
                            className="text-sm text-muted-foreground"
                          >
                            {
                              responsibility[
                                selectedLanguage as keyof typeof responsibility
                              ]
                            }
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col mb-2">
                      <h3 className="text-sm">
                        {
                          WorkExperienceList.experienceTitle[
                            selectedLanguage as keyof typeof WorkExperienceList.experienceTitle
                          ]
                        }
                      </h3>
                      <ul className="w-full ps-6 list-disc">
                        {item.experiences.map((experience, index) => (
                          <li
                            key={`${item.position.en}-experience-${index}`}
                            className="text-sm text-muted-foreground"
                          >
                            {
                              experience[
                                selectedLanguage as keyof typeof experience
                              ]
                            }
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              })}
            </ol>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="w-full p-4 shadow-sm border border-border">
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
      </div>
    </>
  )
}

export default Experience
