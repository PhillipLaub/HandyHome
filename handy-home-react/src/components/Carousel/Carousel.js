import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

 export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel 
      activeIndex={index}
       onSelect={handleSelect} 
       controls={false}
       fade={true}
       >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/1.jpg')}
            alt="First slide"
            width='1400px'
            height='640px'
            
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/2.jpg')}
            alt="Second slide"
            width='1400px'
            height='640px'
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/3.jpg')}
            alt="Third slide"
            width='1400px'
            height='640px'
            
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 