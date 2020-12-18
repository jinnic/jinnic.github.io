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
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  li {
    display: inline-block;
    margin-right: 5em;
    @media (max-width: 768px) {
      margin-right: 2.2em;
    }

    @media (max-width: 480px) {
      margin-right: 1em;
    }

    a {
      font-size: 14px;
      color: currentColor;

      &:hover{
        color: var(--purple);
      }
      @media (max-width: 480px) {
        font-size: 12px;
      }
    }
  }

  &.scroll {
    color: var(--purple);
    background: var(--background);
    transition: var(--transition);

    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    a {
      &:hover{
        ${'' /* color: var(--text-highlight); */}
        ${'' /* text-decoration: underline; */}
        background-color: var(--text-highlight)
      }
    } 
  }

  .resume-button {
    margin-left: 15px;
    background-color: transparent;
    border: 1px solid currentColor;
    border-radius: var(--border-radius);
    padding: 0.5em 1em;

    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {

    }
    &:after {
      display: none !important;
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
            {navLinks.map(({ url, name }, i) => (
              <li key={i} >
                <Link to={url}>{name}</Link>
              </li>
            ))}
            <li>
              <a
                className="resume-button"
                href="/portfolio/HyojinYoo_SW_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </StyledNav>
      </StyledHeader>
  )
}

export default Nav