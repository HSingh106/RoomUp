import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import profilePic from './assets/image1.jpg'; // Add your profile picture path here

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-orange-600 shadow-lg fixed-top" style={{ height: '60px' }}>
      <Container fluid> {/* Ensures the navbar spans the full width */}
        <Navbar.Brand as={Link} to="/" className="text-white">RoomUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">About Us</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown" className="text-white">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/matches">Matches</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="d-flex align-items-center">
          <Image src={profilePic} roundedCircle style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          <span className="text-white me-2">Signed in as:</span>
          <a href="/profile" className="text-white">Mark Otto</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
