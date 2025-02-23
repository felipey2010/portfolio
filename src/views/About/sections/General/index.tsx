import EducationSection from './EducationSection'
import HobbySection from './HobbySection'
import OriginAndLanguageSection from './OriginAndLanguageSection'
import ProfileSection from './ProfileSection'
import Quote from './Quote'

type Props = {
  selectedLanguage: string
}

function General({ selectedLanguage = 'en' }: Props) {
  return (
    <div className="flex flex-col gap-4 mb-2">
      {/* Profile Section (Optional) */}
      <ProfileSection selectedLanguage={selectedLanguage} />

      {/* About Sections */}
      <div className="grid grid-cols-12 gap-4">
        {/* Country of Origin & Languages */}
        <OriginAndLanguageSection selectedLanguage={selectedLanguage} />
        {/* Hobby */}
        <HobbySection selectedLanguage={selectedLanguage} />
        {/* Education */}
        <EducationSection selectedLanguage={selectedLanguage} />
      </div>
      {/* Quote */}
      <Quote selectedLanguage={selectedLanguage} />
    </div>
  )
}

export default General
