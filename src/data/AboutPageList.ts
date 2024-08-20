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
    en: 'Spoken Languages',
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
    en: "I'm a web developer with a passion for creating innovative and user-friendly web applications.",
    pt: 'Sou um desenvolvedor web com uma paixão em criar aplicações web inovadoras e fáceis de usar.',
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
  area: {
    en: 'Web Development',
    pt: 'Desenvolvimento Web',
  },
}

export const WorkExperienceList = {
  label: {
    en: 'Work Experience',
    pt: 'Experiência profissional',
  },
}
