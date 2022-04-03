import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [
  {
    title: 'project 1',
    description: 'My first project'
  },
  {
    title: 'project 2',
    description: 'My 2nd project'
  },
  {
    title: 'project 3',
    description: 'My 3rd project'
  }
]

const Projects = () => (
  <Section nopading id='project'>
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map (({id, image, title, description, source, tags, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div> <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key= {i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>Code</ExternalLinks>
            <ExternalLinks href={visit}>Site</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))} 
    </GridContainer>
  </Section>
);

export default Projects;