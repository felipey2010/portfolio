import ContactForm from '@/components/forms/ContactForm'
import SEO from '@/components/SEO'
import { CONTACT_PAGE_INFO, ContactList } from '@/data/AboutPageList'
import { ContactFormText } from '@/data/SystemList'
import Link from 'next/link'

function Contact({ selectedLanguage = 'en' }: { selectedLanguage: string }) {
  return (
    <>
      <SEO
        title={
          CONTACT_PAGE_INFO.title[
            selectedLanguage as keyof typeof CONTACT_PAGE_INFO.title
          ]
        }
        description={
          CONTACT_PAGE_INFO.description[
            selectedLanguage as keyof typeof CONTACT_PAGE_INFO.description
          ]
        }
        keywords={
          CONTACT_PAGE_INFO.keywords[
            selectedLanguage as keyof typeof CONTACT_PAGE_INFO.keywords
          ]
        }
        path="about?tab=contact"
      />
      <div className="h-full flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {
            ContactList.title[
              selectedLanguage as keyof typeof ContactList.title
            ]
          }
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
                  <contact.icon className="w-5 h-5 group-hover:mr-1 transition-all duration-200 ease-in-out" />
                  <p className="text-sm">{contact.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
              {
                ContactFormText.send_message[
                  selectedLanguage as keyof typeof ContactFormText.send_message
                ]
              }
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
