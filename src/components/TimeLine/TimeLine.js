import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  //  snap back to beginning of scroll when window is resized
  //  avoids a bug where content is covered up if coming from smaller screen

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        &nbsp; &nbsp;As a front-end developer, computer science student, and Manchester United fan, I have a wide range of hobbies that reflect my interests and passions. These hobbies not only provide me with an escape from the daily grind of work and school, but they also allow me to expand my knowledge and skills in my chosen field. <br/>

        &nbsp;&nbsp;My primary hobby as a front-end developer is coding. I love to experiment with different coding languages and tools, building projects that push the boundaries of what is possible with web development. Whether it's creating a new website from scratch, optimizing a client's existing site, or simply tinkering with new technologies and techniques, I find coding to be a challenging and rewarding pursuit that keeps me engaged and motivated. <br/>

        &nbsp;&nbsp;As a computer science student, I am also passionate about exploring the theoretical underpinnings of computing. I enjoy reading books and papers on topics such as algorithms, data structures, and artificial intelligence, as well as taking online courses and attending lectures and conferences. In addition, I like to experiment with new programming languages and frameworks, such as React or Vue, to keep my skills up-to-date and stay on top of emerging trends in the industry. <br/>

        &nbsp;&nbsp;As a Manchester United fan, I love to follow the team's progress and engage in discussions with other fans. I enjoy watching games, analyzing player performances, and debating the merits of different tactics and formations. In addition, I like to collect memorabilia, such as jerseys and scarves, and attend matches whenever possible, soaking up the atmosphere and cheering on the team. <br/>

        &nbsp;&nbsp;Finally, I am also an avid gamer and movie buff. I love to immerse myself in immersive virtual worlds, exploring intricate game mechanics and engaging in challenging battles with other players. I also enjoy watching movies of all genres, from sci-fi to romance, and analyzing the narrative structure, character development, and cinematography. These hobbies provide me with a much-needed break from the rigors of work and school, allowing me to relax and recharge my batteries. <br/>


      </SectionText>
      <CarouselContainer ref={carouselRef} onScrool={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                activ={activeItem}
                onCLick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>{item.year}</CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
