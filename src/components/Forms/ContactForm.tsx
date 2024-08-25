'use client'
import { ContactFormText } from '@/data/SystemList'
import { useLanguage } from '@/Providers/LanguageProvider'
import { ContactFormSchema, ContactFormSchemaType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { LoaderCircle } from 'lucide-react'

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
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

  const onSubmit = (values: ContactFormSchemaType) => {
    console.log(values)
    setLoading(true)
    toast({
      title:
        ContactFormText.submission.title[
          selectedLanguage as keyof typeof ContactFormText.submission.title
        ],
      description:
        ContactFormText.submission.description[
          selectedLanguage as keyof typeof ContactFormText.submission.description
        ],
    })
    reset()
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={control}
            disabled={loading || disabled}
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
            disabled={loading || disabled}
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
            disabled={loading || disabled}
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
        <Button type="submit" className="w-full" disabled={loading || disabled}>
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
