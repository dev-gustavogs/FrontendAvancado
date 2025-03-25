import React from 'react'

const RenderizaBackOuFront = () => {
  function EscolhaRenderizacao(QualRenderizar){
    if (QualRenderizar === "Java"){
      return <h1>Backend</h1>
    }if (QualRenderizar === "React"){
      return <b>Frontend</b> 
    }
    if (QualRenderizar === "Amazon")
      return <i>Nuvem</i>
  }
  return (
    <div>
      {EscolhaRenderizacao("React")}
      {EscolhaRenderizacao("Java")}
      {EscolhaRenderizacao("Amazon")}
    </div>
  )
}

export default RenderizaBackOuFront