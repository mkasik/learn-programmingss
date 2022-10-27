import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './CheckOut.css';

const CheckOut = () => {
    const detail= useLoaderData();
    const {user}=useContext(AuthContext);
    console.log(user)
    console.log(detail);
    const handleCheckOut=()=>{
        alert('Thanks a lot')
    }
    return (
        <div>
                        <Card>
                <Card.Header>Hey {user.displayName}!  <img className='check-image' src={user.photoURL} alt="" /></Card.Header>
               
                
                </Card>
            
            <Card  style={{ }}>
                            <Card.Body className='checkout'>
                                <Card.Title>{detail.name}</Card.Title>
                                
                                
                                <Card.Subtitle className="mb-2 text-muted">Course Fee: {detail.fee}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Course Duration: {detail.duration}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Total Modules: {detail.modules}</Card.Subtitle>
                                <Button onClick={handleCheckOut} variant="warning">Check Out</Button>
                            </Card.Body>
                            </Card>
        </div>
    );
};

export default CheckOut;