import { profilePic } from '@/data/Images'
import Image from 'next/image'

type Props = {
  selectedLanguage: string
}
const title = {
  en: "Hi, I'm Philip Akpanyi",
  pt: 'Oi, eu sou Philip Akpanyi',
}
const description = {
  en: 'A system developer with passion for creating innovative and user-friendly solutions.',
  pt: 'Um desenvolvedor de sistemas com paixão em criar soluções inovadoras e fáceis de usar.',
}

function ProfileSection({ selectedLanguage }: Props) {
  return (
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
          {title[selectedLanguage as keyof typeof title]}
        </h1>
        <p className="text-base text-justify text-muted-foreground">
          {description[selectedLanguage as keyof typeof description]}
        </p>
      </div>
    </section>
  )
}

export default ProfileSection
