import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Courses.css';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

const Courses = () => {
    const [courses, setCourses]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])

    return (
        <div className='course-section'>
            <Container >
                <Row>
                    <Col className='left' lg={3}>

                        
                        
                    <h2 className='bbb'>Course List</h2>
                        <div className='list'>
                        
                            {courses.map(course=><p 
                            key={course.id}>
                                <Link to={`/details/${course.id}`}><Button variant="success">{course.name}</Button></Link>
                            </p>)}
                        

                        </div>
                    </Col>
                    <Col className='' lg={9}>
                        <h2 >Select Your Course</h2>
                        <div className='main'>
                        {courses.map(course=><p 
                            key={course.id}>
                                 <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                    {course.detail}
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Course Fee: {course.fee}</Card.Subtitle>
                                    <Card.Text></Card.Text>
                                   
                                    <Link to={`/details/${course.id}`}><Button variant="primary">Details</Button></Link>
                                </Card.Body>
                                </Card>
                            </p>)}
                        </div>
                        
        
        
                    
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Courses;