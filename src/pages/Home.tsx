import styled from 'styled-components'

import HomeSettings from '@/components/HomeSettings'

const Home = (): JSX.Element => {
  return (
    <>
      <Title>OX 퀴즈 만들기</Title>
      <HomeSettings />
    </>
  )
}

const Title = styled.h1`
  margin-top: 96px;
  text-align: center;
`

export default Home
