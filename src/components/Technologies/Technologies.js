import React from 'react';
import { DiCss3Full, DiFirebase, DiHtml5, DiJavascript, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconsClasses } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText >
        &nbsp; journey as a web developer has seen me work with a rang of Technologies.
        With front end been my forte, I corrrently work with HTML, CSS, Tailwind, 
        Bootsteap, JavaScript and React Js. 
      </SectionText > 
        <List>
          <ListItem>
          <ListContainer>
              <ListTitle>
                  Front-End 
                <IconsClasses>
              <DiHtml5 />
              <DiCss3Full />
              <DiJavascript />
              <DiReact />
            </IconsClasses>
              </ListTitle>
              <ListParagraph>
                &nbsp; I have a year experiesence  as a frontend end developer. In this period, 
                I have shown a relenghtless dedication and effort in constantly
                improving my self. <br/>
                &nbsp; I this spell of time, I have interned with Zuei Team, Side Hustle
                and most resently HNG all of which have have drastically taking part 
                in shaping my accrescent experiesence.
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
    </Section>
  </div>
);

export default Technologies;
