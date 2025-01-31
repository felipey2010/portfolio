import { Github, Linkedin, Mail, X } from 'lucide-react'
import {
  BsBriefcase,
  BsChatRightText,
  BsMagic,
  BsPersonVcard,
} from 'react-icons/bs'
import { APP_ROUTES } from './Routes'

const ABOUT_PAGE = APP_ROUTES.ABOUT + '?tab='

export const AboutSidebarList = [
  {
    label: {
      en: 'Profile',
      pt: 'Perfil',
    },
    href: APP_ROUTES.ABOUT,
    icon: BsPersonVcard,
    activeTab: null,
  },
  {
    label: {
      en: 'Experience',
      pt: 'Experiência',
    },
    href: ABOUT_PAGE + 'experience',
    icon: BsBriefcase,
    activeTab: 'experience',
  },
  {
    label: {
      en: 'Skills',
      pt: 'Habilidades',
    },
    href: ABOUT_PAGE + 'skills',
    icon: BsMagic,
    activeTab: 'skills',
  },
  {
    label: {
      en: 'Contact',
      pt: 'Contato',
    },
    href: ABOUT_PAGE + 'contact',
    icon: BsChatRightText,
    activeTab: 'contact',
  },
]

export const OriginList = {
  label: {
    en: 'Country of Origin',
    pt: 'País de Origem',
  },
  country: {
    en: 'Ghana - West Africa',
    pt: 'Gana - África Ocidental',
  },
}

export const LanguageList = {
  label: {
    en: 'Languages',
    pt: 'Línguas faladas',
  },
  languages: [
    {
      language: {
        en: 'English',
        pt: 'Inglês',
      },
      level: {
        en: 'Native',
        pt: 'Nativo',
      },
    },
    {
      language: {
        en: 'Portuguese',
        pt: 'Português',
      },
      level: {
        en: 'Fluent',
        pt: 'Fluente',
      },
    },
  ],
}

export const EducationList = {
  label: {
    en: 'Education',
    pt: 'Educação',
  },
  schools: [
    {
      level: {
        en: 'Bachelor',
        pt: 'Bacharelado',
      },
      institution: {
        en: 'Federal University of Roraima - (UFRR)',
        pt: 'Universidade Federal de Roraima - (UFRR)',
      },
      status: {
        en: 'In Progress (graduating)',
        pt: 'Em andamento (finalizando)',
      },
      location: {
        en: 'Roraima - Brazil',
        pt: 'Roraima - Brasil',
      },
    },
    {
      level: {
        en: 'Senior High',
        pt: 'Ensino médio',
      },
      institution: {
        en: 'Ghana Secondary Technical School - (G.S.T.S)',
        pt: 'Ghana Secondary Technical School - (G.S.T.S)',
      },
      status: {
        en: 'Completed',
        pt: 'Completo',
      },
      date: '2008 - 2012',
      location: {
        en: 'Takoradi - Ghana',
        pt: 'Takoradi - Gana',
      },
    },
    {
      level: {
        en: 'Junior High',
        pt: 'Ensino básico',
      },
      institution: {
        en: 'Pentecost Preparatory School - (P.P.S)',
        pt: 'Pentecost Preparatory School - (P.P.S)',
      },
      status: {
        en: 'Completed',
        pt: 'Completo',
      },
      date: '2005 - 2008',
      location: {
        en: 'Takoradi - Ghana',
        pt: 'Takoradi - Gana',
      },
    },
  ],
}

export const HobbyList = {
  label: {
    en: 'Hobbies',
    pt: 'Passatempo',
  },
  hobbies: [
    {
      en: 'Listen to music',
      pt: 'Ouvir música',
    },
    {
      en: 'Swim',
      pt: 'Nadar',
    },
    {
      en: 'Watch basketball',
      pt: 'Assistir basquete',
    },
    {
      en: 'Play games',
      pt: 'Jogar jogos',
    },
    {
      en: 'Ride motorbike',
      pt: 'Andar de moto',
    },
  ],
}

export const AboutPageNotFoundList = {
  label: {
    en: 'Page Not Found',
    pt: 'Página Não encontrada',
  },
  title: {
    en: 'Oops...Page not found',
    pt: 'Opaa...Página não encontrada',
  },
  description: {
    en: `Our digital librarian has misplaced your requested page. \nFear not, we are on the case!`,
    pt: `Nosso bibliotecário digital perdeu a página solicitada. \nNão tema, estamos cuidando do caso!`,
  },
  button: {
    en: 'Go back home',
    pt: 'Página inicial',
  },
}

