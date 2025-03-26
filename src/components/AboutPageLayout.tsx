'use client'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import { AboutSidebarList } from '@/data/AboutPageList'
import { AppLogo } from '@/components/svg/Logo'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

function AboutPageLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams().get('tab')

  return (
    <div className="w-full flex flex-1 rounded-md flex-col md:flex-row bg-card mx-auto overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} animate>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-4 flex flex-col gap-2">
              {AboutSidebarList.map((item) => (
                <SidebarLink
                  key={'abt-' + item.label.en}
                  link={item}
                  active={searchParams === item.activeTab}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 transition-all duration-300 ease-in-out overflow-y-auto scroll-smooth bg-background-foreground">
        <div className="p-2 md:p-4 rounded-s-md flex flex-col gap-2 flex-1 w-full h-full min-h-96 sm:min-h-max">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AboutPageLayout

export const Logo = () => {
  return (
    <Link
      href="/"
      className="w-fit font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <AppLogo className="h-5 w-6 fill-primary rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        PMA
      </motion.span>
    </Link>
  )
}
