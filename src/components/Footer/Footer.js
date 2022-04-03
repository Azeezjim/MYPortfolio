import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tell:+2348162039795'>+2348162039795</LinkItem>
        </LinkColumn>
  
        <LinkColumn>
        <LinkTitle>Mail</LinkTitle>
          <LinkItem href='https://mail.google.com/mail/u/0/#inbo'>azeexjim@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList> 
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan><i> A lot of hard work is hiddeen behind great things.</i></Slogan>
        </CompanyContainer>
        <SocialIcons href="https://mail.google.com/mail/u/0/#inbo">
          <AiFillMail size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://github.com/Azeezjim">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/garuba-abdul-azeez-713273167/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://twitter.com/GarubaAbdulAz13?s=09 ">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer; 