export const ProfileDetailsList = {
  title: {
    en: "Hi, I'm Philip Akpanyi",
    pt: 'Oi, eu sou Philip Akpanyi',
  },
  description: {
    en: 'A web developer with passion for creating innovative and user-friendly solutions.',
    pt: 'Um desenvolvedor web com paixão em criar soluções inovadoras e fáceis de usar.',
  },
  quote: {
    en: 'Excellence is to do a common thing in an uncommon way.',
    pt: 'Excelência é fazer uma coisa comum de uma maneira desconhecida.',
  },
  quote_by: 'Booker T. Washington',
}

export const WorkExperienceList = {
  title: {
    en: 'My Experience',
    pt: 'Minha Experiência',
  },
  description: {
    en: 'A little showcase of my journey so far as a developer',
    pt: 'Uma pequena mostra da minha jornada até agora como desenvolvedor',
  },
  label: {
    en: 'Work Experience',
    pt: 'Experiência profissional',
  },
  areaOfExpertise: {
    label: {
      en: 'Area of Expertise',
      pt: 'Área de atuação',
    },
    areas: [
      {
        en: 'Web Development',
        pt: 'Desenvolvimento Web',
      },
    ],
  },
  responsibilitiesTitle: {
    en: 'Responsibilities',
    pt: 'Responsabilidades',
  },
  experienceTitle: {
    en: 'Acquired experience',
    pt: 'Experiência adquirida',
  },
  experiences: [
    {
      position: {
        en: 'Internship - English teacher',
        pt: 'Estágio - Professor de inglês',
      },
      company: {
        en: 'NUCELE',
        pt: 'NUCELE',
      },
      location: {
        en: 'UFRR',
        pt: 'UFRR',
      },
      period: {
        en: 'March, 2015 - December, 2017',
        pt: 'Março, 2015 - Dezembro, 2017',
      },
      responsibilities: [
        {
          en: 'Teach English to students',
          pt: 'Ministrar aulas de inglês para alunos',
        },
        {
          en: 'Organize presentations each semester',
          pt: 'Organizar apresentações a cada semestre',
        },
      ],
      experiences: [
        {
          en: 'Teaching skills',
          pt: 'Habilidades de ensino',
        },
      ],
    },
    {
      position: {
        en: 'Internship - I.T Support',
        pt: 'Estágio - Suporte de TI',
      },
      company: {
        en: 'I.T Department',
        pt: 'Departamento de T.I',
      },
      location: {
        en: 'UFRR',
        pt: 'UFRR',
      },
      period: {
        en: 'September, 2018 - September, 2020',
        pt: 'Setembro, 2018 - Setembro, 2020',
      },
      responsibilities: [
        {
          en: 'Support to students and other departments',
          pt: 'Suporte aos alunos e outros departamentos',
        },
        {
          en: 'Provide training for department site managers',
          pt: 'Ministrar treinamento para gestores de sites dos departamentos',
        },
      ],
      experiences: [
        {
          en: 'Problem solving (troubleshooting)',
          pt: 'Resolução de problemas (troubleshooting)',
        },
        {
          en: 'Joomla CMS',
          pt: 'Joomla CMS',
        },
        {
          en: 'HTML & CSS',
          pt: 'HTML & CSS',
        },
        {
          en: 'Give training',
          pt: 'Ministração de treinamentos',
        },
      ],
    },
    {
      position: {
        en: 'Internship - Front-end developer',
        pt: 'Estágio - Desenvolvedor front-end',
      },
      company: {
        en: 'Social Me',
        pt: 'Social Me',
      },
      location: {
        en: 'Boa Vista, Roraima',
        pt: 'Boa Vista, Roraima',
      },
      period: {
        en: 'September, 2020 - June, 2021',
        pt: 'Setembro, 2020 - Junho, 2021',
      },
      responsibilities: [
        {
          en: 'Offer assistance to the developers',
          pt: 'Oferecer assistência aos desenvolvedores',
        },
        {
          en: 'Offer technical support at the company',
          pt: 'Oferecer suporte técnico à empresa',
        },
      ],
      experiences: [
        {
          en: 'Javascript (React - Next JS)',
          pt: 'Javascript (React - Next JS)',
        },
        {
          en: 'I.T Support',
          pt: 'Suporte de TI',
        },
        {
          en: 'Chakra UI',
          pt: 'Chakra UI',
        },
      ],
    },
    {
      position: {
        en: 'Web developer (PJ)',
        pt: 'Desenvolvedor web (PJ)',
      },
      company: {
        en: 'Social Me',
        pt: 'Social Me',
      },
      location: {
        en: 'Boa Vista, Roraima',
        pt: 'Boa Vista, Roraima',
      },
      period: {
        en: 'January, 2022 - October, 2023',
        pt: 'Janeiro, 2022 - Outubro, 2023',
      },
      responsibilities: [
        {
          en: 'Develop system interfaces',
          pt: 'Desenvolver interfaces de sistema',
        },
      ],
      experiences: [
        {
          en: 'Teamwork',
          pt: 'Trabalho em equipe',
        },
        {
          en: 'Next JS',
          pt: 'Next JS',
        },
        {
          en: 'Tailwind CSS',
          pt: 'Tailwind CSS',
        },
        {
          en: 'Chakra UI',
          pt: 'Chakra UI',
        },
      ],
    },
    {
      position: {
        en: 'System developer',
        pt: 'Desenvolvedor de sistemas',
      },
      company: {
        en: 'State Secretariat for Digital Government (SEGOD)',
        pt: 'Secretaria de Estado de Governo Digital (SEGOD)',
      },
      location: {
        en: 'Roraima, Brazil',
        pt: 'Roraima, Brasil',
      },
      period: {
        en: 'March, 2022 - January, 2025',
        pt: 'Março, 2022 - Janeiro, 2025',
      },
      responsibilities: [
        {
          en: 'Gather requirements of projects',
          pt: 'Levantar requisitos de projetos',
        },
        {
          en: 'Structure and implement projects',
          pt: 'Estruturar e implementar projetos',
        },
        {
          en: 'Assistance to the clients',
          pt: 'Assistência aos clientes',
        },
      ],
      experiences: [
        {
          en: 'Project management',
          pt: 'Gerenciamento de projetos',
        },
        {
          en: 'Java (Spring framework)',
          pt: 'Java (Spring framework)',
        },
        {
          en: 'Javascript (React - Next JS and Node JS)',
          pt: 'Javascript (React - Next JS e Node JS)',
        },
        {
          en: 'Database (PostgreSQL)',
          pt: 'Banco de dados (PostgreSQL)',
        },
        {
          en: 'Server (Tomcat and JBoss/Wildfly)',
          pt: 'Servidor (Tomcat e JBoss/Wildfly)',
        },
        {
          en: 'Dependency management (Maven)',
          pt: 'Gerenciamento de dependências (Maven)',
        },
      ],
    },
    {
      position: {
        en: 'System developer',
        pt: 'Desenvolvedor de sistemas',
      },
      company: {
        en: 'Freelance',
        pt: 'Freelance',
      },
      location: {
        en: 'Roraima, Brazil',
        pt: 'Roraima, Brasil',
      },
      period: {
        en: 'January, 2025 - present',
        pt: 'Janeiro, 2025 - atual',
      },
      responsibilities: [
        {
          en: `Develop personal and other people's projects on demand`,
          pt: 'Desenvolver projetos pessoais e dos outros sob demanda',
        },
      ],
      experiences: [
        {
          en: 'Comunication with clients',
          pt: 'Comunicação com clientes',
        },
        {
          en: 'Structuring projects to facilitate their implementation',
          pt: 'Estruturação de projetos para facilitar a sua implementação',
        },
        {
          en: 'How to sell my products',
          pt: 'Como vender meus produtos',
        },
      ],
    },
  ],
}

