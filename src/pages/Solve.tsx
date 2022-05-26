import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '@/store'
import { resetStep } from '@/store/problemsSlice'
import { setTime } from '@/store/solveSlice'

import ViewProblem from '@/components/Solve/ViewProblem'
import ProblemsTab from '@/components/Solve/ProblemsTab'
import OXButtons from '@/components/Solve/OXButtons'
import LimitBar from '@/components/Solve/LimitBar'

const Solve = (): JSX.Element => {
  const dispatch = useDispatch()
  const { problems, step, total } = useAppSelector((state) => state.problems)
  const [startTime] = useState(new Date())

  useEffect(() => {
    dispatch(resetStep())
    return () => {
      const endTime = new Date()
      dispatch(setTime(endTime.getTime() - startTime.getTime()))
    }
  }, [])

  if (problems.length === 0) {
    window.alert('선택된 문제가 없습니다.')
    return <Navigate to='/' />
  }
  if (step >= total) {
    return <Navigate to='/result' />
  }
  return (
    <Wrapper>
      <ProblemsTab />
      <ViewProblem />
      <LimitBar />
      <OXButtons />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export default Solve
