'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ProfileList, ReportBugList } from '@/data/ProfileList'
import { useLanguage } from '@/Providers/LanguageProvider'
import { useState } from 'react'
import ReportBug from './ReportBug'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

function Profile() {
  const { language } = useLanguage()
  const [isBugReportOpen, setIsBugReportOpen] = useState(false)

  const handleBugReportOpen = () => {
    setIsBugReportOpen(true)
  }
  const handleBugReportClose = () => setIsBugReportOpen(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/24297997?v=4"
                alt="profile"
              />
              <AvatarFallback>PMA</AvatarFallback>
            </Avatar>
            <span className="sr-only">
              {ProfileList.title[language as keyof typeof ProfileList.title]}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {ProfileList.profile.map((profile) => (
            <DropdownMenuItem key={profile.name.en}>
              {<profile.icon className="mr-2 h-4 w-4" />}
              {profile.name[language as keyof typeof profile.name]}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem onClick={handleBugReportOpen}>
            {<ReportBugList.icon className="mr-2 h-4 w-4" />}
            {ReportBugList.name[language as keyof typeof ReportBugList.name]}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isBugReportOpen && (
        <ReportBug
          open={isBugReportOpen}
          setOpen={setIsBugReportOpen}
          onClose={handleBugReportClose}
        />
      )}
    </>
  )
}

export default Profile
