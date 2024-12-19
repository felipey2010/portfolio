export const ProjectPageList = {
  title: {
    en: 'My Projects',
    pt: 'Meus Projetos',
  },
  description: {
    en: 'Explore a collection of my latest web development projects. Each one represents a unique challenge and showcases different skills and technologies.',
    pt: 'Explore uma coleção de meus projetos web mais recentes. Cada um representa um desafio único e mostra diferentes habilidades e tecnologias.',
  },
  keywords: {
    en: 'projects, web development, portfolio, projects page, my projects, my web development projects, web development projects, portfolio projects',
    pt: 'projetos, desenvolvimento web, portfólio, página de projetos, meus projetos, meus projetos web, desenvolvimento web, projetos de portfólio',
  },
  callToAction: {
    title: {
      en: "Let's Work Together",
      pt: 'Vamos Trabalhar Juntos',
    },
    description: {
      en: "Have a project in mind? I'm always open to new opportunities and collaborations.",
      pt: 'Tem um projeto em mente? Estou sempre aberto a novas oportunidades e colaborações.',
    },
    buttonText: {
      en: 'Get in Touch',
      pt: 'Entre em Contato',
    },
  },
  projectLabel: {
    en: 'Projects Explorer',
    pt: 'Explorador de Projetos',
  },
}

export const ProjectsList = [
  {
    id: 'p1',
    name: {
      en: 'Professional',
      pt: 'Profissional',
    },
    description: {
      en: 'Projects developed for clients or employers.',
      pt: 'Projetos desenvolvidos para clientes ou empregadores.',
    },
    children: [
      {
        id: 'p1.1',
        name: {
          en: 'School games system',
          pt: 'Sistema de jogos escolares',
        },
        description: {
          en: 'A school games system developed for the Education and Sports Secretariat of Roraima. The system allows the management of competitions from the creation to the registration of athletes. In addition, the system allows the management of users, generation of reports and communication between the schools.',
          pt: 'Um sistema de gerenciamento de jogos escolares desenvolvido para a Secretaria de Educação e Desportos de Roraima. O sistema permite o gerenciamento das competições desde a criação até a inscrição dos atletas. Além disso, o sistema permite o gerenciamento de usuários, geração de relatórios e comunicação com entre as escolas.',
        },
        image: '/assets/jogos_escolares.png',
        tags: [
          'spring-boot',
          'java',
          'postgresql',
          'spring-security',
          'jasper report',
        ],
        demoLink: 'https://sistemas.rr.gov.br/jogosescolares/',
        githubLink: '#',
      },
      {
        id: 'p1.2',
        name: {
          en: 'My portfolio',
          pt: 'Meu portfólio',
        },
        description: {
          en: 'A simple portfolio website built with Next.js, Tailwind CSS and shadcn UI components.',
          pt: 'Um website de portfólio simples construído com Next.js, Tailwind CSS e componentes de UI do shadcn.',
        },
        image: '/assets/portfolio.png',
        tags: ['Next JS', 'Tailwind CSS', 'shadcn UI'],
        demoLink: 'https://dev-philip.vercel.app/',
        githubLink: 'https://github.com/felipey2010/portfolio',
      },
    ],
  },
  {
    id: 'p2',
    name: {
      en: 'Personal',
      pt: 'Pessoal',
    },
    description: {
      en: 'Projects developed for personal use.',
      pt: 'Projetos desenvolvidos para uso pessoal.',
    },
    children: [
      {
        id: 'p2.1',
        name: {
          en: 'Educative Game',
          pt: 'Jogo Educativo',
        },
        description: {
          en: 'A mathematics game app intended to help enhance mathematical skills.',
          pt: 'Um jogo de matemática destinado a ajudar a melhorar as habilidades matemáticas.',
        },
        image: '/assets/jogo_educativo.png',
        tags: ['React JS', 'CSS', 'Axios'],
        demoLink: 'https://jogo-educativo.vercel.app/',
        githubLink: 'https://github.com/felipey2010/jogo-educativo',
      },
      {
        id: 'p2.2',
        name: {
          en: 'Google clone',
          pt: 'Clone do Google',
        },
        description: {
          en: 'A project created to learn React JS and styling with CSS.',
          pt: 'Um projeto criado para aprender React JS e estilização com CSS.',
        },
        image: '/assets/google_clone.png',
        tags: ['React JS', 'CSS', 'Axios'],
        demoLink: 'https://g-cloned-app.vercel.app/',
        githubLink: 'https://github.com/felipey2010/google-clone',
      },
      {
        id: 'p2.3',
        name: {
          en: 'Random Quotes App',
          pt: 'Aplicação de Quotes Aleatórias',
        },
        description: {
          en: 'A web app that displays random quotes.',
          pt: 'Uma aplicação web que exibe citações aleatórias.',
        },
        image: '/assets/random_quotes.png',
        tags: ['React JS', 'canvas', 'Axios', 'Local Storage'],
        demoLink: 'https://random-quote-web-app.vercel.app/',
        githubLink: 'https://github.com/felipey2010/random_quote_web_app',
      },
      {
        id: 'p2.4',
        name: {
          en: 'Contact List App',
          pt: 'Lista de Contatos',
        },
        description: {
          en: 'A React JS project created to learn react hook forms and local storage.',
          pt: 'Um projeto React JS criado para aprender react hook forms e local storage.',
        },
        image: '/assets/contact_app.png',
        tags: ['React JS', 'CSS', 'React Hook Forms', 'Local Storage'],
        demoLink: 'https://contact-list-webapp.vercel.app/',
        githubLink: 'https://github.com/felipey2010/contact-list-app',
      },
      {
        id: 'p2.5',
        name: {
          en: 'Visa card component',
          pt: 'Componente de cartão de visa',
        },
        description: {
          en: 'A component which displays a visa card with the ability to enter the card details.',
          pt: 'Um componente que exibe um cartão de visa com a capacidade de inserir os detalhes do cartão.',
        },
        image: '/assets/visa_card.png',
        tags: ['React JS', 'CSS'],
        demoLink: 'https://visa-card.vercel.app/',
        githubLink: 'https://github.com/felipey2010/visa-card',
      },
    ],
  },
]
