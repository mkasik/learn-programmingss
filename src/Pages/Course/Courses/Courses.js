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
        <div>
            <Container>
                <Row>
                    <Col className='bb' lg={3}>

                        <h2 className='bbb'>Course List</h2>
                        
                        <div>
                            {courses.map(course=><p 
                            key={course.id}>
                                <Button variant="outline-success">{course.name}</Button>
                            </p>)}
                        </div>

                    </Col>
                    <Col className='' lg={9}>
                        <h2>Select Your Course</h2>
                        <div>
                            {courses.map(course=><p 
                            key={course.id}>
                                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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