import { atom } from 'recoil'

import type { IProblem } from '@/types/problem'

export const stepState = atom({ default: 0, key: 'step' })
export const problemsState = atom<IProblem[]>({ default: [], key: 'problems' })
export const problemsNameState = atom({ default: '', key: 'problemsName' })
export const limitState = atom({ default: 0, key: 'limit' })
export const totalState = atom({ default: 0, key: 'total' })
