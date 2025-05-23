import React from 'react'
import { Carousel, Container } from 'react-bootstrap'


const BannerAd = () => {
  return (
    <Container className="my-4 p-0" fluid>
      <Carousel fade interval={5000} controls={true} indicators={true}>
        <Carousel.Item>
          <img className="d-block w-100" src="/banner1.png" alt="vestibular 2025.2" 
          style={{ borderRadius: '8px'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/banner2.png" alt="inova uniesp 2025" 
          style={{ borderRadius: '8px'}} />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default BannerAd