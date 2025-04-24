import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/contato'
import Noticias from './pages/Noticias'
import Dpo from './pages/Dpo'
import Faculdade from './pages/Faculdade'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicial/>}/>
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/Noticias' element={<Noticias/>}/>
        <Route path='/Dpo' element={<Dpo/>}/>
        <Route path='/a-faculdade' element={<Faculdade/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App