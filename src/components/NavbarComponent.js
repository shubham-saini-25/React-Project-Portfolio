import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar fixed='top' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">SHUBHAM SAINI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='h4'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
