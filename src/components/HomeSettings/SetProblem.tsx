import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { problemsState, problemsNameState, stepState } from '@/store/problems'
import isValidProblems from '@/utils/isValidProblems'
import getFileName from '@/utils/getFileName'

import { Subtitle, Btn, BtnWrapper } from './index'

const SetProblem = (): JSX.Element => {
  const [, setStep] = useRecoilState(stepState)
  const [problems, setProblems] = useRecoilState(problemsState)
  const [problemsName, setProblemsName] = useRecoilState(problemsNameState)

  const registerProblems = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (e.target.files === null) return
    const file = e.target.files[0]
    const text = await file.text()

    if (isValidProblems(text)) {
      setProblems(JSON.parse(text))
      setProblemsName(getFileName(file.name))
    } else {
      window.alert('올바른 문제 파일이 아닙니다. 다른 파일을 선택해주세요.')
    }
  }

  const isEmpty = (): string => (problemsName === '' ? 'empty' : '')

  const isDisabled = (): string => (problems.length === 0 ? 'disabled' : '')

  const goNext = (): void => {
    if (problems.length === 0) return
    setStep((oldStep) => oldStep + 1)
  }

  return (
    <>
      <Subtitle>문제를 선택해주세요.</Subtitle>
      <FileInput
        id='file'
        type='file'
        accept='.json'
        onChange={registerProblems}
      />
      <FileLabel htmlFor='file'>문제 선택하기</FileLabel>
      <FileName className={isEmpty()}>문제명: {problemsName}</FileName>
      <BtnWrapper>
        <div />
        <Btn className={isDisabled()} onClick={goNext}>
          다음
        </Btn>
      </BtnWrapper>
    </>
  )
}

const FileInput = styled.input`
  display: none;
`

const FileLabel = styled.label`
  cursor: pointer;

  width: 50%;
  height: 42px;
  border-radius: 21px;
  background-color: #d3eee9;

  display: grid;
  place-items: center;

  text-align: center;
  font-weight: bold;
`

const FileName = styled.p`
  margin: 16px 0;

  &.empty {
    color: transparent;
  }
`

export default SetProblem
