import CVDownloader from '@/components/CVDownloader'
import HomeFooter from '@/components/HomeFooter'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { profilePic } from '@/data/Images'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { RiSparkling2Fill } from 'react-icons/ri'

function HomeView() {
  return (
    <>
      <SEO title="" description="Página inicial" />
      <div className="w-full h-full flex flex-1 flex-col items-center py-4 relative">
        <div className="w-full flex flex-col space-y-6 mb-14">
          {/* Image and status */}
          <div className="w-full flex flex-col items-center gap-2">
            <Image
              src={profilePic}
              alt="PMA"
              width={95}
              height={95}
              className="rounded-full shadow-sm"
            />
            <span className="flex items-center gap-4 border border-border bg-border py-0.5 px-2 rounded-xl">
              <span
                className={cn(
                  'w-3 h-3 rounded-full animate-pulse',
                  PresentationText.status ? 'bg-green-500' : 'bg-red-500'
                )}
              />
              <p className="text-muted-foreground text-xs font-source-code">
                {PresentationText.statusText}
              </p>
            </span>
          </div>
          {/* Name presentation */}
          <div className="w-full flex flex-col items-center gap-2">
            <h3 className="text-2xl font-semibold">{PresentationText.text}</h3>
            <h1 className="text-foreground text-4xl sm:text-6xl font-bold">
              {PresentationText.name}
            </h1>
          </div>
          {/* Profession */}
          <div className="w-full flex items-center justify-center">
            <span className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card-foreground/85 border-border text-input">
              <RiSparkling2Fill className="w-4 h-4 mx-2" />
              <h2 className="uppercase">{PresentationText.profession}</h2>
              <RiSparkling2Fill className="w-4 h-4 mx-2" />
            </span>
          </div>
          {/* Description */}
          <div className="w-full flex items-center justify-center px-16">
            <h2 className="text-foreground whitespace-pre-wrap text-center">
              {PresentationText.description}
            </h2>
          </div>
          {/* Buttons */}
          <div className="w-full flex items-center justify-center gap-4">
            <Button variant="default" size="lg" borderStyle="left-rounded">
              Contact me
            </Button>
            <CVDownloader />
          </div>
        </div>
        {/* Footer */}
        <HomeFooter />
      </div>
    </>
  )
}

export default HomeView

const PresentationText = {
  status: true,
  statusText: 'Available for new oportunities',
  text: `<Hello World, I am />`,
  name: 'Philip Akpanyi',
  profession: 'Enthusiastic Web Developer',
  description: `I'm dedicated to crafting innovative and user-centric digital experiences. With a keen eye for design and a strong foundation in programming, I transform ideas into engaging online solutions. \nMy goal is to create websites and applications that not only look stunning but also deliver exceptional functionality and performance. 
`,
}
