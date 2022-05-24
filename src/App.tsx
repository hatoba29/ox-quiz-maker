import styled from 'styled-components'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import Solve from '@/pages/Solve'
import Result from '@/pages/Result'
import Review from '@/pages/Review'

const App = (): JSX.Element => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solve' element={<Solve />} />
        <Route path='/result' element={<Result />} />
        <Route path='/review' element={<Review />} />
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
