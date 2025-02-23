import ResourcesPageView from '@/views/Resources'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'A curated list of useful tools, guides, and references to help developers build and improve their skills.',
  keywords:
    'resources, developer tools, utilities, guides, documentation, suggestions, recommendations',
}

function ResourcesPage() {
  return <ResourcesPageView />
}

export default ResourcesPage
