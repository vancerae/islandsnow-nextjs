'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  Facebook,
  TwitterX,
  Pinterest,
  Instagram,
  HouseFill,
  Search,
  PersonFill,
  CartFill,
} from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg" className="py-1">
    <Container>
      <Nav className="me-auto">
        <Nav.Link aria-label="Facebook"><Facebook /></Nav.Link>
        <Nav.Link aria-label="Twitter"><TwitterX /></Nav.Link>
        <Nav.Link aria-label="Pinterest"><Pinterest /></Nav.Link>
        <Nav.Link aria-label="Instagram"><Instagram /></Nav.Link>
      </Nav>

      <Nav className="justify-content-end">
        <Nav.Link aria-label="Home"><HouseFill /></Nav.Link>
        <Nav.Link aria-label="Search"><Search /></Nav.Link>
        <Nav.Link aria-label="Account"><PersonFill /></Nav.Link>

        <NavDropdown title={<CartFill />} align="end" id="cart-dropdown">
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;