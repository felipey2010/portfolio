'use client'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { MobileMenuList } from '@/data/MobileMenuList'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { usePathname, useRouter } from 'next/navigation'
import { BsCheck } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'

function MobileMenu() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Menubar className="md:hidden border-none shadow-sm">
      <MenubarMenu>
        <MenubarTrigger name="Menu" className="text-foreground font-normal">
          Menu <MdKeyboardArrowDown className="ml-2" />
        </MenubarTrigger>
        <MenubarContent className="border-border">
          {MobileMenuList.map((menu, index) => {
            const mennuName = menu.name[language as keyof typeof menu.name]
            return menu.subitems ? (
              <MenubarSub key={`mobile-menu-${index}`}>
                <MenubarSubTrigger className="text-foreground font-normal">
                  {mennuName}
                </MenubarSubTrigger>
                <MenubarSubContent className="border-border">
                  {menu.subitems.map((subitem, index) => (
                    <MenubarItem
                      key={`mobile-menu-subitem-${index}`}
                      onClick={() => router.push(subitem.href)}
                      className={cn(pathname === subitem.href && 'font-bold')}
                    >
                      {pathname === subitem.href && (
                        <BsCheck className="mr-1" />
                      )}
                      {subitem.title[language as keyof typeof subitem.title]}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ) : (
              <MenubarItem
                key={`menu-${index}`}
                className={cn(pathname === menu.href && 'font-bold')}
                onClick={() => router.push(menu.href)}
              >
                {pathname === menu.href && <BsCheck className="mr-1" />}
                {mennuName}
              </MenubarItem>
            )
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default MobileMenu
