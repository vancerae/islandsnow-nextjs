'use client';

import { Container } from 'react-bootstrap';
import { Facebook, Instagram, TwitterX } from 'react-bootstrap-icons';

const FooterMenu = () => (
  <footer className="bg-dark text-light mt-4 py-4">
    <Container>
      <div className="row text-center text-md-start">
        <div className="col-12 col-md-4 mb-3">
          <h6 className="text-uppercase">Navigation</h6>
          <div><a href="#" className="text-light text-decoration-none">About Us</a></div>
          <div><a href="#" className="text-light text-decoration-none">Contact</a></div>
          <div><a href="#" className="text-light text-decoration-none">Store Locator</a></div>
        </div>

        <div className="col-12 col-md-4 mb-3">
          <h6 className="text-uppercase">Customer Service</h6>
          <div><a href="#" className="text-light text-decoration-none">Shipping</a></div>
          <div><a href="#" className="text-light text-decoration-none">Returns</a></div>
          <div><a href="#" className="text-light text-decoration-none">FAQ</a></div>
        </div>

        <div className="col-12 col-md-4 mb-3">
          <h6 className="text-uppercase">Follow</h6>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <a href="#" className="text-light" aria-label="Facebook"><Facebook /></a>
            <a href="#" className="text-light" aria-label="Instagram"><Instagram /></a>
            <a href="#" className="text-light" aria-label="Twitter"><TwitterX /></a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default FooterMenu;
