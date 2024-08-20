import { BsLock, BsPerson, BsShield } from 'react-icons/bs'
import { PiBugBeetle } from 'react-icons/pi'

export const ProfileList = {
  title: {
    en: 'Profile',
    pt: 'Perfil',
  },
  profile: [
    {
      name: {
        en: 'Profile',
        pt: 'Perfil',
      },
      path: '/about/profile',
      icon: BsPerson,
    },
    {
      name: {
        en: 'Admin',
        pt: 'Admin',
      },
      path: '/admin',
      icon: BsLock,
    },
    /**
     * ToDo: Make this a modal
     */
  ],
}

export const ReportBugList = {
  name: {
    en: 'Report bug',
    pt: 'Reportar bug',
  },
  icon: PiBugBeetle,
  description: {
    en: 'Report a bug to help us improve the website.',
    pt: 'Reporte um bug para nos ajudar a melhorar o site.',
  },
  button: {
    cancel: {
      en: 'Cancel',
      pt: 'Cancelar',
    },
    send: {
      en: 'Send',
      pt: 'Enviar',
    },
  },
  textArea: {
    en: 'Describe the bug',
    pt: 'Descreva o bug',
  },
  submission: {
    success: {
      title: {
        en: 'Bug report submitted',
        pt: 'Relatório de bug enviado',
      },
      description: {
        en: 'Thank you for your report!',
        pt: 'Obrigado por reportar o bug!',
      },
    },
  },
}
