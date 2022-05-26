import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { resetStore, useAppSelector } from '@/store'

import Card from '@/components/Review/Card'
import { Wrapper as BtnWrapper } from '@/components/Solve/OXButtons'
import { LinkBtn } from './Result'

const Review = (): JSX.Element => {
  const dispatch = useDispatch()
  const { result, pickedProblems } = useAppSelector((state) => state.solve)
  const wrong = pickedProblems.filter((_, i) => !result[i])
  const [hidden, setHidden] = useState(false)

  const updateOption = (): void => setHidden((h) => !h)

  const reset = (): void => {
    dispatch(resetStore())
  }

  return (
    <Wrapper>
      <Title>오답 노트</Title>
      <Option>
        <Check id='check' type='checkbox' onChange={updateOption} />
        <CheckLabel htmlFor='check' data-hidden={hidden} />
        <OptionText htmlFor='check'>정답 감추기</OptionText>
      </Option>
      <CardWrapper>
        {wrong.map((w, i) => (
          <Card key={i} i={w} hidden={hidden} />
        ))}
      </CardWrapper>
      <BtnWrapper>
        <LinkBtn to='/' onClick={reset}>
          홈으로
        </LinkBtn>
        <LinkBtn to='/result'>결과보기</LinkBtn>
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

const Option = styled.section`
  display: flex;
  align-items: center;
`

const Check = styled.input`
  display: none;
`

const CheckLabel = styled.label`
  width: 16px;
  height: 16px;
  margin-right: 6px;
  border: 2px solid black;

  cursor: pointer;

  &[data-hidden='true'] {
    background-color: black;
  }
`

const OptionText = styled.label`
  margin-top: -2px;
  font-size: 14px;

  cursor: pointer;
`

const CardWrapper = styled.section`
  flex-grow: 1;
  overflow: scroll;
`

export default Review
