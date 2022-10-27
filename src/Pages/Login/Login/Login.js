import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './login.png';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
  const [error, setError]=useState('');
    const {providerLogin, signIn, githubProviderLogin}= useContext(AuthContext);
    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();
    const navigate= useNavigate();
    const location= useLocation();
    const from= location.state?.from?.pathname ||'/';
    const handleGoogleSignIn=()=>{
       
        providerLogin(googleProvider)
        .then(result =>{
            const user= result.user;
            console.log(user);
        })
        .catch(error =>console.error(error))
    }
    const handleGithubSignIn=()=>{
      githubProviderLogin(githubProvider)
      .then(result =>{
        const user= result.user;
        console.log(user);
    })
    .catch(error =>console.error(error))
    }
    const handleSubmit= event=>{
      event.preventDefault();
      const form= event.target;
      const email= form.email.value;
      const password= form.password.value;
      signIn(email,password)
      .then(result=>{
        const user= result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace:true});
      })
      .catch(e=>{
        console.error(e)
        setError(e.message)
      });
    }
    return (
        <div className='login'>
            <Container>
      <Row>
        <Col>
        <img className='login-image' src={img} alt="" />
        </Col>
        <Col>
        <h2 className='text'>Please Login</h2>
        <Form onSubmit={handleSubmit} className='form'>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className='email-text'>Email</Form.Label>
        <Form.Control className='w-50 me-4 box' type="email" placeholder="Your Email" name='email' required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='password-text'>Password</Form.Label>
        <Form.Control className='w-50 box' type="password" placeholder="Your Password" name='password' required />
      </Form.Group>
     
      <Button className='mb-3' variant="primary" type="submit">
       LOGIN
      </Button>
     <div>
     <Form.Text className="text-danger">
          {error}
        </Form.Text>
     </div>
      <div className='mb-2'>--Or Sign In With--</div>
      <div>
      <Button onClick={handleGoogleSignIn}  className='w-25 me-1' variant="outline-dark"><FaGoogle></FaGoogle>  Google</Button>
      
      <Button onClick={handleGithubSignIn} className='w-25' variant="outline-dark"><FaGithub></FaGithub> Github</Button>
      </div>
      <div className='link1 mt-2'>New to learn programming? Please <Link to={'/register'}>Register</Link></div>
      
      

    </Form>

        </Col>
      </Row>
      
    </Container>
            
        </div>
    );
};

export default Login;