'use client'
import { APP_ROUTES } from '@/data/Routes'
import Link from 'next/link'
import { CookieConsent as ReactCookieConsent } from 'react-cookie-consent'

function CookieConsent() {
  return (
    <ReactCookieConsent
      location="bottom"
      cookieName="dev-p-cookie-consent"
      buttonText="Fechar e continuar"
      buttonStyle={{
        color: 'white',
        fontSize: '13px',
        borderRadius: '4px',
        background: '#0958d9',
      }}
      acceptOnScroll={true}
      style={{ display: 'flex', alignItems: 'center', background: '#2B373B' }}
    >
      Este site utiliza cookies para garantir a melhor experiência possível. Ao
      continuar a navegar no site, você concorda com o uso de cookies. Para mais
      informações, consulte nossa{' '}
      <Link
        href={APP_ROUTES.PRIVACY_POLICY}
        className="link italic hover:underline hover:text-destructive"
      >
        política de privacidade
      </Link>
      .
    </ReactCookieConsent>
  )
}

export default CookieConsent
