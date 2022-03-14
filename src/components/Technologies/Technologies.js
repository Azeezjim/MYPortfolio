import React from 'react';
import { DiReact, DiGithub} from 'react-icons/di';
import {MdComputer } from 'react-icons/md';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconsClasses } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText >
      &nbsp; My journey as a web developer has seen me work with a rang of Technologies.
        With front end been my forte, I corrrently work with HTML, CSS, Tailwind, 
        Bootsteap, JavaScript React Js and Firebase. 
      </SectionText > 
        <List>

          <ListItem>
          <ListContainer>
              <ListTitle>
                Front-End 
            {/* <IconsClasses> */}
              <DiReact />
            {/* </IconsClasses> */}
              </ListTitle>
              <ListParagraph>
                &nbsp; I have over a year of vigorous learning and practicing  experience as a front end developer. In this period, 
                I have shown a relentless dedication and effort in constantly
                improving my self. <br/>
                &nbsp; I this during this period, I have interned with Zuri Team, Side Hustle
                and most recently HNG. Also had a 6 months physical internship with IXNote Services , all of which have have drastically taking part.
                in shaping my ever growing experience.
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
          <ListContainer>
              <ListTitle>
                Basic COmputer Spftware 
            {/* <IconsClasses> */}
              <MdComputer />
            {/* </IconsClasses> */}
              </ListTitle>
              <ListParagraph>
                &nbsp; Being a Computer scientist by study, i posses the fundamental software knowledge required as a developer. <br/>
                &nbsp; This has helped speeding my learning process and has the potentiality to influence a rapid 
                growth in my foreseeable future.
              </ListParagraph>
            </ListContainer>
          </ListItem>

          <ListItem>
          <ListContainer>
              <ListTitle>
                GitHub
            {/* <IconsClasses> */}
              <DiGithub />
            {/* </IconsClasses> */}
              </ListTitle>
              <ListParagraph>
                &nbsp; As a web developer and for developers in the wider scope, the relevance 
                and necessity of GitHub isn't an unfamiliar knowledge to any. <br/>
                &nbsp; I have a good knowledge of the general git implementations and basic 
                git commands as generally required.
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
        <SectionDivider />
    </Section>

    
    
  </div>
);

export default Technologies;
