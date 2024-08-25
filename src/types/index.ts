import { IconType } from 'react-icons'

export type MenuListType = {
  name: string
  path: string
  icon: IconType
}[]

export type CategoryItemType = {
  id: string
  name: {
    en: string
    pt: string
  }
  description: {
    en: string
    pt: string
  }
  image: string
  tags: never[]
  demoLink: string
  githubLink: string
}

export type CategoryType = {
  id: string
  name: {
    en: string
    pt: string
  }
  description: {
    en: string
    pt: string
  }
  children: CategoryItemType[]
}
