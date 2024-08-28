'use server'

import {
  BugReportTemplate,
  ContactEmailTemplate,
} from '@/components/EmailTemplates'
import {
  BugReportSchema,
  BugReportSchemaType,
  ContactFormSchema,
  ContactFormSchemaType,
} from '@/schemas'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(contact: ContactFormSchemaType) {
  const result = ContactFormSchema.safeParse(contact)
  const destinationEmail = process.env.NEXT_PUBLIC_EMAIL?.toString()!

  if (result.error) {
    throw Error('Invalid contact form data')
  }
  const { name, email, message } = result.data
  const { data, error } = await resend.emails.send({
    from: 'Portfolio Site <onboarding@resend.dev>',
    to: [destinationEmail],
    subject: `New Contact From - ${name}`,
    react: ContactEmailTemplate({ name, message, email }),
  })

  if (!data || error) {
    throw Error('Failed to send contact email')
  }

  return { success: true }
}

export async function sendBugReportEmail(contact: BugReportSchemaType) {
  const result = BugReportSchema.safeParse(contact)
  const destinationEmail = process.env.NEXT_PUBLIC_EMAIL?.toString()!

  if (result.error) {
    throw Error('Invalid contact form data')
  }
  const { message } = result.data
  const { data, error } = await resend.emails.send({
    from: 'Portfolio Site <onboarding@resend.dev>',
    to: [destinationEmail],
    subject: 'New Bug Report',
    react: BugReportTemplate({ message }),
  })

  if (!data || error) {
    throw Error('Failed to send contact email')
  }

  return { success: true }
}
