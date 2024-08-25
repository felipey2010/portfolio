import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { faker } from '@faker-js/faker'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRandomNumber = (min: number, max: number) => {
  return faker.number.int({ min: min, max: max })
}
