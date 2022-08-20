import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth'

const Menubar = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">SHOHAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='text-white'>HOME</Nav.Link>
            { user ?
              <><NavDropdown className='text-white' title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Name</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link as={Link} to="/signout" onClick={handleSignOut} className='text-white'>signout</Nav.Link>
              </>
              :
              <Nav.Link as={Link} to="/login" className='text-white'>LOGIN</Nav.Link>
            }

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menubar;