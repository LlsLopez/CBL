import '../style.css';
import './clients.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import React from 'react'

export default function clients() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="clients">

    <div className="carousel">
      <h2> Previous Clients</h2>
      <Slider {...settings}>
      <div className="box" id = "hair1">
      </div>
      <div className="box" id = "hair2">
      </div>
      <div className="box" id = "hair3">
      </div>
      <div className="box" id = "hair4">
      </div>
      <div className="box" id = "hair5">
      </div>
      <div className="box" id = "hair6">
      </div>
      <div className="box" id = "hair7">
      </div>
      </Slider>


      
    </div>
    


    </div>
  )
}
