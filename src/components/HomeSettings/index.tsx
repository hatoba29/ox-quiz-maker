import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import { stepState } from '@/store'

import SetProblem from './SetProblem'
import SetLimit from './SetLimit'
import SetTotal from './SetTotal'

const HomeSettings = (): JSX.Element => {
  const pages = [SetProblem, SetLimit, SetTotal]
  const step = useRecoilValue(stepState)
  const CurrentPage = pages[step]

  return (
    <Wrapper>
      <CurrentPage />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Subtitle = styled.h3`
  text-align: center;
`

export const BtnWrapper = styled.section`
  width: 70%;
  height: 120px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  place-content: center;
`

export const Btn = styled.button`
  cursor: pointer;

  width: 120px;
  height: 40px;
  border: none;
  background-color: #4e2897;
  color: white;

  align-self: flex-end;

  &.disabled {
    cursor: default;
    opacity: 40%;
    background-color: #c1b8c8;
  }
`

export default HomeSettings
