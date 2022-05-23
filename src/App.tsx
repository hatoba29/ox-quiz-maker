import styled from 'styled-components'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import Solve from '@/pages/Solve'

const App = (): JSX.Element => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solve' element={<Solve />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
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
