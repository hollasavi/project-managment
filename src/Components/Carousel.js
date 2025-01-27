import React from 'react';
import '../Assets/Carousel.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image1 from '../Images/image1.jpg'
import image4 from '../Images/image4.jpg'
import image3 from '../Images/image3.jpg'


const Carousel = () => {
    const settings = {
      dots: true, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 3000, 
      arrows: true, 
    };
  const images=[
    image1,image4,image3
  ]
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Carousel;
  