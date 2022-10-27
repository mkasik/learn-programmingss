import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Details.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Details = () => {
    const detail= useLoaderData();
    console.log(detail);
    return (
        <div className='detail'>
               
                <h2 className='mb-4'>Welcome to {detail.name} Course <Pdf targetRef={ref} filename="Course Details.pdf">
        {({ toPdf }) => <Button onClick={toPdf} variant="light">Download</Button>}
      </Pdf>  </h2>
                
                <Container >
                    <Row>
                        <Col><img className='photo' src={detail.img} alt="" /></Col>
                        <Col>
                        <Card  ref={ref} style={{ }}>
                            <Card.Body>
                                <Card.Title>{detail.name}</Card.Title>
                                
                                <Card.Text>
                                {detail.details}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Course Fee: {detail.fee}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Course Duration: {detail.duration}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Total Modules: {detail.modules}</Card.Subtitle>
                                <Link to={`/checkout/${detail.id}`}><Button variant="warning">Get premium access</Button></Link>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                    </Container>
                   
        </div>
    );
};

export default Details;