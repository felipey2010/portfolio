import { cn } from '@/lib/utils'
import { LanguageType } from '@/types'

type Props = {
  selectedLanguage: string
  statusText: LanguageType
  status: boolean
}

function ImageAndStatus({ selectedLanguage, statusText, status }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="flex items-center gap-4 border border-border bg-border py-0.5 px-2 rounded-xl">
        <span
          className={cn(
            'w-3 h-3 rounded-full animate-pulse',
            status ? 'bg-green-500' : 'bg-red-500'
          )}
        />
        <p className="flex-1 text-muted-foreground text-xs font-source-code">
          {statusText[selectedLanguage as keyof typeof statusText]}
        </p>
      </div>
    </div>
  )
}

export default ImageAndStatus
