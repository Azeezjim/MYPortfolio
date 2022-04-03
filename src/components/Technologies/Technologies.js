import React from "react";
import { DiReact, DiGithub } from "react-icons/di";
import { MdComputer } from "react-icons/md";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  IconsClasses,
} from "./TechnologiesStyles";

const Technologies = () => (
  <div>
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        &nbsp; As a web developer, I've had the opportunity to work with a
        variety of technologies. I'm acquainted with HTML/CSS, Tailwind,
        JavaScript, typeScript, React Js, Next Js, GitHub, and Firebase as a
        front-end developer. In addition, my strong drive to develop, along with
        my excellent ability to grasp and apply new information, gives me the
        potential to learn even more and progress in a short period of time.
      </SectionText>
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
              &nbsp;As a front end developer, I have over two years of intensive
              learning and practice. During this time, I have demonstrated
              unwavering passion and effort in always developing myself. <br />
              &nbsp; I interned at Zuri Team, Side Hustle, and, most recently,
              HNG during this time. I also undertook a 6-month physical
              internship with IX-Note Services, all of which had a significant
              impact. in helping to shape my ever-evolving experience
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
              &nbsp; I have the essential software expertise required of a
              developer as a result of my studies as a computer scientist. {" "}
              <br />
              &nbsp; Fortunately, this has aided in the acceleration of my
              learning process and has the potential to impact significant
              progress in the near future.
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
              &nbsp; As a web developer and for developers in the wider scope,
              the relevance and necessity of GitHub isn't an unfamiliar
              knowledge to any. <br />
              &nbsp; I am well-versed in the general git implementations and
              fundamental git commands that a developer is expected to know.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider />
    </Section>
  </div>
);

export default Technologies;
