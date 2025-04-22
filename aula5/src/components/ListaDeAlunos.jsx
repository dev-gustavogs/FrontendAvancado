import { tr } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

const ListaDeAlunos = () => {

  const [Alunos, setAlunos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/alunos")
      const data = await response.json()
      setAlunos(data)
    }
    fetchData()
  },[])

  return (
    <div>
      <table border="1px">
        <thead>
          <th>matricula:</th>
          <th>nome:</th>
          <th>gmail:</th>
        </thead>
        <tbody>
          {
            Alunos.map((aluno) =>{
              <tr key={aluno.id}>
                <td>key={aluno.id}</td>
                <td>key={aluno.nome}</td>
                <td>key={aluno.gmail}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListaDeAlunos