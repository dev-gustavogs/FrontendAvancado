import React from 'react'
import { useState } from 'react'

const MegaSena = () => {
  const [sorteado, setSorteado] = useState()
  
  const [listaDeSorteados, setlistaDeSorteados] = useState([])

  function sortearNumero(){
    if (listaDeSorteados.length < 6){
      let numeroSorteado = Math.floor(Math.random() * 60) + 1
      setSorteado(numeroSorteado)
      setlistaDeSorteados([...listaDeSorteados, numeroSorteado])
    } else {
      alert("já temos 6 numeros sorteados")
    }
  }

  
  return (
    <div>
      <h1>Sorteador da Mega em React</h1>
      <button onClick={sortearNumero}>Sortear Numero</button>
      <h1>Ultimo numero sorteado: {sorteado}</h1>
      <h1>sorteados: {listaDeSorteados.join(" - ")}</h1>
    </div>
  )
}

export default MegaSena