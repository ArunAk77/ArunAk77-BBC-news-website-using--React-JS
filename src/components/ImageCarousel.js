import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  return (
    <div style={{width:"100%",height:"fit-content"}} class="container">
    <Carousel >
      <Carousel.Item >
        <img style={{width:"100%",height:"700px"}}
          className="d-block w-100"
          src="https://i.ytimg.com/vi/RAJhUas1ZJQ/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wayanad Slide</h3>
          <p>Search for bodies after Wayanad landslide buried hundreds | BBC</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  style={{width:"100%",height:"700px"}}
          className="d-block w-100"
          src="https://imagenes.elpais.com/resizer/v2/VFHMMEPLLKR3XMYVYBIHTU273Y.jpg?auth=e617ddcc5a6bb06c1fa84e7b3c4ccd0e03f352414ecc30c7aa8f348b1b1701f8&width=1960&height=1103&smart=true"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Israel-Palestine </h3>
          <p>Israel forces pushing into South GAZA | BBC</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img style={{width:"100%",height:"700px"}}
          className="d-block w-100"
          src="https://4kwallpapers.com/images/wallpapers/summer-olympics-1920x1200-13551.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Olympic Games</h3>
          <p>Welcome to the official Paris 2024 Olympics app. Whether you're in Paris or watching from home, this app has all the information you need to experience the Olympic and Paralympic Games Paris 2024 | BBC</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default ImageCarousel;
