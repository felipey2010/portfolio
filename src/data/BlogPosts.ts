export const BlogPostPageList = {
  title: {
    en: 'My Blogs',
    pt: 'Meus Blogs',
  },
  description: {
    en: 'My list of blogs posted on other platforms',
    pt: 'Minha lista de blogs postados em outras plataformas',
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
    id: 1,
    title: `[IntelliJ Fix] Fixing Spring Boot Startup Exception: InaccessibleObjectException "opens java.lang"`,
    link: 'https://dev.to/felipey2010/intellij-fix-fixing-spring-boot-startup-exception-javalangreflectinaccessibleobjectexception-47b',
    date: '2024-12-03',
    excerpt: {
      en: `If you've encountered the InaccessibleObjectException error while working on a Spring Boot project in IntelliJ, you're not alone! This issue often arises due to stricter module access restrictions in newer Java versions`,
      pt: `Se você encontrou o erro InaccessibleObjectException enquanto trabalhava em um projeto Spring Boot no IntelliJ, você não está sozinho! Esse problema geralmente surge devido a restrições de acesso de módulo mais rígidas em versões mais recentes do Java`,
    },
    coverImage: '/placeholder.svg?height=200&width=300',
  },
]