export const TechnologiesList = {
  label: {
    en: 'Technologies',
    pt: 'Tecnologias',
  },
  description: {
    en: 'The list of some of the technologies I work with',
    pt: 'A lista de algumas das tecnologias com que eu trabalho',
  },
  technologies: [
    {
      name: 'Javascript ( Next JS)',
    },
    {
      name: 'Java (Spring framework)',
    },
    {
      name: 'Node JS (REST APIs)',
    },
    {
      name: 'PostgreSQL',
    },
    {
      name: 'Tomcat & JBoss/Wildfly',
    },
    {
      name: 'Git',
    },
    {
      name: 'Maven',
    },
  ],
}

export const SkillsList = {
  title: {
    en: 'Skills',
    pt: 'Habilidades',
  },
  description: {
    en: 'When it comes to skills, I have just a few in mind. Feel free to play around with them',
    pt: 'Quando se trata de habilidades, eu tenho apenas poucas em mente. Sinta-se à vontade para brincar com elas',
  },
  skills: [
    {
      title: {
        en: 'Agile Methodology',
        pt: 'Metodologia ágil',
      },
      description: {
        en: 'A project management approach that emphasizes flexibility, collaboration, and customer satisfaction.',
        pt: 'Uma abordagem de gerenciamento de projetos que enfatiza a flexibilidade, a colaboração e a satisfação do cliente.',
      },
    },
    {
      title: {
        en: 'Attention to details',
        pt: 'Atenção aos detalhes',
      },
      description: {
        en: 'Aim at achieving precise results according to the project requirements.',
        pt: 'Objetiva-se a atingir resultados precisos de acordo com as exigências do projeto.',
      },
    },
    {
      title: {
        en: 'Continuous learning',
        pt: 'Aprendizagem contínua',
      },
      description: {
        en: 'Enthusiastic about quickly understanding new technologies to keep up to date.',
        pt: 'Entusiasta em compreender rapidamente novas tecnologias para manter atualizado.',
      },
    },
    {
      title: {
        en: 'Team and individual work',
        pt: 'Trabalho em equipe e individual',
      },
      description: {
        en: 'Ability to adapt easily to both work in a team and individually.',
        pt: 'Habilidade de adaptar facilmente tanto ao trabalho em equipe como individualmente.',
      },
    },
    {
      title: {
        en: 'Creativity',
        pt: 'Criatividade',
      },
      description: {
        en: 'Ability to find unique solutions to problems and for designing solutions that are both functional and visually appealing.',
        pt: 'Habilidade de encontrar soluções únicas para problemas e de projetar soluções que são funcionais e visualmente atraentes.',
      },
    },
    {
      title: {
        en: 'Leadership',
        pt: 'Liderança',
      },
      description: {
        en: 'Possess skills in communication, decision-making, resolutions of problems, motivating, team and time management.',
        pt: 'Possui habilidades em comunicação, tomada de decisão, resolução de problemas, motivação, gerenciamento de equipe e tempo.',
      },
    },
  ],
}

