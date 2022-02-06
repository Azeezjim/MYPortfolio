import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section roe nopsdding>
    <LeftSection main center>
      <SectionTitle>
        Hello Dear, <br/>
        I'm Garuba AbdulAzeez,
      </SectionTitle>
      <SectionText>
        Currently a 400levle Computer Science student in The University of Jos.<br/>
        I'm a frontend developer, with HTML/CSS, JavaScript and React Js being my <br/>
        specialties, my aspiration to be a frontend and blockchain developer remains <br/>
        evidently unabridged.
      </SectionText>
      <Button onClick={() => window.location="azeexjim@gmail.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;