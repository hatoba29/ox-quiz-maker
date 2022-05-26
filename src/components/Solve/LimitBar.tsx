import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '@/store'
import { setResult } from '@/store/solveSlice'
import { moveStep } from '@/store/problemsSlice'

const LimitBar = (): JSX.Element => {
  const dispatch = useDispatch()
  const { step, limit } = useAppSelector((state) => state.problems)
  let timerID: number

  useEffect(() => {
    timerID = setTimeout(() => {
      dispatch(moveStep(1))
      dispatch(setResult(false))
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
