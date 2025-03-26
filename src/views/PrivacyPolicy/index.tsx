'use client'
import { PrivacyPolicyList } from '@/data/PrivacyPolicyList'
import { useLanguage } from '@/providers/LanguageProvider'

function PrivacyPolicyView() {
  const { language } = useLanguage()

  return (
    <div className="w-full mx-auto p-4 overflow-y-auto scroll-smooth">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {
          PrivacyPolicyList.title[
            language as keyof typeof PrivacyPolicyList.title
          ]
        }
      </h1>

      <section className="mb-4 text-justify">
        <h2 className="text-xl font-semibold mb-2">
          {
            PrivacyPolicyList.about[
              language as keyof typeof PrivacyPolicyList.about
            ]
          }
        </h2>
        <p>
          {
            PrivacyPolicyList.aboutDescription[
              language as keyof typeof PrivacyPolicyList.aboutDescription
            ]
          }
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {
            PrivacyPolicyList.cookies.title[
              language as keyof typeof PrivacyPolicyList.cookies.title
            ]
          }
        </h2>
        <p>
          {
            PrivacyPolicyList.cookies.description[
              language as keyof typeof PrivacyPolicyList.cookies.description
            ]
          }
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          {PrivacyPolicyList.cookies.items.map((item, index) => (
            <li key={`cookie-${index}`}>
              <strong>{item.label[language as keyof typeof item.label]}</strong>{' '}
              {item.description[language as keyof typeof item.description]}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4 text-justify">
        <h2 className="text-xl font-semibold mb-2">
          {
            PrivacyPolicyList.collections.title[
              language as keyof typeof PrivacyPolicyList.collections.title
            ]
          }
        </h2>
        <p>
          {
            PrivacyPolicyList.collections.description[
              language as keyof typeof PrivacyPolicyList.collections.description
            ]
          }
        </p>
      </section>

      <section className="mb-4 text-justify">
        <h2 className="text-xl font-semibold mb-2">
          {
            PrivacyPolicyList.rights.title[
              language as keyof typeof PrivacyPolicyList.rights.title
            ]
          }
        </h2>
        <p>
          {
            PrivacyPolicyList.rights.description[
              language as keyof typeof PrivacyPolicyList.rights.description
            ]
          }
        </p>
      </section>

      <section className="mb-6 text-justify">
        <h2 className="text-xl font-semibold mb-2">
          {
            PrivacyPolicyList.changeAlert.title[
              language as keyof typeof PrivacyPolicyList.changeAlert.title
            ]
          }
        </h2>
        <p>
          {
            PrivacyPolicyList.changeAlert.description[
              language as keyof typeof PrivacyPolicyList.collections.description
            ]
          }
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicyView
