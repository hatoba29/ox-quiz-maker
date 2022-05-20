import styled from 'styled-components'
import Home from '@/pages/Home'

const App = (): JSX.Element => {
  return (
    <Container>
      <Home />
    </Container>
  )
}

const Container = styled.main`
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;

  overflow: auto;
`

export default App
