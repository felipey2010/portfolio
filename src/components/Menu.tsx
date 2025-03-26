'use client'
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
import { useLanguage } from '@/components/providers/LanguageProvider'
import Link from 'next/link'
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'

export default function Menu() {
  const { language } = useLanguage()

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {MenuList.map((menu) => (
          <NavigationMenuItem key={menu.name.en}>
            <Link href={menu.path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {menu.name[language as keyof typeof menu.name]}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {ResourceList.name[language as keyof typeof ResourceList.name]}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href || '#'}
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
