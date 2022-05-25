import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'

import { resultState, timeState } from '@/store/solve'
import { totalState } from '@/store/problems'
import humanizeTime from '@/utils/humanizeTime'

import { Wrapper as BtnWrapper } from '@/components/Solve/OXButtons'

const Result = (): JSX.Element => {
  const result = useRecoilValue(resultState)
  const total = useRecoilValue(totalState)
  const time = useRecoilValue(timeState)
  const correct = result.filter((r) => r).length
  const rate = Math.round((correct / total) * 1000) / 10

  const humanizedTime = humanizeTime(time)

  return (
    <Wrapper>
      <Title>결과</Title>
      <StatWrapper>
        <Stat>문제 수: {total}</Stat>
        <Stat>
          정답/오답: {correct} / {total - correct}
        </Stat>
        <Stat>정확도: {rate}%</Stat>
        <Stat>소요 시간: {humanizedTime}</Stat>
      </StatWrapper>
      <BtnWrapper>
        <LinkBtn to='/'>홈으로</LinkBtn>
        <LinkBtn to='/review'>복습하기</LinkBtn>
      </BtnWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
`

const StatWrapper = styled.ul`
  margin: 0;
  padding: 0;
  background-color: #dcf3ff;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
`

const Stat = styled.li`
  list-style: none;

  margin: 8px 0;
  font-size: 20px;
`

export const LinkBtn = styled(Link)`
  width: 40%;
  height: 48px;
  border: none;
  background-color: #f3df5d;

  cursor: pointer;

  display: grid;
  place-content: center;
`

export default Result
