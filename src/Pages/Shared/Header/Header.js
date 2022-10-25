import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import photo from './logo2.png'
import './Header.css'

const Header = () => {
    return (
        <div>
                <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
          <img
              src={photo}
              width="220"
              height="50"
              className="d-inline-block align-top"
              alt="Learn Programming logo"
            />
         
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='link' to={'/home'}>Home</Link>
            <Link className='link' to={'/courses'}>Courses</Link>
            <Link className='link' to={'/faq'}>FAQ</Link>
            <Link className='link' to={'blog'}>Blog</Link>
            <Link className='link' to={'login'}>Login</Link>
            <Link className='link' to={'register'}>Register</Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        </div>
    );
};

export default Header;