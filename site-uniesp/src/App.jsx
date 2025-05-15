import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Navbar from './components/CustomNavbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className=''>
        <Routes>
          <Route path= "/" element={<Inicial />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App