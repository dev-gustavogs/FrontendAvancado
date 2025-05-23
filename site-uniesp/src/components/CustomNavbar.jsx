import React, { useState } from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
      <Navbar expand="md" style={{backgroundColor: '#002F6C'}} variant="dark" className="px-3 shadow-sm">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/image.png" alt='Uniesp Logo' width={60} height={60} className='me-2 rounded'/>
          </Navbar.Brand>
          
          {/*Botão hambuger visivel apenas em telas pequenas */}
          
          <Navbar.Toggle onClick={handleShow}/>
            <Navbar.Collapse className="justify-content-end d-none d-md-flex">
              <Nav>
                <Nav.Link as={Link} to="/a-faculdade" className="px-3">A faculdade</Nav.Link>
                <Nav.Link as={Link} to="/DPO-LGPD" className="px-3">DPO LGPD</Nav.Link>
                <Nav.Link as={Link} to="/noticias" className="px-3">Notícias</Nav.Link>
                <Nav.Link as={Link} to="/admin-noticias" className="px-3">Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*menu lateral offcanvas visivel em telas pequenas. ao clicar no botão hambuguer */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {/*cada item de menu fecha o offcanvas ao ser clicado*/}
            <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose}>A faculdade</Nav.Link>
            <Nav.Link as={Link} to="/DPO-LGPD" onClick={handleClose}>DPO LGPD</Nav.Link>
            <Nav.Link as={Link} to="/noticias" onClick={handleClose}>Notícias</Nav.Link>
            <Nav.Link as={Link} to="/admin-noticias" onClick={handleClose}>Admin</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default CustomNavbar