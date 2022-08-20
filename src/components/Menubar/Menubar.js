import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">SHOHAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='text-white'>HOME</Nav.Link>
            <Nav.Link as={Link} to="/course" className='text-white'>COURSE</Nav.Link>
            <Nav.Link as={Link} to="/login" className='text-white'>LOGIN</Nav.Link>

            <NavDropdown className='text-white' title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Name</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menubar;