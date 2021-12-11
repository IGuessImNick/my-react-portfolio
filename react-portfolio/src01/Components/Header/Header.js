import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';



function Header() {
    return(
        <Navbar bg="dark" expand="lg" className="fixed-top mb-3">
            <Container>
                <Navbar.Brand href="#home">#</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                    <Nav.Link href="#link">Signup</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;