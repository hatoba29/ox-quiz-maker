import styled from 'styled-components'
import { useRecoilValue, useRecoilState } from 'recoil'
import type { MouseEvent } from 'react'

import { problemsState, stepState } from '@/store/problems'
import { resultState, indexState } from '@/store/solve'

const OXButtons = (): JSX.Element => {
  const problems = useRecoilValue(problemsState)
  const index = useRecoilValue(indexState)
  const [, setStep] = useRecoilState(stepState)
  const [, setResult] = useRecoilState(resultState)

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>): void => {
    const value = Number(e.currentTarget.value)
    const { answer } = problems[index]

    if (answer === value) {
      setResult((oldResult) => [...oldResult, true])
    } else {
      setResult((oldResult) => [...oldResult, false])
    }

    setStep((oldStep) => oldStep + 1)
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

const Wrapper = styled.section`
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
