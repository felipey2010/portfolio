import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
})

export const BugReportSchema = z.object({
  message: z.string().min(2).max(500),
  contact: z.string().max(100).optional().or(z.literal('')),
})

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>
export type BugReportSchemaType = z.infer<typeof BugReportSchema>
