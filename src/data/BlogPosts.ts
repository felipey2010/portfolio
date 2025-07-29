export const BlogPostPageList = {
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
