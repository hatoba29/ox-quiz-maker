import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { Navigate } from 'react-router-dom'

import { problemsState, stepState, totalState } from '@/store/problems'

import ViewProblem from '@/components/Solve/ViewProblem'
import ProblemsTab from '@/components/Solve/ProblemsTab'
import OXButtons from '@/components/Solve/OXButtons'
import LimitBar from '@/components/Solve/LimitBar'

const Solve = (): JSX.Element => {
  const problems = useRecoilValue(problemsState)
  const step = useRecoilValue(stepState)
  const total = useRecoilValue(totalState)

  if (problems.length === 0) {
    window.alert('선택된 문제가 없습니다.')
    return <Navigate to='/' />
  }
  if (step >= total) return <Navigate to='/result' />
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
