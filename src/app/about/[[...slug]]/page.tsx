import AboutView from '@/views/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Get to know more about my background, including education, languages spoken, country of origin, and hobbies.',
  keywords: 'profile, background, education, languages, hobbies, country',
}

function AbooutPage() {
  return <AboutView />
}

export default AbooutPage
