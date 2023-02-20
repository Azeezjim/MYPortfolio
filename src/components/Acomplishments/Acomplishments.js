import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "30 +", text: 'Personal/Collaborative Projects'},
  { number: "500 +", text: 'connects on Linkdin', },
  { number: "1 year +", text: 'Working expirence as a frontend developer', },
  { number: 0, text: 'Girl friends', }
];

const Acomplishments = () => (

  <Section> 
    <SectionTitle>Personal Accomplishment</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number} </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
