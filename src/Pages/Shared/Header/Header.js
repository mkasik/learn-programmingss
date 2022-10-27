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
import { useState } from 'react';

const Header = () => {
    const {user, logOut}= useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    let [changeText, setChangeText] = useState()
    const handleChange = () => {
        return setChangeText(!changeText);
      };
    return (
        <div>
                <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
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
            <Nav.Link >
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
            <Nav.Link eventKey={2} >
              {user?.photoURL ? 
            <img  title={user?.displayName} src={user?.photoURL}
            height='30'
            className='roundedCircle'
            alt='User images'></img> 
            : <FaUser></FaUser>
            }
            
            </Nav.Link>
            <Nav.Link >
            {changeText ? <Button className='' onClick={() => handleChange()} variant="light">Light</Button> :  <Button className='' onClick={() => handleChange()} variant="dark">Dark</Button>}
                </Nav.Link>
            
            
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        </div>
    );
};

export default Header;