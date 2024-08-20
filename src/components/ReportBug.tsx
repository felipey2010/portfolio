import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { ReportBugList } from '@/data/ProfileList'
import { useLanguage } from '@/Providers/LanguageProvider'
import { Dispatch, SetStateAction, useState } from 'react'
import { Textarea } from './ui/textarea'
import { toast } from './ui/use-toast'

type Props = {
  open: boolean
  onClose: () => void
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function ReportBug({ onClose, open, setOpen }: Props) {
  const { language } = useLanguage()
  const [description, setDescription] = useState('')

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    toast({
      title: `${ReportBugList.submission.success.title[language as keyof typeof ReportBugList.submission.success.title]}`,
      description: `${ReportBugList.submission.success.description[language as keyof typeof ReportBugList.submission.success.description]}`,
    })

    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {ReportBugList.name[language as keyof typeof ReportBugList.name]}
          </DialogTitle>
          <DialogDescription>
            {
              ReportBugList.description[
                language as keyof typeof ReportBugList.description
              ]
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Bug</Label>
            <Textarea
              id="name"
              value={description}
              onChange={handleDescriptionChange}
              maxLength={500}
              rows={5}
              autoComplete="off"
              placeholder={
                ReportBugList.textArea[
                  language as keyof typeof ReportBugList.textArea
                ]
              }
              required
            />
          </div>
          <DialogFooter>
            <div className="w-full flex items-center justify-end gap-2">
              <Button variant="secondary" onClick={onClose}>
                {
                  ReportBugList.button.cancel[
                    language as keyof typeof ReportBugList.button.cancel
                  ]
                }
              </Button>
              <Button type="submit">
                {
                  ReportBugList.button.send[
                    language as keyof typeof ReportBugList.button.send
                  ]
                }
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
