import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<any | DocumentData | null>({
  key: 'movieState',
  default: null,
})