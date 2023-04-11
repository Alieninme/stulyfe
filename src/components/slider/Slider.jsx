import React from 'react'
import "./slider.css";
import { useState } from 'react';
import dataSlider from "./dataSlider";

export default function Slider() {

  const [activeIndex, setActiveIndex] = useState(0);
 
  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? dataSlider.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === dataSlider.length - 1 ? 0 : activeIndex + 1);
  };
 
  return (
    <div className="carousel">
      {dataSlider.map((item, index) => (
        <div
          key={index}
          className={`carouselItem ${
            activeIndex === index ? 'active' : ''
          }`}
          style={{ backgroundImage: `url(${item.background})` }}
        >
        
          <div className="carouselItemContent">   
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <div className="radioButtons">
          {dataSlider.map((item, index) => (
            <div
              key={index}
              className={`radioButton ${
                activeIndex === index ? 'active' : ''
              }`}
            ></div>
          ))}
        </div>
      <div className="carouselNavigation">
        <button className="prev" onClick={handlePrev}>
          Previous
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
};