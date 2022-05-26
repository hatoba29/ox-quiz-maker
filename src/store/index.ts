import {
  combineReducers,
  configureStore,
  createAction,
  PayloadAction
} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import type { CombinedState } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'

import problemsSlice, { ProblemsState } from './problemsSlice'
import solveSlice, { SolveState } from './solveSlice'

interface State {
  problems: ProblemsState
  solve: SolveState
}
type RootReducer = (
  state: CombinedState<State> | undefined,
  action: PayloadAction
) => CombinedState<State>

const combinedReducer = combineReducers({
  problems: problemsSlice,
  solve: solveSlice
})

const rootReducer: RootReducer = (state, action) => {
  if (action.type === 'reset') state = undefined
  return combinedReducer(state, action)
}

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export const resetStore = createAction('reset')
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
