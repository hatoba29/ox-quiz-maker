import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import { stepState, totalState } from '@/store/problems'
import { resultState } from '@/store/solve'

const ProblemsTab = (): JSX.Element => {
  const step = useRecoilValue(stepState)
  const total = useRecoilValue(totalState)
  const result = useRecoilValue(resultState)

  const isCorrect = (i: number): string => {
    if (result[i] === true) return 'correct'
    if (result[i] === false) return 'fail'
    return ''
  }

  const renderTabs = (): JSX.Element[] => {
    return Array(total)
      .fill(0)
      .map((_, i) => (
        <Tab key={i} className={isCorrect(i)}>
          {i + 1}
        </Tab>
      ))
  }

  return (
    <Wrapper>
      <TabContainer i={step}>{renderTabs()}</TabContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 56px;

  overflow: hidden;
`
const getOffset = (props: { i: number }): number => props.i * 36
const TabContainer = styled.ol<{ i: number }>`
  height: 100%;
  margin: 0;
  padding: 0;

  display: flex;

  transition: transform 0.3s;
  transform: translateX(calc(50% - 18px - ${getOffset}px));
`

const Tab = styled.li`
  width: 36px;
  margin-right: -1px;
  list-style: none;
  background-color: #bccbdc;

  display: grid;
  place-items: center;

  color: white;
  font-weight: bold;
  user-select: none;

  &.correct {
    background-color: #6fd890;
  }

  &.fail {
    background-color: #eb6a5c;
  }
`

export default ProblemsTab
