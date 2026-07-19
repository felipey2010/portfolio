'use client'
import CVDownloader from '@/components/CVDownloader'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

type Props = {
  selectedLanguage: string
}
const buttonContent = {
  contactMe: {
    en: 'Contact me',
    pt: 'Contate-me',
  },
  downloadCV: {
    en: 'Check CV',
    pt: 'Conferir CV',
  },
}

function HomeCallToAction({ selectedLanguage }: Props) {
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
