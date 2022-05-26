import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import type { MouseEvent } from 'react'

import { useAppSelector } from '@/store'
import { selectIndex, setResult } from '@/store/solveSlice'
import { moveStep } from '@/store/problemsSlice'

const OXButtons = (): JSX.Element => {
  const dispatch = useDispatch()
  const state = useAppSelector((state) => state)
  const { problems } = state.problems
  const index = selectIndex(state)

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>): void => {
    const value = Number(e.currentTarget.value)
    const { answer } = problems[index]

    if (answer === value) {
      dispatch(setResult(true))
    } else {
      dispatch(setResult(false))
    }

    dispatch(moveStep(1))
  }

  return (
    <Wrapper>
      <Btn value={1} onClick={checkAnswer}>
        O
      </Btn>
      <Btn value={0} onClick={checkAnswer}>
        X
      </Btn>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  width: 100%;
  height: 64px;
  background-color: #afdaad;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Btn = styled.button`
  width: 40%;
  height: 48px;
  border: none;
  background-color: #f3df5d;

  cursor: pointer;
`

export default OXButtons
