import {
  BsBriefcase,
  BsChatRightText,
  BsMagic,
  BsPersonVcard,
} from 'react-icons/bs'
import { APP_ROUTES } from './Routes'
import exp from 'constants'

const ABOUT_PAGE = APP_ROUTES.ABOUT + '?tab='

export const AboutSidebarList = [
  {
    label: {
      en: 'General',
      pt: 'Geral',
    },
    href: APP_ROUTES.ABOUT,
    icon: BsPersonVcard,
  },
  {
    label: {
      en: 'Experience',
      pt: 'Experiência',
    },
    href: ABOUT_PAGE + 'experience',
    icon: BsBriefcase,
  },
  {
    label: {
      en: 'Skills',
      pt: 'Habilidades',
    },
    href: ABOUT_PAGE + 'skills',
    icon: BsMagic,
  },
  {
    label: {
      en: 'Contact',
      pt: 'Contato',
    },
    href: ABOUT_PAGE + 'contact',
    icon: BsChatRightText,
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
        en: 'In Progress',
        pt: 'Em andamento',
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
      en: 'Coding',
      pt: 'Programação',
    },
    {
      en: 'Nadar',
      pt: 'Natação',
    },
    {
      en: 'Play games',
      pt: 'Jogar jogos',
    },
    {
      en: 'Watch tutorials',
      pt: 'Assistir tutoriais',
    },
    {
      en: 'Ride motorbike',
      pt: 'Andar de motor',
    },
  ],
}

export const AboutPageNotFoundList = {
  label: {
    en: 'Not Found',
    pt: 'Não encontrado',
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

export const AreaOfExpertiseList = {
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
}

export const WorkExperienceList = {
  label: {
    en: 'Work Experience',
    pt: 'Experiência profissional',
  },
  responsibilitiesTitle: {
    en: 'Responsibilities',
    pt: 'Responsabilidades',
  },
  experiences: [
    {
      position: {
        en: 'Internship - English teacher',
        pt: 'PEstágio - rofessor de inglês',
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
          pt: 'Resolução de problemas (resolução de problemas)',
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
          en: 'Javascript (React & Next JS)',
          pt: 'Javascript (React & Next JS)',
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
        en: 'State Government',
        pt: 'Governo Estadual',
      },
      location: {
        en: 'Roraima, Brazil',
        pt: 'Roraima, Brasil',
      },
      period: {
        en: 'March, 2022 - till you contract me',
        pt: 'Março, 2022 - até você me contratar',
      },
      responsibilities: [
        {
          en: 'Gather requirements of projects',
          pt: 'Levantar requisitos de projetos',
        },
        {
          en: 'Structure projects',
          pt: 'Estruturar projetos',
        },
        {
          en: 'Implement projects',
          pt: 'Implementar projetos',
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
          en: 'Javascript (React & Next JS and Node JS)',
          pt: 'Javascript (React & Next JS e Node JS)',
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
  ],
}
