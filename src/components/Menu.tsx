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
import { MenuList, ResourceList } from '@/data/MenuList'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Menu() {
  const { language } = useLanguage()

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {MenuList.map((menu) => (
          <NavigationMenuItem key={menu.name.en}>
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
        <NavigationMenuItem>
          <NavigationMenuTrigger>
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
