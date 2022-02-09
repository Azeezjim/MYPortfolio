import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

   
  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        An engrosing journey that kickstarted early last year (2021) has never had an halt. 
        A journey which has inspired my corent hight in bocoming a Web developer and 
        stimulated my ever accelerating desire to improve in my self..
      </SectionText>
      <CarouselContainer ref={carouselRef }>
      
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

              </CarouselItem>
            </CarouselMobileScrollNode>
        ))}
      </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
          key={active}
          index={index}
          active={activeItem}
          onClick={(e)=> handleClick(e, index)}
          type="button">
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
}; 

export default Timeline;
