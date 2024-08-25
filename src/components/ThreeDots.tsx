import { cn } from '@/lib/utils'

function ThreeDots() {
  const colors = ['bg-red-500', 'bg-yellow-500', 'bg-green-500']

  return (
    <div className="hidden sm:flex items-center justify-center gap-2">
      {colors.map((color, i) => (
        <span key={i} className={cn('w-3 h-3 rounded-full', color)}></span>
      ))}
    </div>
  )
}

export default ThreeDots
