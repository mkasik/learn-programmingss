import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './login.png';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <Container>
      <Row>
        <Col>
        <img src={img} alt="" />
        </Col>
        <Col>
        <h2 className='text'>Please Login</h2>
        <Form className='form'>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className='tt'>Email</Form.Label>
        <Form.Control className='w-50 me-4 box' type="email" placeholder="Your Email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='ttt'>Password</Form.Label>
        <Form.Control className='w-50 box' type="password" placeholder="Your Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
       LOGIN
      </Button>
      <div>New to learn programming? Please <Link to={'/register'}>Register</Link></div>

    </Form>

        </Col>
      </Row>
      
    </Container>
            
        </div>
    );
};

export default Login;