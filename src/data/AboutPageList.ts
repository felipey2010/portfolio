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
        en: 'System Development',
        pt: 'Desenvolvimento de Sistemas',
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
        en: 'January, 2025 - February, 2025',
        pt: 'Janeiro, 2025 - Fevereiro, 2025',
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
    {
      position: {
        en: 'Fullstack Developer',
        pt: 'Desenvolvedor Fullstack',
      },
      company: {
        en: 'Information Technology Solutions (STI - RR)',
        pt: 'Soluções em Tecnologia da Informação (STI - RR)',
      },
      location: {
        en: 'Roraima, Brazil',
        pt: 'Roraima, Brasil',
      },
      period: {
        en: 'February, 2025 - April, 2025',
        pt: 'Fevereiro, 2025 - Abril, 2025',
      },
      responsibilities: [
        {
          en: 'Develop solutions to meet customer needs (API, web, mobile and desktop)',
          pt: 'Desenvolver soluções para atender as necessidades dos clientes (API, web, celular e desktop)',
        },
        {
          en: 'Create automated tests',
          pt: 'Criar testes automatizados',
        },
      ],
      experiences: [
        {
          en: 'Create multiplatform apps using Flutter',
          pt: 'Crie aplicativos multiplataforma usando Flutter',
        },
        {
          en: 'RESTful APIs',
          pt: 'APIs RESTful',
        },
        {
          en: 'Automated tests',
          pt: 'Testes automatizados',
        },
        {
          en: 'Code refactoring for efficiency',
          pt: 'Refatoração de códigos para obter eficiência',
        },
      ],
    },
    {
      position: {
        en: 'Systems Analyst',
        pt: 'Analista de sistemas',
      },
      company: {
        en: 'FPF Tech',
        pt: 'FPF Tech',
      },
      location: {
        en: 'Manaus, Brazil',
        pt: 'Manaus, Brasil',
      },
      period: {
        en: 'April, 2025 - February, 2026',
        pt: 'Abril, 2025 - Fevereiro, 2026',
      },
      responsibilities: [
        {
          en: 'Develop the user interface to configure modems of the internet providers',
          pt: 'Desenvolver a interface do usuário para configurar modems dos provedores de internet',
        },
        {
          en: 'Fix bugs reported by the clients and implement new features for the UI',
          pt: 'Corrigir bugs reportados pelos clientes e implementar novas funcionalidades para a interface do usuário',
        },
      ],
      experiences: [
        {
          en: 'Understand modems and their configurations',
          pt: 'Compreender modems e suas configurações',
        },
        {
          en: 'Work with a team of developers using agile methodologies, code versioning with Gitlab and project management using JIRA and Microsoft Teams',
          pt: 'Trabalhar com uma equipe de desenvolvedores utilizando metodologias ágeis, versionamento de código com Gitlab e gerenciamento de projetos utilizando JIRA e Microsoft Teams',
        },
        {
          en: 'Creating test cases and performing tests to ensure the quality of the product',
          pt: 'Criar casos de teste e realizar testes para garantir a qualidade do produto',
        },
      ],
    },
  ],
}
