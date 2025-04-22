import { useState } from 'react'
import './App.css'
import ListaDeAlunos from './components/ListaDeAlunos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ListaDeAlunos/>
  )
}

export default App
