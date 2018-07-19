import React from 'react';
import './carousel.css';

export const Carousel = () => {
    return (
        <div className="carousel-wrapper">
        <span id="item-1"></span>
        <span id="item-2"></span>
        {/* <span id="item-3"></span> */}
        <div className="carousel-item item-1">
          <div className="carousel-caption">
          <h2>Item 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus   accumsan pretium dolor vel convallis. Aliquam erat volutpat. Maecenas lacus nunc, imperdiet sed mi et, finibus suscipit mi.</p>
          <a className="arrow arrow-prev" href="#item-2"><span>Prev</span></a>
          <a className="arrow arrow-next" href="#item-2"><span>Next</span></a>
          </div>
        </div>
        
        <div className="carousel-item item-2">
        <div className="carousel-caption">
          <h2>Item 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam erat volutpat.</p>
          <a className="arrow arrow-prev" href="#item-1"><span>Prev</span></a>
          <a className="arrow arrow-next" href="#item-1"><span>Next</span></a>
          </div>
        </div>
      </div>
    )
}

export default Carousel;