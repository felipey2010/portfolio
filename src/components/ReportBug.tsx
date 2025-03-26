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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ReportBugList } from '@/data/ProfileList'
import { sendBugReportEmail } from '@/lib/actions'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { BugReportSchema, BugReportSchemaType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Textarea } from './ui/textarea'
import { toast } from './ui/use-toast'
import { LoaderCircle } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function ReportBug({ onClose, open, setOpen }: Props) {
  const { language } = useLanguage()
  const [loading, setLoading] = useState(false)

  const form = useForm<BugReportSchemaType>({
    resolver: zodResolver(BugReportSchema),
    defaultValues: {
      message: '',
    },
  })

  const { control, handleSubmit, reset } = form

  const onSubmit = async (values: BugReportSchemaType) => {
    setLoading(true)

    try {
      await sendBugReportEmail(values)
      toast({
        title:
          ReportBugList.submission.success.title[
            language as keyof typeof ReportBugList.submission.success.title
          ],
        description:
          ReportBugList.submission.success.description[
            language as keyof typeof ReportBugList.submission.success.description
          ],
      })
      reset()
      onClose()
    } catch (error) {
      console.error(error)
      toast({
        title:
          ReportBugList.submission.error.title[
            language as keyof typeof ReportBugList.submission.error.title
          ],
        description:
          ReportBugList.submission.error.description[
            language as keyof typeof ReportBugList.submission.error.description
          ],
      })
    }
    setLoading(false)
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
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={control}
                disabled={loading}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="_message">Bug</FormLabel>
                    <FormControl>
                      <Textarea
                        id="_message"
                        maxLength={500}
                        {...field}
                        rows={5}
                        autoComplete="off"
                        placeholder={
                          ReportBugList.textArea[
                            language as keyof typeof ReportBugList.textArea
                          ]
                        }
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      {
                        ReportBugList.button.send[
                          language as keyof typeof ReportBugList.button.sending
                        ]
                      }
                    </>
                  ) : (
                    ReportBugList.button.send[
                      language as keyof typeof ReportBugList.button.send
                    ]
                  )}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
