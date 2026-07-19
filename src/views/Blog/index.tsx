'use client'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const BlogPostPageList = {
  title: {
    en: 'My Blogs',
    pt: 'Meus Blogs',
  },
  description: {
    en: 'List of blogs I posted or find worth reading',
    pt: 'Lista de blogs que eu postei ou encontrei interessantes',
  },
  keywords: {
    en: 'blog, blog posts, portfolio, portfolio blog',
    pt: 'blog, blog posts, portfolio, portfolio blog',
  },
  readMore: {
    en: 'Read More',
    pt: 'Leia Mais',
  },
}

export const blogPosts = [
  {
    title: `[IntelliJ Fix] Fixing Spring Boot Startup Exception: Inaccessible Object Exception "opens java.lang"`,
    link: 'https://dev.to/felipey2010/intellij-fix-fixing-spring-boot-startup-exception-javalangreflectinaccessibleobjectexception-47b',
    date: '2024-12-03',
    excerpt: {
      en: `If you've encountered the InaccessibleObjectException error while working on a Spring Boot project in IntelliJ, you're not alone! This issue often arises due to stricter module access restrictions in newer Java versions`,
      pt: `Se você encontrou o erro InaccessibleObjectException enquanto trabalhava em um projeto Spring Boot no IntelliJ, você não está sozinho! Esse problema geralmente surge devido a restrições de acesso de módulo mais rígidas em versões mais recentes do Java`,
    },
  },
  {
    title: '58 rules for beautiful UI design',
    link: 'https://uxdesign.cc/58-rules-for-stunning-and-effective-user-interface-design-ea4b93f931f6',
    excerpt: {
      en: 'Simple rules to make your UI designs beautiful and effective',
      pt: 'Regras simples para tornar seus designs de UI bonitos e eficazes',
    },
    image:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*lIH2LFsMp0wrdhptP22ghw.jpeg',
  },
]

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
                  alt={post.title}
                  width={500}
                  height={500}
                  priority
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
