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
        &nbsp; Garuba Abdul Azeez is a Front-end web developer who is driven by the desire to leave an indelible 
        mark on the world. An engrossing journey that began in the final third of 2020 has never come to a halt. 
        A journey that has inspired my current position as a Web developer and fueled my ever-increasing desire 
        to improve myself. <br />
        &nbsp; During this time, I work as an intern for a number of well-known technology companies. A process 
        that has resulted in my smooth and consistent improvement, as well as influencing my belief in my ability 
        to achieve my goals.
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
