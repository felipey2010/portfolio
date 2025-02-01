import { WorkExperienceList } from '@/data/AboutPageList'

type Props = {
  selectedLanguage: string
}

function SectionHeader({ selectedLanguage }: Props) {
  return (
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
  )
}

export default SectionHeader
