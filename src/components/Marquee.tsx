import { cn } from '@/lib/utils'
import { Fragment, ReactNode } from 'react'

type Props = {
  children: ReactNode
  pauseOnHover?: boolean
  repeat?: number
}

function Marquee({
  children,
  pauseOnHover = false,
  repeat = 5,
  ...props
}: Props) {
  return (
    <div {...props} className="w-full flex my-2 z-10 group">
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={`marquee-${i}`}
          className={cn(
            'flex shrink-0 items-center justify-center w-max animate-marquee [--duration:30s] [--gap:12px] [gap:var(--gap)]',
            {
              'group-hover:[animation-play-state:paused]': pauseOnHover,
            }
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

export default Marquee
