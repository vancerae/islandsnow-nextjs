'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';

const MiddleMenu = () => (
  <Navbar bg="light" expand="lg" className="py-2">
    <Container className="justify-content-center">
      <Nav className="gap-4">
        <Nav.Link>MEN</Nav.Link>
        <Nav.Link>WOMEN</Nav.Link>
        <Nav.Link>KIDS</Nav.Link>
        <Nav.Link>BRANDS</Nav.Link>
        <Nav.Link>SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MiddleMenu;