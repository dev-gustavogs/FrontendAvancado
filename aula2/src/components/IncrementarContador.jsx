import React from 'react'
import { useState } from 'react'

const IncrementarContador = () => {
  const [contador, setContador] = useState(1)

  function IncrementarContador(){
    setContador (contador + 1)
  }

  function DecrementarContador(){
    setContador (contador - 1)
  }
  return (
    <div>
      <h1>Contador com useState</h1>
      <button onClick={IncrementarContador}>incrementar contador</button>
      <br />
      <button onClick={DecrementarContador}>diminui contador</button>
      <h1>O contador está em: {contador} </h1>
    </div>
  )
}

export default IncrementarContador