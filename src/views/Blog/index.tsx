'use client'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { BlogPostPageList, blogPosts } from '@/data/BlogPosts'
import Image from 'next/image'
import Link from 'next/link'

function BlogView() {
  const { language } = useLanguage()

  return (
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
        {blogPosts.map((post, index) => (
          <Card key={'blog_' + index}>
            <CardHeader>
              <Link
                href={post.link}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline text-pretty"
              >
                {post.title}
              </Link>
            </CardHeader>
            <CardContent>
              {post.date && (
                <time className="text-sm mb-2 block">{post.date}</time>
              )}
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title} width={500} height={500} priority
                  className="w-full h-auto rounded-lg mb-2"
                />
              )}
              <p className="text-sm mb-2 text-justify line-clamp-6">
                {post.excerpt[language as keyof typeof post.excerpt]}
              </p>
              <div className="mt-auto">
              <Link
                href={post.link}
                target="_blank"
                className="inline-block bg-blue-600 rounded-tr-lg rounded-tl-none rounded-bl-lg rounded-br-none text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                {
                  BlogPostPageList.readMore[
                    language as keyof typeof BlogPostPageList.readMore
                  ]
                }
              </Link>
            </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BlogView
