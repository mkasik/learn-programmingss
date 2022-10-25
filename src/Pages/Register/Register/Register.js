import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './login.png';
import './Register.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='register'>
        <Container>
  <Row>
    <Col>
    <img src={img} alt="" />
    </Col>
    <Col>
    <h2 className='text'>Please Register</h2>
    <Form className='form1'>
  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
    <Form.Label className='tt'>Name</Form.Label>
    <Form.Control className='w-50 me-4 box' type="text" placeholder="Your Name" />
    
  </Form.Group>
  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
    <Form.Label className='tt'>Email</Form.Label>
    <Form.Control className='w-50 me-4 box' type="email" placeholder="Your Email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='ttt'>Password</Form.Label>
    <Form.Control className='w-50 box' type="password" placeholder="Your Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
   SIGNUP
  </Button>
  <div>Already have an account? Please <Link to={'/login'}>Login</Link></div>

</Form>

    </Col>
  </Row>
  
</Container>
        
    </div>
    );
};

export default Register;