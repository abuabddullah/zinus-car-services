import './Header.css'
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../../resources/logo-icon/logo.png'

const Header = () => {
    return (

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="30"
                            className="d-none d-md-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#exparts">Exparts</Nav.Link>
                            <NavDropdown title="Features" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/feature/3.1">feature</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/feature/3.2">Another feature</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/feature/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/feature/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
};

export default Header;