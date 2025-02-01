import { Button } from '@/components/ui/button'
import { LanguageType } from '@/types'
import { Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {
  language: string
  content: {
    title: LanguageType
    description: LanguageType
    buttonText: LanguageType
  }
}

function ContactCallToAction({ language, content }: Props) {
  const router = useRouter()

  const { title, description, buttonText } = content

  const handleGetInTouch = () => {
    router.push('/about?tab=contact')
  }
  return (
    <section className="w-full flex items-center justify-center py-4 min-h-[300px] bg-gray-100 dark:bg-gray-900 rounded-b-lg">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter">
            {title[language as keyof typeof title]}
          </h2>
          <p className="text-sm/relaxed">
            {description[language as keyof typeof description]}
          </p>
        </div>
        <Button size="lg" onClick={handleGetInTouch}>
          <Mail className="mr-2 h-4 w-4" />
          {buttonText[language as keyof typeof buttonText]}
        </Button>
      </div>
    </section>
  )
}

export default ContactCallToAction
