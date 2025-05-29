import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Container } from 'react-bootstrap'

const VizualizaNoticia = () => {
  const { id } = useParams()
  const [noticia, setNoticia] = useState({})
  const URLBASE = "http://localhost:3000"

  useEffect(() => {
    axios.get(`${URLBASE}/noticias/${id}`)
    .then(response => setNoticia(response.data))
    .catch(error => console.error("errp em obter a noticia: ", error))
  }, [id])

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Body>
           <Card.Img
              variant="top"
              src={`/public/${noticia.imagem}`}
              alt= "img da noticia"
              style={{ height: "350px", objectFit: "cover" }}
          />
          <Card.Title>{noticia.titulo}</Card.Title>
          <Card.Text>{noticia.texto}</Card.Text>
          <Card.Img 
          
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default VizualizaNoticia