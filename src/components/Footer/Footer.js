import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

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
      </LinkList>

      <LinkList>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='maleto:azeexjim@gmail.com'>azeexjim@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList> 
    </FooterWrapper>
  );
};

export default Footer; 
