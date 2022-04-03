import React from "react";

import {
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section roe nopsdding>
    <LeftSection main center>
      <SectionTitle>
        Hello Dear, <br />
        I'm Garuba AbdulAzeez,
      </SectionTitle>
      <SectionText>
        &nbsp;  Currently in my fourth and final year as a Computer Scientist in The
        University of Jos, Nigeria. I'm a frontend developer, with HTML/CSS,
        JavaScript React Js, typeScript, and Next js being my specialties, my
        aspiration to be a full-stack and blockchain developer remains evidently
        unabridged.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://drive.google.com/drive/folders/1mVSG96HbJKMO2ULP8XtiUt5qZpC7Qa")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
