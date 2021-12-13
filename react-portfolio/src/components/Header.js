import React from 'react';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import { DiBackbone } from 'react-icons/di';

function Header() {
  return (
    <div className='Header'>
      <Navbar bg="myBlack" variant="dark" stick="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <DiBackbone size="3rem" /> <span>Nick Skinner</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse expand="sm">
          <Nav>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </div>
  );
}

export default Header;
