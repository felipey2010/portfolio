import ContactForm from '@/components/form/ContactForm'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const ContactList = {
  title: {
    en: 'Contact Me',
    pt: 'Contate-me',
  },
  subtitle: {
    en: 'Get in Touch',
    pt: 'Entre em Contato',
  },
  description: {
    en: 'Feel free to reach out through any of the following channels or use the contact form for potential collaborations or inquiries.',
    pt: 'Sinta-se à vontade para entrar em contato por qualquer um dos canais a seguir ou usar o formulário de contato para possíveis colaborações ou consultas.',
  },
  send_message: {
    en: 'Send message',
    pt: 'Enviar mensagem',
  },
  contacts: [
    {
      name: 'Email',
      value: 'mailto:pakpanyi@gmail.com',
      type: 'text',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      value: 'https://www.linkedin.com/in/philip-mahama-akpanyi',
      type: 'link',
      icon: Linkedin,
    },
    {
      name: 'Github',
      value: 'https://github.com/felipey2010',
      type: 'link',
      icon: Github,
    },
  ],
}

function Contact({ selectedLanguage = 'en' }: { selectedLanguage: string }) {
  return (
    <div className="h-full flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {ContactList.title[selectedLanguage as keyof typeof ContactList.title]}
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">
            {
              ContactList.subtitle[
                selectedLanguage as keyof typeof ContactList.subtitle
              ]
            }
          </h2>
          <p className="mb-6 text-muted-foreground text-sm">
            {
              ContactList.description[
                selectedLanguage as keyof typeof ContactList.description
              ]
            }
          </p>

          <div className="space-y-3 flex flex-col items-center md:items-start">
            {ContactList.contacts.map((contact, index) => (
              <Link
                href={contact.value}
                target="_blank"
                key={`contact-${index}`}
                className="w-fit flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:underline transition-all duration-100 ease-in-out group"
              >
                <contact.icon className="w-5 h-5 transition-all duration-200 ease-in-out" />
                <p className="text-sm">{contact.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
            {
              ContactList.send_message[
                selectedLanguage as keyof typeof ContactList.send_message
              ]
            }
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
