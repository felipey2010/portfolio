import BlogView from '@/views/Blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read the some blog posts I find interesting on web development, programming, technology, etc.',
  keywords: 'blog, blog posts, portfolio, portfolio blog',
}

function BlogPage() {
  return <BlogView />
}

export default BlogPage
