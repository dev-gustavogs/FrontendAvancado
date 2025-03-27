import React from 'react'
import Aluno from './components/Aluno.jsx'
import Aluno2 from './components/Aluno2.jsx'
import EstaComSono from './components/EstaComSono.jsx'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact.jsx'

const App = () => {
  return (
    <div>
      {
        [ {nome:"Gustavo", email:"gustavo@gmail.com", curso:"sistema para internet", media: 5.5 },
          {nome:"Maria", email:"maria@gmail.com", curso:"arquitetura", media: 7.2},
          {nome:"João", email:"João@gmail.com", curso:"sistema para internet", media: 6.9}
        ].map((aluno) => 
          <Aluno2 nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        )
      }
    </div>
  )
}

export default App