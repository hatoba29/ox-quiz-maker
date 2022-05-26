import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { IProblem } from '@/types/problem'

export interface ProblemsState {
  step: number
  problems: IProblem[]
  problemsName: string
  limit: number
  total: number
}

const initialState: ProblemsState = {
  step: 0,
  problems: [],
  problemsName: '',
  limit: 0,
  total: 0
}

const problemsSlice = createSlice({
  name: 'problems',
  initialState,
  reducers: {
    reset: () => initialState,
    moveStep: (state, action: PayloadAction<number>) => {
      state.step += action.payload
    },
    resetStep: (state) => {
      state.step = 0
    },
    setProblems: (state, action: PayloadAction<IProblem[]>) => {
      state.problems = action.payload
    },
    setProblemsName: (state, action: PayloadAction<string>) => {
      state.problemsName = action.payload
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload
    }
  }
})

export const {
  reset,
  setLimit,
  setProblems,
  setProblemsName,
  moveStep,
  resetStep,
  setTotal
} = problemsSlice.actions

export default problemsSlice.reducer
