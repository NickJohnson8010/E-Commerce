import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends React.Component {
  render() {
    return (
      <Carousel autoPlay infiniteLoop>
        <div>
          <svg viewBox="0 0 500 200">
            <path
              d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
              fill="#FFC0CB"
            ></path>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 500 200">
            <path
              d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
              fill="#FFC0CB"
            ></path>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 500 200">
            <path
              d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
              fill="#FFC0CB"
            ></path>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 500 200">
            <path
              d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
              fill="#FFC0CB"
            ></path>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 500 200">
            <path
              d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
              fill="#FFC0CB"
            ></path>
          </svg>
        </div>
      </Carousel>
    );
  }
}
