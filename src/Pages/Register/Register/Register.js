import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './login.png';
import './Register.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Register = () => {
const {createUser,updateUserProfile}=useContext(AuthContext);
const navigate= useNavigate();
  const handleSubmit= event=>{
    
    event.preventDefault();
    const form= event.target;
  const name= form.name.value;
  const photoURL= form.photoURL.value;
  const email= form.email.value;
  const password= form.password.value;
  // console.log(name,photoURL, email, password); 
  createUser(email, password)
  .then(result=>{
    const user= result.user;
    console.log(user);
    form.reset();
    navigate('/login')
    handleUpdateUserProfile(name, photoURL);
  })
  .catch(e=>console.error(e));
  
  }
  const handleUpdateUserProfile= (name, photoURL)=>{
    const profile= {
      displayName: name,
      photoURL: photoURL
    }
    return updateUserProfile(profile)
    .then(()=>{})
    .catch(error=>console.error(error));
  }
  
  
    return (
        <div className='register'>
        <Container>
  <Row>
    <Col>
    <img className='reg-image' src={img} alt="" />
    </Col>
    <Col>
    <h2 className='text'>Please Register</h2>
    <Form onSubmit={handleSubmit}  className='form1'>
  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
    <Form.Label className='email-text'>Name</Form.Label>
    <Form.Control className='w-50 me-4 box' type="text" placeholder="Your Full Name" name='name' required />
    
  </Form.Group>
  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
    <Form.Label className='photo-text'>PhotoURL</Form.Label>
    <Form.Control className='w-50 me-4 box' type="text" placeholder="Your PhotoURL" name='photoURL' required />
    
  </Form.Group>
  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
    <Form.Label className='email-text'>Email</Form.Label>
    <Form.Control className='w-50 me-4 box' type="email" placeholder="Your Email" name='email' required />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='password-text'>Password</Form.Label>
    <Form.Control className='w-50 box' type="password" placeholder="Your Password" name='password' required />
  </Form.Group>
 
  <Button variant="primary" type="submit">
   Sign Up
  </Button>
  <div className='link1 mt-2'>Already have an account? Please <Link to={'/login'}>Login</Link></div>

</Form>

    </Col>
  </Row>
  
</Container>
        
    </div>
    );
};

export default Register;