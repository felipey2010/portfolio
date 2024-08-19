import { BsClipboard2, BsCode, BsHouse, BsPerson } from 'react-icons/bs'

export const MenuList = [
  {
    name: {
      en: 'Home',
      pt: 'Início',
    },
    path: '/',
    icon: BsHouse,
  },
  {
    name: {
      en: 'About',
      pt: 'Sobre',
    },
    path: '/about',
    icon: BsPerson,
  },
  {
    name: {
      en: 'Projects',
      pt: 'Projetos',
    },
    path: '/projects',
    icon: BsClipboard2,
  },
  // {
  //   name: "Resources",
  //   path: "/resources",
  //   icon: BsCode,
  // },
]

export const ResourceList = {
  name: {
    en: 'Resources',
    pt: 'Recursos',
  },
  icon: BsCode,
  subItems: [
    {
      title: {
        en: 'Blog',
        pt: 'Blog',
      },
      href: '/resources',
      description: {
        en: 'Random ideas, tools and resources I found',
        pt: 'Ideias, ferramentas e recursos que encontrei',
      },
    },
    {
      title: {
        en: 'Privacy Policy',
        pt: 'Política de Privacidade',
      },
      href: '/privacy-policy',
      description: {
        en: 'Know what data we collect and how we use it.',
        pt: 'Saiba os dados que coletamos e como os usamos.',
      },
    },
  ],
}
