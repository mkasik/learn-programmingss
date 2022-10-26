import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './login.png';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const {providerLogin}= useContext(AuthContext);
    const googleProvider= new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
       
        providerLogin(googleProvider)
        .then(result =>{
            const user= result.user;
            console.log(user);
        })
        .catch(error =>console.error(error))
    }
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
     
      <Button className='mb-3' variant="primary" type="submit">
       LOGIN
      </Button>
      <div className='mb-2'>--Or Sign In With--</div>
      <div>
      <Button onClick={handleGoogleSignIn}  className='w-25 me-1' variant="outline-dark"><FaGoogle></FaGoogle>  Google</Button>
      
      <Button className='w-25' variant="outline-dark"><FaFacebook></FaFacebook> Facebook</Button>
      </div>
      <div>New to learn programming? Please <Link to={'/register'}>Register</Link></div>
      
      

    </Form>

        </Col>
      </Row>
      
    </Container>
            
        </div>
    );
};

export default Login;