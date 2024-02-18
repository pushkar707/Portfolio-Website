import React, { useState } from 'react';
import './Carousel.css'; // Import your custom styles
import { projects } from '../data';

const images = projects.map(project => {
  return project.images
})

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
        <a href={images[projectSelected][currentIndex]} target='_blank' >
          <img src={images[projectSelected][currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </a>
      </div>
      <button className="arrow next" onClick={handleNextClick}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
