import React from 'react'
import { useState } from 'react'

const NumeroQuina = () => {
  const [quinaSorteado, setQuinaSorteado] = useState()

  const [listaSorteioQuina, setlistaSorteioQuina] = useState([])

  function sortearQuina(){
    if(listaSorteioQuina.length < 5){
      let numeroSorteado = Math.floor(Math.random() * 80) + 1
      setQuinaSorteado(numeroSorteado)
      setlistaSorteioQuina([...listaSorteioQuina, numeroSorteado])
    } else {
      alert("já temos 5 numeros sorteados")
    }
  }

  return (
    <div>
      <h1>Sorteador da quina em React</h1>
      <button onClick={sortearQuina}>Sortear Numero</button>
      <h1>Ultimo numero sorteado: {quinaSorteado}</h1>
      <h1>sorteados: {listaSorteioQuina.join(" - ")}</h1>
    </div>
  )
}

export default NumeroQuina