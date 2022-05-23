import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import { problemsState } from '@/store/problems'
import { indexState } from '@/store/solve'

const ViewProblem = (): JSX.Element => {
  const problems = useRecoilValue(problemsState)
  const index = useRecoilValue(indexState)

  return <Problem>{problems[index].problem}</Problem>
}

const Problem = styled.article`
  padding: 16px;
  background-color: #dcf3ff;
  flex-grow: 1;
`

export default ViewProblem
