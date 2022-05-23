import { atom, selector } from 'recoil'

import { stepState } from './problems'

export const pickedProblemsState = atom<number[]>({
  default: [],
  key: 'pickedProblems'
})
export const indexState = selector({
  key: 'index',
  get: ({ get }) => {
    const i = get(stepState)
    const pickedProblems = get(pickedProblemsState)
    return pickedProblems[i]
  }
})
export const resultState = atom<Array<boolean | null>>({
  default: [],
  key: 'result'
})
export const timeState = atom({ default: 0, key: 'time' })
