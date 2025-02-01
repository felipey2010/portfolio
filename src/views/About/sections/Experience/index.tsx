import SEO from '@/components/SEO'
import { EXPERIENCE_PAGE_INFO } from '@/data/AboutPageList'
import Activities from './Activities'
import AreaOfExpertise from './AreaOfExpertise'
import MyContribution from './MyContribution'
import SectionHeader from './SectionHeader'
import Technologies from './Technologies'
import WorkExperience from './WorkExperience'

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
      <div className="flex flex-col gap-4 pb-2">
        <SectionHeader selectedLanguage={selectedLanguage} />
        {/* Area of expertise */}
        <AreaOfExpertise selectedLanguage={selectedLanguage} />

        {/* Working experiences */}
        <WorkExperience selectedLanguage={selectedLanguage} />

        {/* Technologies */}
        <Technologies selectedLanguage={selectedLanguage} />

        {/* Activities */}
        <Activities selectedLanguage={selectedLanguage} />

        <MyContribution selectedLanguage={selectedLanguage} />
      </div>
    </>
  )
}

export default Experience
