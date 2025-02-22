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
  keywords: {
    en: 'resources, developer tools, utilities, guides, documentation, suggestions, recommendations',
    pt: 'recursos, ferramentas, utilitários, guias, documentação, sugestões, recomendações',
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
        {
          name: 'Undraw',
          url: 'https://undraw.co/',
          description: {
            en: 'Free illustrations for your projects.',
            pt: 'Ilustrações gratuitas para seus projetos.',
          },
        },
        {
          name: '4devs',
          url: 'https://www.4devs.com.br/',
          description: {
            en: 'Free utilities for developers.',
            pt: 'Utilitários gratuitos para desenvolvedores.',
          },
        },
      ],
    },
    {
      title: {
        en: 'System Development',
        pt: 'Desenvolvimento de Sistemas',
      },
      description: {
        en: 'Guides, documentation, and resources for frontend and backend development.',
        pt: 'Guias, documentação e recursos para desenvolvimento de front-end e back-end.',
      },
      resources: [
        {
          name: 'Dribbble',
          url: 'https://dribbble.com/',
          description: {
            en: 'Design inspiration and collaboration platform.',
            pt: 'Plataforma de inspiração e colaboração de design.',
          },
        },
        {
          name: 'Shadcn UI',
          url: 'https://ui.shadcn.com/',
          description: {
            en: 'Free and open source Tailwind CSS components.',
            pt: 'Componentes de Tailwind CSS gratuitos e de código aberto.',
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
          name: 'Envato',
          url: 'https://themeforest.net/',
          description: {
            en: 'Free and premium themes for Bootstrap.',
            pt: 'Temas gratuitos e premium para Bootstrap.',
          },
        },
        {
          name: 'Spring Initializr',
          url: 'https://start.spring.io/',
          description: {
            en: 'Quickly generate Spring Boot applications.',
            pt: 'Gere rapidamente aplicações Spring Boot.',
          },
        },
        {
          name: 'Envato',
          url: 'https://themeforest.net/',
          description: {
            en: 'Free and premium themes for Bootstrap.',
            pt: 'Temas gratuitos e premium para Bootstrap.',
          },
        },
        {
          name: 'Unlayer',
          url: 'https://unlayer.com/',
          description: {
            en: 'Email templates builder.',
            pt: 'Construtor de modelos de e-mail.',
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
          name: 'Fuun Retrospectives',
          url: 'https://www.funretrospectives.com/',
          description: {
            en: 'Retrospectives for software teams.',
            pt: 'Retrospectivas para equipes de software.',
          },
        },
        {
          name: 'Beecrowd Academics',
          url: 'https://beecrowd.com/',
          description: {
            en: 'Online platform for assessing and improving skills.',
            pt: 'Plataforma online para avaliar e melhorar habilidades.',
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
          name: 'Whimsical',
          url: 'https://whimsical.com/',
          description: {
            en: 'Collaborative envirnoment for project management.',
            pt: 'Ambiente colaborativo para gerenciamento de projetos.',
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
