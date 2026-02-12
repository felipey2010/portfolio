import {
  CSS,
  FramerMotion,
  Github,
  HTML,
  Java,
  Maven,
  NextJS,
  NodeJS,
  PostgreSQL,
  Springboot,
  TailwindCSS,
  Flutter, Angular
} from '@/components/svg/TechLogos'
import { cn } from '@/lib/utils'
import Marquee from './Marquee'

function TechStack({ className }: { className?: string }) {
  const techStackArray = [
    NextJS,
    Java,
    NodeJS,
    Springboot,
    HTML,
    CSS,
    TailwindCSS,
    FramerMotion,
    PostgreSQL,
    Maven,
    Github,
    Flutter, 
    Angular
  ]

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover>
        {techStackArray.map((Tech, index) => (
          <div
            key={'tech-' + index}
            className={cn(
              'relative h-full w-fit mx-[4rem] flex items-center justify-start',
              className
            )}
          >
            <Tech />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default TechStack
