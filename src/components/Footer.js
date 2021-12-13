import React from 'react';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import { DiBackbone } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div className='Footer'>
      <Navbar bg="myBlack" variant="dark" className='fixed-bottom'>
          <Nav.Link href='https://github.com/IGuessImNick' className='justify-content-end'>
            <AiFillGithub size="3rem" />
          </Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/nicholas-skinner-0b717099/' className='justify-content-end'>
          <AiFillLinkedin size="3rem" />
          </Nav.Link>
          <Nav.Link href='https://www.instagram.com/iguessimnick/' className='justify-content-end'>
          <AiFillInstagram size="3rem" />
          </Nav.Link>
      </Navbar>

    </div>
  );
}

export default Footer;