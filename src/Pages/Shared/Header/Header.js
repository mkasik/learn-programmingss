import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import photo from './logo2.png'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const Header = () => {
    const {user, logOut}= useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
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
            
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                {user?.uid? 
                    <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className='btnn'>Log Out</button>
                    </> : 
                    <>
                    <Link className='link' to={'login'}>Login</Link>
            <Link className='link' to={'register'}>Register</Link>
                    </>   
            }
                </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? 
            <img src={user?.photoURL}
            height='30'
            className='photo'
            alt='User images'></img> 
            : <FaUser></FaUser>
            }
            
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        </div>
    );
};

export default Header;