import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Navbar from './components/CustomNavbar'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import VizualizaNoticia from './pages/VizualizaNoticia'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className=''>
        <Routes>
          <Route path= "/" element={<Inicial />} />
          <Route path= "/a-faculdade" element={<Faculdade />} />
          <Route path= "/DPO-LGPD" element={<DpoLgpd />} />
          <Route path= "/noticias" element={<Noticias />} />
          <Route path= "/visualiza-noticia/:id" element={<VizualizaNoticia />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App