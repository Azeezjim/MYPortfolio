import React from "react";
import { DiReact } from "react-icons/di";
import { GrOptimize } from "react-icons/gr";

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
        &nbsp; &nbsp;  I have experience with several front-end technologies such as HTML,
        CSS, JavaScript, and React.js, as well as additional tools such as Formik, Axios,
        React Query, and Tailwind CSS. I have also worked with state management libraries
        like Recoil and Zustand and have experience with TypeScript and Next.js. In addition,
        I have experience with mobile development using Flutter and Firebase. I are proficient
        in version control with Git/GitHub, and have experience with API documentation tools like
        Postman and Swagger, project management software JIRA, and collaboration tools like MIRO and
        Slack.
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>
              Front-End
              {/* <IconsClasses> */}
              <DiReact /> {" "}
              {/* </IconsClasses> */}
            </ListTitle>
            <ListParagraph> <br/>
              &nbsp; &nbsp; With over a year of working as a Front-End developer, I have extensive experience 
              working with React JS, Next JS, and TypeScript. Additionally, I have some experience in mobile 
              development using Flutter. My skills in React JS and Next JS have enabled me to create dynamic 
              and responsive web applications with a smooth user experience. My expertise in TypeScript has 
              allowed me to write clean and maintainable code that is easily scalable. In addition, my 
              knowledge of Dart has allowed me to develop mobile applications with a focus on performance 
              and user experience. Overall, my experience as a Front-End developer has enabled me to work 
              on complex projects and deliver high-quality results.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>
              Basic Computer Software
              {/* <IconsClasses> */}
              <MdComputer /> {"  "}
              {/* </IconsClasses> */}
            </ListTitle>
            <ListParagraph>
              &nbsp; &nbsp; As a Computer Science student, I have gained extensive knowledge and skills
              in programming languages such as JavaScript, Dart, and Python. I also learned about database
              management, software engineering principles, and web development. Through various projects
              and assignments, I gained practical experience in software development and problem-solving.
              Additionally, I had the opportunity to attend workshops and hackathons, where I collaborated
              with other students to create innovative solutions using technology. My overall experience as
              a Computer Science student was challenging yet rewarding, and has prepared me for a successful
              career in the field of software development.
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <ListContainer>
            <ListTitle>
              Softwere Optimisation And Collaboration
              {/* <IconsClasses> */}
              <GrOptimize /> {" "}
              {/* </IconsClasses> */}
            </ListTitle>
            <ListParagraph>
              &nbsp; &nbsp; I have experience in optimizing software performance by identifying 
              and resolving bottlenecks in code, using profiling tools and analyzing resource 
              utilization. I have also worked on improving code readability, maintainability, 
              and scalability by following software design principles and best practices.
              In terms of collaboration, I have worked with cross-functional teams to deliver 
              software projects, utilizing agile methodologies such as Scrum. 
              I have experience in version control using Git, and working with remote teams 
              using tools like GitHub and Slack. I have also participated in code reviews and 
              knowledge sharing sessions to ensure the quality of code and facilitate continuous 
              learning.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider />
    </Section>
  </div>
);

export default Technologies;
