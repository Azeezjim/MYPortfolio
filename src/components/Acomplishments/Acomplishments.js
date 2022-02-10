import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "5 +", text: 'Personal Projects'},
  { number: "100 +", text: 'connects on Linkdin', },
  { number: 3, text: 'Intenships paticipated in', },
  { number: 0, text: 'Girl friend', }
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