export const ContactList = {
  title: {
    en: 'Contact Me',
    pt: 'Contate-me',
  },
  subtitle: {
    en: 'Get in Touch',
    pt: 'Entre em Contato',
  },
  description: {
    en: 'Feel free to reach out through any of the following channels or use the contact form for potential collaborations or inquiries.',
    pt: 'Sinta-se à vontade para entrar em contato por qualquer um dos canais a seguir ou usar o formulário de contato para possíveis colaborações ou consultas.',
  },
  contacts: [
    {
      name: 'Email',
      value: 'mailto:pakpanyi@gmail.com',
      type: 'text',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      value: 'https://www.linkedin.com/in/philip-mahama-akpanyi',
      type: 'link',
      icon: Linkedin,
    },
    {
      name: 'Github',
      value: 'https://github.com/felipey2010',
      type: 'link',
      icon: Github,
    },
  ],
}

export const GENERAL_PAGE_INFO = {
  title: {
    en: 'Profile',
    pt: 'Perfil',
  },
  description: {
    en: 'Get to know more about my background, including education, languages spoken, country of origin, and hobbies.',
    pt: 'Saiba mais sobre o meu perfil, incluindo educação, idiomas falados, país de origem e hobbies.',
  },
  keywords: {
    en: 'profile, background, education, languages, hobbies, country',
    pt: 'perfil, formação, educação, idiomas, hobbies, país',
  },
}

export const EXPERIENCE_PAGE_INFO = {
  title: {
    en: 'Experience',
    pt: 'Experiência',
  },
  description: {
    en: 'Discover my professional experience, areas of expertise, and the technologies I specialize in.',
    pt: 'Conheça a minha experiência profissional, áreas de especialização e as tecnologias com as quais trabalho.',
  },
  keywords: {
    en: 'experience, work experience, expertise, technologies, professional background',
    pt: 'experiência, experiência profissional, especialização, tecnologias, histórico profissional',
  },
}

export const SKILLS_PAGE_INFO = {
  title: {
    en: 'Skills',
    pt: 'Habilidades',
  },
  description: {
    en: 'Explore the soft and technical skills that I bring to the table.',
    pt: 'Explore as habilidades técnicas e interpessoais que possuo.',
  },
  keywords: {
    en: 'skills, soft skills, technical skills, abilities, strengths',
    pt: 'habilidades, habilidades interpessoais, habilidades técnicas, competências, pontos fortes',
  },
}

export const CONTACT_PAGE_INFO = {
  title: {
    en: 'Contact',
    pt: 'Contato',
  },
  description: {
    en: 'Get in touch with me for potential collaborations or inquiries.',
    pt: 'Entre em contato comigo para possíveis colaborações ou perguntas.',
  },
  keywords: {
    en: 'contact, get in touch, email, phone, inquiries, collaborations',
    pt: 'contato, entre em contato, e-mail, telefone, perguntas, colaborações',
  },
}

export const NOT_FOUND_PAGE_INFO = {
  title: {
    en: 'Page Not Found',
    pt: 'Página Não encontrada',
  },
  description: {
    en: `Our digital librarian has misplaced your requested page. \nFear not, we are on the case!`,
    pt: `Nosso bibliotecário digital perdeu a página solicitada. \nNão tema, estamos cuidando do caso!`,
  },
  keywords: {
    en: '',
    pt: '',
  },
}
