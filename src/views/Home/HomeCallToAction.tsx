'use client'
import CVDownloader from '@/components/CVDownloader'
import { Button } from '@/components/ui/button'
import { LanguageType } from '@/types'
import { useRouter } from 'next/navigation'

type Props = {
  selectedLanguage: string
  buttonContent: {
    contactMe: LanguageType
    downloadCV: LanguageType
  }
}

function HomeCallToAction({ selectedLanguage, buttonContent }: Props) {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        variant="default"
        size="lg"
        borderStyle="left-rounded"
        className="w-full sm:w-auto"
        onClick={() => router.push('/about?tab=contact')}
      >
        {
          buttonContent.contactMe[
            selectedLanguage as keyof typeof buttonContent.contactMe
          ]
        }
      </Button>
      <CVDownloader
        buttonText={
          buttonContent.downloadCV[
            selectedLanguage as keyof typeof buttonContent.downloadCV
          ]
        }
        language={selectedLanguage}
      />
    </div>
  )
}

export default HomeCallToAction
