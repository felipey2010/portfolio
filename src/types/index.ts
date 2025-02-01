import { IconType } from 'react-icons'

export type MenuListType = {
  name: string
  path: string
  icon: IconType
}[]

export type LanguageType = {
  en: string
  pt: string
}

export type CategoryItemType = {
  id: string
  name: LanguageType
  description: LanguageType
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
}

export type CategoryType = {
  id: string
  name: LanguageType
  description: LanguageType
  children: CategoryItemType[]
}
