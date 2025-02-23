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
  )
}

export default Experience
