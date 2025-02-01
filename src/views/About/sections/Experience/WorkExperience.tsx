import { Card, CardContent } from '@/components/ui/card'
import { WorkExperienceList } from '@/data/AboutPageList'

type Props = {
  selectedLanguage: string
}

function WorkExperience({ selectedLanguage }: Props) {
  return (
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
          {WorkExperienceList.experiences
            .slice()
            .reverse()
            .map((item, index) => {
              const {
                position,
                company,
                location,
                period,
                responsibilities,
                experiences,
              } = item
              const posComLoc = `${position[selectedLanguage as keyof typeof position]} - ${company[selectedLanguage as keyof typeof company]} - ${location[selectedLanguage as keyof typeof location]}`

              return (
                <li key={`experience-${index}`} className="flex flex-col">
                  <span className="absolute h-3 w-3 bg-primary/75 rounded-full -left-1.5" />
                  <div className="mb-2">
                    <h3 className="font-semibold">{posComLoc}</h3>
                    <time className="text-sm">
                      {period[selectedLanguage as keyof typeof period]}
                    </time>
                  </div>
                  {/* Responsabilidades */}
                  <div className="flex flex-col mb-2">
                    <h3 className="text-sm">
                      {
                        WorkExperienceList.responsibilitiesTitle[
                          selectedLanguage as keyof typeof WorkExperienceList.responsibilitiesTitle
                        ]
                      }
                    </h3>
                    <ul className="w-full ps-6 list-disc">
                      {responsibilities.map((responsibility, index) => (
                        <li
                          key={`${position.en}-responsibility-${index}`}
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
                  {/* Experiência adquirida */}
                  <div className="flex flex-col mb-2">
                    <h3 className="text-sm">
                      {
                        WorkExperienceList.experienceTitle[
                          selectedLanguage as keyof typeof WorkExperienceList.experienceTitle
                        ]
                      }
                    </h3>
                    <ul className="w-full ps-6 list-disc">
                      {experiences.map((experience, index) => (
                        <li
                          key={`${position.en}-experience-${index}`}
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
  )
}

export default WorkExperience
