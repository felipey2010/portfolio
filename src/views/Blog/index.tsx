'use client'
import SEO from '@/components/SEO'
import { BlogPostPageList, blogPosts } from '@/data/BlogPosts'
import { useLanguage } from '@/Providers/LanguageProvider'
import Link from 'next/link'

function BlogView() {
  const { language } = useLanguage()

  return (
    <>
      <SEO
        title="Blog"
        description="Blog"
        keywords="blog, blog posts, portfolio, portfolio blog"
      />
      <div className="w-full h-full flex flex-col gap-4 px-3 bg-background-foreground scroll-smooth">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold tracking-tighter">
            {
              BlogPostPageList.title[
                language as keyof typeof BlogPostPageList.title
              ]
            }
          </h1>
          <p className="text-sm italic">
            {
              BlogPostPageList.description[
                language as keyof typeof BlogPostPageList.description
              ]
            }
          </p>
        </div>
        {/* List of blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-lg shadow-md">
              <div className="p-6">
                <h2 className="text-base font-semibold mb-2">
                  <Link
                    href={post.link}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time className="text-sm mb-2 block">{post.date}</time>
                <p className="text-sm mb-2 text-justify line-clamp-6">
                  {post.excerpt[language as keyof typeof post.excerpt]}
                </p>
                <Link
                  href={post.link}
                  target="_blank"
                  className="inline-block bg-blue-600 rounded-tr-lg rounded-tl-none rounded-bl-lg  rounded-br-none text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  {
                    BlogPostPageList.readMore[
                      language as keyof typeof BlogPostPageList.readMore
                    ]
                  }
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogView
