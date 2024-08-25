'use client'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/Providers/LanguageProvider'
import { AnimatePresence, motion } from 'framer-motion'
import Link, { LinkProps } from 'next/link'
import React, { createContext, useContext, useState } from 'react'
import { IconType } from 'react-icons'
import { BsX } from 'react-icons/bs'
import { MdOutlineMenu } from 'react-icons/md'
import { Button } from './button'

type Links = {
  label: {
    en: string
    pt: string
  }
  href: string
  icon: IconType
}

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  animate: boolean
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  const [openState, setOpenState] = useState(false)

  const open = openProp !== undefined ? openProp : openState
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  )
}

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<'div'>)} />
    </>
  )
}

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar()
  return (
    <>
      <motion.div
        className={cn(
          'h-full px-4 py-4 hidden md:flex md:flex-col bg-card w-[200px] flex-shrink-0',
          className
        )}
        animate={{
          width: animate ? (open ? '200px' : '60px') : '200px',
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          bounce: 0.4,
          duration: 1,
          ease: 'easeIn',
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  )
}

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  const { open, setOpen } = useSidebar()
  return (
    <>
      <div
        className={cn(
          'h-10 px-2 py-4 my-1.5 flex flex-row md:hidden items-center justify-between bg-card w-full'
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setOpen(!open)}
          >
            <MdOutlineMenu size={18} />
          </Button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className={cn(
                'fixed h-full w-full inset-0 bg-card p-10 z-[100] flex flex-col justify-between',
                className
              )}
            >
              <Button
                className="absolute right-10 top-10 z-50"
                size="icon"
                variant="outline"
                onClick={() => setOpen(!open)}
              >
                <BsX size={18} />
              </Button>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export const SidebarLink = ({
  link,
  active = false,
  className,
  ...props
}: {
  link: Links
  active?: boolean
  className?: string
  props?: LinkProps
}) => {
  const { open, animate } = useSidebar()
  const { language } = useLanguage()
  return (
    <Link
      href={link.href}
      className={cn(
        'w-fit flex items-center justify-start gap-2 group/sidebar py-2',
        className,
        active && 'text-primary font-bold'
      )}
      {...props}
    >
      {<link.icon className="text-foreground h-5 w-5 flex-shrink-0" />}
      <motion.span
        animate={{
          display: animate ? (open ? 'inline-block' : 'none') : 'inline-block',
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="w-fit text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label[language as keyof typeof link.label]}
      </motion.span>
    </Link>
  )
}
