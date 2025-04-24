import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to ='/'>Inicial</Link>
      <Link to='/Contato'>Contato</Link>
      <Link to='/a-faculdade'>Faculdade</Link>
      <Link to='/Dpo'>DPO</Link>
      <Link to='/Noticias'>Noticias</Link>
    </nav>
  )
}

export default Navbar