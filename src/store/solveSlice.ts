import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from './index'

export interface SolveState {
  pickedProblems: number[]
  result: boolean[]
  time: number
}

const initialState: SolveState = {
  pickedProblems: [],
  result: [],
  time: 0
}

const solveSlice = createSlice({
  name: 'solve',
  initialState,
  reducers: {
    reset: () => initialState,
    setPickedProblems: (state, action: PayloadAction<number[]>) => {
      state.pickedProblems = action.payload
    },
    setResult: (state, action: PayloadAction<boolean>) => {
      state.result.push(action.payload)
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
    }
  }
})

const selectPickedProblems = (state: RootState): number[] =>
  state.solve.pickedProblems
const selectStep = (state: RootState): number => state.problems.step
export const selectIndex = createSelector(
  selectPickedProblems,
  selectStep,
  (p, s) => p[s]
)

export const { reset, setPickedProblems, setResult, setTime } =
  solveSlice.actions

export default solveSlice.reducer
