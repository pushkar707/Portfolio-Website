import React, { useState } from 'react';
import './Carousel.css'; // Import your custom styles

const images = {
  0:[
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ],
  1:[
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ],
  2:[
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ],
  3:[
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ],
};

const Carousel = ({projectSelected, setprojectSelected, currentIndex, setCurrentIndex}) => {
  

  const handlePrevClick = () => {
    if(projectSelected !== 0 || currentIndex !== 0){
        if(currentIndex===0){
            console.log("");
            setCurrentIndex(images[projectSelected-1].length-1)
            setprojectSelected(prev => prev-1)
        }else{
            setCurrentIndex(prev => prev-1)
        }
    }
  };

  const handleNextClick = () => {
    if(currentIndex === images[projectSelected].length -1){
        if(projectSelected === Object.keys(images).length -1)
            setprojectSelected(0)
        else
            setprojectSelected(prev => prev + 1)
        setCurrentIndex(0)
    }
    else{
        setCurrentIndex(prev => prev + 1)
    }
  };

  return (
    <div className="custom-carousel">
      <button className="arrow prev" onClick={handlePrevClick}>
        {'<'}
      </button>
      <div className="carousel-slide">
        <img src={images[projectSelected][currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="arrow next" onClick={handleNextClick}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
