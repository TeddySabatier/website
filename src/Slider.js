import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Slider.css"

function Slider({datas}) {
    const [isHovered, SetHovered] = useState(false);
    return (
        <div onMouseEnter={() =>SetHovered(true)} onMouseLeave={() =>SetHovered(false)}>
            <Carousel showArrows={isHovered} showStatus={false} showIndicators={false}  showThumbs={false} stopOnHover={true} infiniteLoop={true} interval={15000} transitionTime={500} autoPlay={true} autoFocus={false}>                   
             {datas.map(slide => (
                        <div key={slide.id}>
                            <img src={slide.image} alt="" ></img>
                        </div>
                    ))}
                
            </Carousel>
        </div>
    );
  }
  
  export default Slider;
  