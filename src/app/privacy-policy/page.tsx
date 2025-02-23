import PrivacyPolicyView from '@/views/PrivacyPolicy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for this platform',
  keywords: 'privacy policy, privacy, policy',
}

function PrivacyPolicy() {
  return <PrivacyPolicyView />
}

export default PrivacyPolicy
