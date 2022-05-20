import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { stepState, limitState } from '@/store'

import { Subtitle, BtnWrapper, Btn } from './index'

const SetLimit = (): JSX.Element => {
  const [limit, setLimit] = useRecoilState(limitState)
  const [, setStep] = useRecoilState(stepState)

  const handleLimitInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.currentTarget.value)
    setLimit(value > 0 ? value : 0)
  }

  const isDisabled = (): string => (limit <= 0 ? 'disabled' : '')

  const goPrev = (): void => setStep((oldStep) => oldStep - 1)

  const goNext = (): void => {
    if (limit === 0) return
    setStep((oldStep) => oldStep + 1)
  }

  return (
    <>
      <Subtitle>한 문제 당 제한시간을 정해주세요.</Subtitle>
      <InputWrapper>
        <LimitInput
          type='number'
          defaultValue={limit > 0 ? limit : ''}
          onInput={handleLimitInput}
        />
        초
      </InputWrapper>
      <BtnWrapper>
        <Btn onClick={goPrev}>이전</Btn>
        <Btn className={isDisabled()} onClick={goNext}>
          다음
        </Btn>
      </BtnWrapper>
    </>
  )
}

const InputWrapper = styled.section`
  display: flex;
  align-items: center;
`

const LimitInput = styled.input`
  width: 48px;
  height: 32px;
  margin-right: 5px;
  border: none;
  border-bottom: 2px solid black;

  font-size: 26px;
  text-align: center;
  line-height: 32px;
`

export default SetLimit
