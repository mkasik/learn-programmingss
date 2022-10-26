import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Details.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Details = () => {
    const detail= useLoaderData();
    console.log(detail);
    return (
        <div className='detail'>
               
                <h2 className='mb-4'>Welcome to {detail.name} Course</h2>
                <Container>
                    <Row>
                        <Col><img className='photo' src={detail.img} alt="" /></Col>
                        <Col>
                        <Card style={{ }}>
                            <Card.Body>
                                <Card.Title>{detail.name}</Card.Title>
                                
                                <Card.Text>
                                {detail.details}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Course Fee: {detail.fee}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Course Duration: {detail.duration}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Total Modules: {detail.modules}</Card.Subtitle>
                                <Button variant="warning">Get premium access</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                    </Container>
        </div>
    );
};

export default Details;