import NotFoundView from '@/views/NotFound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page 404',
  description:
    'This page is hidden in a broken link labyrinth. Good luck finding the exit!',
  keywords: '404, error, page not found, broken link, labyrinth',
}

function Custom404Page() {
  return <NotFoundView />
}

export default Custom404Page
