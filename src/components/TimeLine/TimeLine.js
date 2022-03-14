import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  
  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

//  snap back to beginning of scroll when window is resized
//  avoids a bug where content is covered up if coming from smaller screen

useEffect(() => {
  const handleResize = () => {
    scroll(carouselRef.current, 0);
  }

  window.addEventListener('resize', handleResize);
}, []);

  return (
    <Section id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        &nbsp; Garuba Abdul Azeez is a Front-end web developer inspired by the appetency to mske a bold 
        mark in the world. An engrossing journey that kickstarted the final third of 2020 has never had an halt. 
        A journey which has inspired my corent hight in bocoming a Web developer and 
        stimulated my ever accelerating desire to improve in myself. <br />
        &nbsp; During this period, i intern with very well known tech bodies. A process that has yielded my
        smooth and consistent growth, and has consistently influenced my believe achieving my dreams.
      </SectionText>
      <CarouselContainer ref={carouselRef } onScrool={handleScroll}>
      
        <>
        
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem 
                index={index} 
                id={`carousel__item-${index}`}
                activ={activeItem}
                onCLick={(e)=> handleClick(e, index)}        
              >
                <CarouselItemTitle>
                  {item.year}
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>

              </CarouselItem>
            </CarouselMobileScrollNode>
        ))}
      </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item,   index) => (
          <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e)=> handleClick(e, index)}
          type="button">
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
}; 

export default Timeline;
