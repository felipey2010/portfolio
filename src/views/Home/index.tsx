import SEO from '@/components/SEO'
import { HomePageList } from '@/data/HomePageList'
import PageContent from './PageContent'

function HomeView() {
  return (
    <>
      <SEO
        title="Home"
        description="Página inicial"
        keywords={HomePageList.keywords}
        image="/opengraph-image.png"
      />
      <PageContent />
    </>
  )
}

export default HomeView
