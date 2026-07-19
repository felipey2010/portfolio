'use client'
import { useLanguage } from '@/components/providers/LanguageProvider'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { BsClipboard2, BsCode, BsHouse, BsPerson } from 'react-icons/bs'

const MenuList = [
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

const ResourceList = {
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
      href: '/blog',
      description: {
        en: 'Random ideas, tools and resources I found',
        pt: 'Ideias, ferramentas e recursos que encontrei',
      },
    },
    {
      title: {
        en: 'Resources',
        pt: 'Recursos',
      },
      href: '/resources',
      description: {
        en: 'A collection of useful resources',
        pt: 'Uma coleção de recursos úteis',
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

export default function Menu() {
  const { language } = useLanguage()

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {MenuList.map((menu) => (
          <NavigationMenuItem key={menu.name.en} id={menu.name.en}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={menu.path}>
                {menu.name[language as keyof typeof menu.name]}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem id="menu-resource-id">
          <NavigationMenuTrigger id="nav-trigger-id">
            {ResourceList.name[language as keyof typeof ResourceList.name]}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
              {ResourceList.subItems.map((resource) => (
                <ListItem
                  key={resource.title.en}
                  title={
                    resource.title[language as keyof typeof resource.title]
                  }
                  href={resource.href}
                >
                  {
                    resource.description[
                      language as keyof typeof resource.description
                    ]
                  }
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={props.href || '#'}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
        >
          <span className="text-sm font-medium leading-none">{title}</span>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

ListItem.displayName = 'ListItem'
