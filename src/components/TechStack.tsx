import {
  FramerMotion,
  Java,
  Maven,
  NextJS,
  NodeJS,
  PostgreSQL,
  Springboot,
  TailwindCSS,
} from '@/lib/svg/TechLogos'
import { cn } from '@/lib/utils'
import Marquee from './Marquee'

function TechStack({ className }: { className?: string }) {
  const techStackArray = [
    NextJS,
    Java,
    NodeJS,
    Springboot,
    TailwindCSS,
    FramerMotion,
    PostgreSQL,
    Maven,
  ]
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-card">
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
