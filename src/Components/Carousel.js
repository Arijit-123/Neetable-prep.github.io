import React from 'react'
import Slider from "react-slick";
import "./slickdo.css"; 
import "./slick-themedo.css";
const Carousel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
      <Slider {...settings}>
          <div>
          <div id='svginspect'  className='carding'>
        <img src='/images/image1.svg' alt='newimage'/>
        <div>
            Light/dark mode
        </div>
      </div>
          </div>
          <div>
          <div  className='carding'>
        <img src='/images/image3.svg' />
        <div>
            figma files included
        </div>
        </div>
          </div>
          <div>
          <div  className='carding'>
        <img src='/images/image.svg' />
        <div>
            figma files included
        </div>
      </div>
          </div>
          <div>
          <div className='carding'>
        <img src='/images/image45.svg' />
        <div>
            Free Lifetime Updates
        </div>
        </div>
          </div>
          
          
          
          
        </Slider>
    </div>
  )
}

export default Carousel
