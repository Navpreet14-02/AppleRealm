import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Slider() {
  return (
    <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2000}>
        <div>
            <img src={require('../miscellaneous/corousel_1.png')} alt="" />
        </div>
        <div>
            <img src={require('../miscellaneous/corousel_2.png')} alt="" />
        </div>
        <div>
            <img src={require('../miscellaneous/corousel_3.png')} alt="" />
        </div>
    </Carousel>
  )
}

export default Slider