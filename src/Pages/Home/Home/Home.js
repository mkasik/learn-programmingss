import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './slider23.jpg';
import img2 from './slder_2.jpg';
import img3 from './banner_image5.jpg';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 home-image"
          src={img1}
         
          height="600"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='test'>
          <h3>Learn A New Skill</h3>
          <Button  variant="warning" className='btn'><Link className='link' to={'/courses'}>Courses</Link></Button>
          
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-image"
          src={img2}
          height="600"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='test'>
          <h3>Learn A New Skill</h3>
          <Button  variant="warning" className='btn'><Link className='link' to={'/courses'}>Courses</Link></Button>
          
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-image"
          src={img3}
          height="600"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='test'>
          <h3>Learn A New Skill</h3>
          <Button  variant="warning" className='btn'><Link className='link' to={'/courses'}>Courses</Link></Button>
          
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Home;