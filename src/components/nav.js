import React , { useEffect } from 'react'
import { Link } from 'gatsby'
import { navLinks } from '../config';
import styled from 'styled-components';


const handleScroll = () => {
  const nav = document.getElementById("nav");
  const about = document.getElementById("about")
  let aboutY = about.getBoundingClientRect().top - 65;
  
  // console.log("about location : ", aboutY);
  if (aboutY > 0 ) {
    nav.className = nav.className.replace( /(^|\s+)scroll($|\s+)/g , '' );
  } else if(aboutY < 0 && !nav.classList.contains("scroll")){
    nav.className += " scroll";
  }
};

const StyledNav = styled.div`
  height: var(--nav-height);
  color: var(--white);
  background: transparent;
  li {
    display: inline-block;
    margin-right: 5em;

    a {
      font-size: 14px;
      color: currentColor;

      &:hover{
        color: var(--purple);
      }
    }
  }

  &.scroll {
    color: var(--purple);
    background: var(--background);
    transition: var(--transition);
    a {
      &:hover{
        color: var(--white);
      }
    } 
  }
`

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-Index: 50;
  width: 100%;
  
`
const Nav = ( ) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })

  return(
    <StyledHeader >
      <StyledNav id="nav">
          <ul style={{ listStyle: `none`, float: `right` }}>
            {/* <NavLink to="/about/">About</NavLink>
            <NavLink to="/projects/">Projects</NavLink>
            <NavLink to="/blog/">Blog</NavLink>
            <NavLink to="/contact/">Get in touch</NavLink>
            <NavLink to="/resume/">Resume</NavLink> */}
            {navLinks.map(({ url, name }, i) => (
              <li key={i} >
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </StyledNav>
      </StyledHeader>
  )
}

export default Nav