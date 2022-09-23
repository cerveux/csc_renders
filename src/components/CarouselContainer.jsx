import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselContainer(params) {
   return(
      <div className="carousel-container">
         <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../media/carousel/finalentrega.png")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../media/carousel/RENDER EXT - HD.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../media/carousel/RENDER EXT 2 - HD.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../media/carousel/RENDER INT CASA 2 - HD.jpg")}
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../media/carousel/RENDER INT CASA 6 - HD.jpg")}
          alt="Fifth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../media/carousel/VISTA AEREA.jpg")}
          alt="Seventh slide"
        />
      </Carousel.Item>

    </Carousel>
      </div>
      
   ) 
    
}

export default CarouselContainer;