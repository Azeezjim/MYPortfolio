import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flrx", alignItems: "center", color:"white",  marginBottom:"20px", marginBottom:"20px"
}}>
          <DiCssdeck size="3rem" /> <span style={{ fontSize:"2.5rem"}}> Portfolio </span>
        </a>
      </Link>
    </Div1>
     {/* Nav */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
  
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
    
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    {/* SocialIcons */}

    <Div3>
      <SocialIcons href="https://github.com/Azeezjim">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/garuba-abdul-azeez-713273167/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://twitter.com/GarubaAbdulAz13?s=09 ">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href="azeexjim@gmail.com "> 
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
