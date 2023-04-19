import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectsData } from './ProjectsData';

import './Carousel.css'


function Carousel() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <div className='carousel'>

        <Slider {...settings}>


            {ProjectsData.map((item) => (
                    <div className='card'> 
                    <div className='card-top'>
                        {/* <img src={require('..//..//assets/' + item.img + '.png')} alt={item.title} className="c_photo" /> */}
                        <img src={require('..//..//assets/' + item.img2 + '.png')} alt={item.title} className="c_photo2" />
                        
                        <h1>{item.title}</h1>
                      
                        <div className='card-bottom'> 
                        <p>{item.decsription}</p>
                        <p>{item.techstack}</p>
                        <div className='links'>
                        <p>{item.links}</p>
                        <p>{item.links2}</p>
                        <p>{item.links3}</p>
                        </div>
                        <span>{item.date}</span>
                        </div>          
                    </div>
                    </div>
            ))}

            
        </Slider>








    </div>
  )
}

export default Carousel