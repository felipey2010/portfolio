'use client'
import { APP_ROUTES } from '@/data/Routes'
import Link from 'next/link'
import { CookieConsent as ReactCookieConsent } from 'react-cookie-consent'
import { useLanguage } from './providers/LanguageProvider'

const CookieConsentData = {
  message: {
    en: 'This website uses cookies to ensure you get the best experience. By continuing to browse the site, you agree to our use of cookies. For more information, please see our ',
    pt: 'Este site utiliza cookies para garantir a melhor experiência possível. Ao continuar a navegar no site, você concorda com o uso de cookies. Para mais informações, consulte nossa ',
  },
  buttonText: {
    en: 'Close and continue',
    pt: 'Fechar e continuar',
  },
  privacy_policy: {
    en: 'privacy policy',
    pt: 'política de privacidade',
  }
}

function CookieConsent() {
  const { language } = useLanguage()

  return (
    <ReactCookieConsent
      location="bottom"
      cookieName="dev-p-cookie-consent"
      buttonText={CookieConsentData.buttonText[language as keyof typeof CookieConsentData.buttonText]}
      buttonStyle={{
        color: 'white',
        fontSize: '12px',
        borderRadius: '4px',
        background: '#fdbb00',
      }}
      acceptOnScroll={true}
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#070a23',
        fontSize: '13px',
      }}
    >
      {CookieConsentData.message[language as keyof typeof CookieConsentData.message]}
      <Link
        href={APP_ROUTES.PRIVACY_POLICY}
        className="link italic hover:underline hover:text-destructive"
      >
        {CookieConsentData.privacy_policy[language as keyof typeof CookieConsentData.privacy_policy]}
      </Link>
      .
    </ReactCookieConsent>
  )
}

export default CookieConsent
