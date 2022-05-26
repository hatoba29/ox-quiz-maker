import styled from 'styled-components'

import { useAppSelector } from '@/store'
import { selectIndex } from '@/store/solveSlice'

const ViewProblem = (): JSX.Element => {
  const state = useAppSelector((state) => state)
  const { problems } = state.problems
  const index = selectIndex(state)

  return <Problem>{problems[index].problem}</Problem>
}

const Problem = styled.article`
  padding: 16px;
  background-color: #dcf3ff;
  flex-grow: 1;
`

export default ViewProblem
