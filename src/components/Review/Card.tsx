import styled from 'styled-components'

import { useAppSelector } from '@/store'

interface ICard {
  i: number
  hidden: boolean
}

const Card = (props: ICard): JSX.Element => {
  const { problems } = useAppSelector((state) => state.problems)
  const { i, hidden } = props
  const answer = problems[i].answer === 1 ? 'O' : 'X'
  const answerClass = hidden ? 'hidden' : ''

  return (
    <Wrapper>
      <Problem>{problems[i].problem}</Problem>
      <Answer className={answerClass}>정답: {answer}</Answer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
  margin: 12px 0;
  border: 1px solid black;
  padding: 8px;
`

const Problem = styled.p``

const Answer = styled.p`
  margin-right: 8px;

  text-align: right;
  font-weight: bold;

  &.hidden {
    visibility: hidden;
  }
`

export default Card
