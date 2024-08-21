import { AreaOfExpertiseList, WorkExperienceList } from '@/data/AboutPageList'

type Props = {
  selectedLanguage: string
}

function Experience({ selectedLanguage }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Area of expertise */}
      <div className="w-full flex flex-col gap-2 bg-card p-4">
        <h2 className="flex items-center">
          {
            AreaOfExpertiseList.label[
              selectedLanguage as keyof typeof AreaOfExpertiseList.label
            ]
          }
        </h2>
        <ul className="w-full ps-6 list-disc">
          {AreaOfExpertiseList.areas.map((item, index) => (
            <li key={'area-' + index} className="text-sm text-muted-foreground">
              {item[selectedLanguage as keyof typeof item]}
            </li>
          ))}
        </ul>
      </div>

      {/* Working experiences */}
      <div className="w-full flex flex-col gap-2 bg-card p-4">
        <h2 className="flex items-center">
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
              <li key={'experience-' + index} className="flex flex-col">
                <span className="absolute h-3 w-3 bg-primary/75 rounded-full -left-2" />
                <div>
                  <h3 className="font-semibold">{posComLoc}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.period[selectedLanguage as keyof typeof item.period]}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3>
                    {
                      WorkExperienceList.responsibilitiesTitle[
                        selectedLanguage as keyof typeof WorkExperienceList.responsibilitiesTitle
                      ]
                    }
                  </h3>
                  <ul className="w-full ps-6 list-disc">{}</ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Experience
