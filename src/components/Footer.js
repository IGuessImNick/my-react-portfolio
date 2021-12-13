import React from 'react';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import { DiBackbone } from 'react-icons/di';

function Footer() {
  return (
    <div className='Footer'>
      <Navbar bg="myBlack" variant="dark" stick="bottom">
        <Navbar.Brand>
          <DiBackbone size="3rem" /> <span>Nick Skinner</span>
        </Navbar.Brand>
      </Navbar>

    </div>
  );
}

export default Footer;