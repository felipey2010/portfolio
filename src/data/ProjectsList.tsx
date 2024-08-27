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
          en: 'A school games system for the state of Roraima. The system allows the registration of competitions, school managers and teachers and also allows the managers to register their students athletes and coaches.',
          pt: 'Um sistema de gerenciamento de jogos escolares do estado de Roraima. O sistema permite o cadastro de competições, gestores e professores de escolares e além disso, permite que os gestores cadastrem seus alunos atletas e treinadores.',
        },
        image: '/assets/jogos_escolares.png',
        tags: ['spring-boot', 'java', 'postgresql', 'spring-security'],
        demoLink: '#',
        githubLink: '#',
      },
      {
        id: 'p1.2',
        name: {
          en: 'E-commerce Site',
          pt: 'Site de E-commerce',
        },
        description: {
          en: 'A website for an online store selling products.',
          pt: 'Um site para uma loja online vendendo produtos.',
        },
        image: '',
        tags: [],
        demoLink: '#',
        githubLink: '#',
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
        image: '/assets/jogo_educacivo.png',
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
    ],
  },
]
