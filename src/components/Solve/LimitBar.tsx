import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect } from 'react'

import { stepState, limitState } from '@/store/problems'
import { resultState } from '@/store/solve'

const LimitBar = (): JSX.Element => {
  const [step, setStep] = useRecoilState(stepState)
  const [, setResult] = useRecoilState(resultState)
  const limit = useRecoilValue(limitState)
  let timerID: number

  useEffect(() => {
    timerID = setTimeout(() => {
      setStep((oldStep) => oldStep + 1)
      setResult((oldResult) => [...oldResult, false])
    }, limit * 1000)
    return () => clearTimeout(timerID)
  }, [step])

  return (
    <Wrapper>
      <Bar key={step} limit={limit} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 16px;
  background-color: #bccbdc;

  overflow: hidden;
`

const getLimit = (props: { limit: number }): number => props.limit
const Bar = styled.div<{ limit: number }>`
  width: 100%;
  height: 100%;
  background-color: #4e2897;

  animation: decrease ${getLimit}s linear forwards;
  @keyframes decrease {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`

export default LimitBar
