import styled from 'styled-components'
import { useRecoilValue, useRecoilState } from 'recoil'

import { stepState, problemsState, totalState } from '@/store'
import { ChangeEvent } from 'react'

import { Subtitle, BtnWrapper, Btn } from './index'

const SetTotal = (): JSX.Element => {
  const problems = useRecoilValue(problemsState)
  const [total, setTotal] = useRecoilState(totalState)
  const [, setStep] = useRecoilState(stepState)

  const handleTotalInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.currentTarget.value)
    setTotal(value > 0 && value <= problems.length ? value : 0)
  }

  const isDisabled = (): string => {
    console.log('total', total)
    return total <= 0 ? 'disabled' : ''
  }

  const goPrev = (): void => setStep((oldStep) => oldStep - 1)

  return (
    <>
      <Subtitle>출제될 문제 수를 정해주세요.</Subtitle>
      <InputWrapper>
        <TotalInput
          type='number'
          defaultValue={total > 0 ? total : ''}
          onInput={handleTotalInput}
        />
        문제<MaxLimit>(최대 {problems.length}문제)</MaxLimit>
      </InputWrapper>
      <BtnWrapper>
        <Btn onClick={goPrev}>이전</Btn>
        <Btn className={isDisabled()}>문제 풀기</Btn>
      </BtnWrapper>
    </>
  )
}

const InputWrapper = styled.section`
  display: flex;
  align-items: center;
`

const TotalInput = styled.input`
  width: 48px;
  height: 32px;
  margin-right: 5px;
  border: none;
  border-bottom: 2px solid black;

  font-size: 26px;
  text-align: center;
  line-height: 32px;
`

const MaxLimit = styled.span`
  margin-left: 8px;
  font-size: 12px;
`

export default SetTotal
