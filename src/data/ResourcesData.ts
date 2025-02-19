import { en } from '@faker-js/faker'

export const ResourcesData = {
  title: {
    en: 'Developer Resources',
    pt: 'Recursos para Desenvolvedores',
  },
  description: {
    en: 'A curated list of useful tools, guides, and references to help developers build and improve their skills.',
    pt: 'Uma lista curada de ferramentas úteis, guias e referências para ajudar os desenvolvedores a construir e melhorar suas habilidades.',
  },
  search: {
    en: 'Search resources ...',
    pt: 'Pesquisar recursos ...',
  },
  categories: [
    {
      title: {
        en: 'Developer Tools & Utilities',
        pt: 'Ferramentas e Utilitários para Desenvolvedores',
      },
      description: {
        en: 'Essential tools for improving workflow, debugging, and optimizing performance.',
        pt: 'Ferramentas essenciais para melhorar o fluxo de trabalho, depuração e otimização de desempenho.',
      },
      resources: [
        {
          name: 'DevDocs',
          url: 'https://devdocs.io/',
          description: {
            en: 'Fast and searchable API documentation.',
            pt: 'Documentação de API rápida e pesquisável.',
          },
        },
        {
          name: 'RemoveBG',
          url: 'https://www.remove.bg/',
          description: {
            en: 'AI-powered background remover for images.',
            pt: 'Removação de fundo automatizada por IA para imagens.',
          },
        },
        {
          name: 'JSON Formatter',
          url: 'https://jsonformatter.org/',
          description: {
            en: 'Format and validate JSON.',
            pt: 'Formate e valide JSON.',
          },
        },
      ],
    },
    {
      title: {
        en: 'Web Development & Frameworks',
        pt: 'Desenvolvimento Web e Frameworks',
      },
      description: {
        en: 'Guides, documentation, and resources for frontend and backend development.',
        pt: 'Guias, documentação e recursos para desenvolvimento de front-end e back-end.',
      },
      resources: [
        {
          name: 'MDN Web Docs',
          url: 'https://developer.mozilla.org/',
          description: {
            en: 'The best resource for web development.',
            pt: 'A melhor fonte de recursos para desenvolvimento web.',
          },
        },
        {
          name: 'CSS-Tricks',
          url: 'https://css-tricks.com/',
          description: {
            en: 'Tips, tricks, and tutorials on CSS.',
            pt: 'Dicas, truques e tutoriais sobre CSS.',
          },
        },
        {
          name: 'Can I Use',
          url: 'https://caniuse.com/',
          description: {
            en: 'Check browser support for web features.',
            pt: 'Verifique o suporte aos recursos web.',
          },
        },
        {
          name: 'React Docs',
          url: 'https://react.dev/',
          description: {
            en: 'Official documentation for React.js.',
            pt: 'Documentação oficial para React.js.',
          },
        },
      ],
    },
    {
      title: {
        en: 'Programming & Learning Resources',
        pt: 'Recursos de Programação e Aprendizagem',
      },
      description: {
        en: 'Books, tutorials, and free courses to enhance your programming knowledge.',
        pt: 'Livros, tutoriais e cursos gratuitos para melhorar sua compreensão de programação.',
      },
      resources: [
        {
          name: 'Eloquent JavaScript',
          url: 'https://eloquentjavascript.net/',
          description: {
            en: 'Free JavaScript book.',
            pt: 'Livro JavaScript gratuito.',
          },
        },
        {
          name: "You Don't Know JS",
          url: 'https://github.com/getify/You-Dont-Know-JS',
          description: {
            en: 'Advanced JavaScript concepts.',
            pt: 'Conceitos avançados de JavaScript.',
          },
        },
        {
          name: 'The Odin Project',
          url: 'https://www.theodinproject.com/',
          description: {
            en: 'Free full-stack web dev course.',
            pt: 'Curso gratuito de desenvolvimento full-stack web',
          },
        },
      ],
    },
    {
      title: {
        en: 'APIs & Open Source Projects',
        pt: 'APIs e Projetos Open Source',
      },
      description: {
        en: 'Useful APIs and GitHub repositories to speed up development.',
        pt: 'APIs úteis e repositórios GitHub para acelerar o desenvolvimento.',
      },
      resources: [
        {
          name: 'Public APIs',
          url: 'https://public-apis.io/',
          description: {
            en: 'A collection of free public APIs.',
            pt: 'Uma coleção de APIs públicas gratuitas.',
          },
        },
        {
          name: 'Awesome GitHub Repos',
          url: 'https://github.com/sindresorhus/awesome',
          description: {
            en: 'A curated list of useful repos.',
            pt: 'Uma lista de repositórios úteis.',
          },
        },
        {
          name: 'Unsplash API',
          url: 'https://unsplash.com/developers',
          description: {
            en: 'Free high-resolution images.',
            pt: 'Imagens de alta resolução gratuitas.',
          },
        },
      ],
    },
    {
      title: {
        en: 'Productivity & Project Management',
        pt: 'Produtividade e Gerenciamento de Projetos',
      },
      description: {
        en: 'Tools to stay organized, manage projects, and boost productivity.',
        pt: 'Ferramentas para se manter organizado, gerenciar projetos e aumentar a produtividade.',
      },
      resources: [
        {
          name: 'Notion',
          url: 'https://www.notion.so/',
          description: {
            en: 'Organize notes, tasks, and documentation.',
            pt: 'Organize notas, tarefas e documentação.',
          },
        },
        {
          name: 'Pomofocus',
          url: 'https://pomofocus.io/',
          description: {
            en: 'Pomodoro technique timer.',
            pt: 'Temporizador de técnica Pomodoro.',
          },
        },
        {
          name: 'Trello',
          url: 'https://trello.com/',
          description: {
            en: 'Visual project management tool.',
            pt: 'Ferramenta de gerenciamento de projetos visual.',
          },
        },
      ],
    },
  ],
}
