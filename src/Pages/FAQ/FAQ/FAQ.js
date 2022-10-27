import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './faq.png';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

const FAQ = () => {
    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <Container>
                <Row>
                    <Col>
                    <img className='faq-imag' src={img1} alt=''></img>
                    </Col>
                    <Col>
                    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Will be live class? If i checkout your course</Accordion.Header>
        <Accordion.Body>
          No dear!
          We'll upload record video every day in our website and you can see this video by login in your dashboard. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>If I buy your course, can i get any other support from you? </Accordion.Header>
        <Accordion.Body>
          Of Course!
          We'll help you any kind of issues about our course.
          We'll help you 24 hours in a day. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Have you any discount in your course?  </Accordion.Header>
        <Accordion.Body>
          No dear!
          This is not in our rules. Our courses already cheap rated course.  
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                    </Col>
                </Row>
                
                </Container>
        </div>
    );
};

export default FAQ;