'use client'
import { ContactFormText } from '@/data/SystemList'
import { sendContactEmail } from '@/lib/actions'
import { useLanguage } from '@/Providers/LanguageProvider'
import { ContactFormSchema, ContactFormSchemaType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { toast } from '../ui/use-toast'

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { language: selectedLanguage } = useLanguage()

  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const { control, handleSubmit, reset } = form

  const onSubmit = async (values: ContactFormSchemaType) => {
    setLoading(true)

    try {
      await sendContactEmail(values)
      toast({
        title:
          ContactFormText.submission.success.title[
            selectedLanguage as keyof typeof ContactFormText.submission.success.title
          ],
        description:
          ContactFormText.submission.success.description[
            selectedLanguage as keyof typeof ContactFormText.submission.success.description
          ],
      })
      reset()
    } catch (error) {
      console.error(error)
      toast({
        title:
          ContactFormText.submission.error.title[
            selectedLanguage as keyof typeof ContactFormText.submission.error.title
          ],
        description:
          ContactFormText.submission.error.description[
            selectedLanguage as keyof typeof ContactFormText.submission.error.description
          ],
      })
    }
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={control}
            disabled={loading}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">
                  {
                    ContactFormText.name.label[
                      selectedLanguage as keyof typeof ContactFormText.name.label
                    ]
                  }
                </FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    required
                    autoComplete="off"
                    {...field}
                    placeholder={
                      ContactFormText.name.placeholder[
                        selectedLanguage as keyof typeof ContactFormText.name.placeholder
                      ]
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={control}
            disabled={loading}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">
                  {
                    ContactFormText.email.label[
                      selectedLanguage as keyof typeof ContactFormText.email.label
                    ]
                  }
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    required
                    autoComplete="off"
                    {...field}
                    placeholder={
                      ContactFormText.email.placeholder[
                        selectedLanguage as keyof typeof ContactFormText.email.placeholder
                      ]
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={control}
            disabled={loading}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">
                  {
                    ContactFormText.message.label[
                      selectedLanguage as keyof typeof ContactFormText.message.label
                    ]
                  }
                </FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    required
                    {...field}
                    placeholder={
                      ContactFormText.message.placeholder[
                        selectedLanguage as keyof typeof ContactFormText.message.placeholder
                      ]
                    }
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              {
                ContactFormText.button.send[
                  selectedLanguage as keyof typeof ContactFormText.button.send
                ]
              }
            </>
          ) : (
            ContactFormText.button.send[
              selectedLanguage as keyof typeof ContactFormText.button.send
            ]
          )}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
