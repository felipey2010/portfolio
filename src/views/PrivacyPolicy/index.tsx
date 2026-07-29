'use client'
import { PrivacyPolicyList } from '@/data/PrivacyPolicyList'
import { useLanguage } from '@/components/providers/LanguageProvider'

function PrivacyPolicyView() {
  const { language } = useLanguage()

  return (
    <div className="w-full mx-auto p-4 overflow-y-auto scroll-smooth">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {
          PrivacyPolicyList.title[
            language as keyof typeof PrivacyPolicyList.title
          ]
        }
      </h1>
      <p className="text-sm text-muted-foreground text-center mb-6">
        {
          PrivacyPolicyList.lastUpdated[
            language as keyof typeof PrivacyPolicyList.lastUpdated
          ]
        }
      </p>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.about[
              language as keyof typeof PrivacyPolicyList.about
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.aboutDescription[
              language as keyof typeof PrivacyPolicyList.aboutDescription
            ]
          }
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.cookies.title[
              language as keyof typeof PrivacyPolicyList.cookies.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.cookies.description[
              language as keyof typeof PrivacyPolicyList.cookies.description
            ]
          }
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          {PrivacyPolicyList.cookies.items.map((item, index) => (
            <li key={`cookie-${index}`} className="text-sm">
              <strong>{item.label[language as keyof typeof item.label]}</strong>{' '}
              {item.description[language as keyof typeof item.description]}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.collections.title[
              language as keyof typeof PrivacyPolicyList.collections.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.collections.description[
              language as keyof typeof PrivacyPolicyList.collections.description
            ]
          }
        </p>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.rights.title[
              language as keyof typeof PrivacyPolicyList.rights.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.rights.description[
              language as keyof typeof PrivacyPolicyList.rights.description
            ]
          }
        </p>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.contact.title[
              language as keyof typeof PrivacyPolicyList.contact.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.contact.description[
              language as keyof typeof PrivacyPolicyList.contact.description
            ]
          }
        </p>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.thirdPartyServices.title[
              language as keyof typeof PrivacyPolicyList.thirdPartyServices.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.thirdPartyServices.description[
              language as keyof typeof PrivacyPolicyList.thirdPartyServices.description
            ]
          }
        </p>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.retention.title[
              language as keyof typeof PrivacyPolicyList.retention.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.retention.description[
              language as keyof typeof PrivacyPolicyList.retention.description
            ]
          }
        </p>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.security.title[
              language as keyof typeof PrivacyPolicyList.security.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.security.description[
              language as keyof typeof PrivacyPolicyList.security.description
            ]
          }
        </p>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.children.title[
              language as keyof typeof PrivacyPolicyList.children.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.children.description[
              language as keyof typeof PrivacyPolicyList.children.description
            ]
          }
        </p>
      </div>

      <div className="mb-6 text-justify">
        <h2 className="text-base font-semibold mb-2">
          {
            PrivacyPolicyList.changeAlert.title[
              language as keyof typeof PrivacyPolicyList.changeAlert.title
            ]
          }
        </h2>
        <p className="text-sm">
          {
            PrivacyPolicyList.changeAlert.description[
              language as keyof typeof PrivacyPolicyList.changeAlert.description
            ]
          }
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicyView
