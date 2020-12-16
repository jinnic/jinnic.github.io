import React from 'react'
import styled from 'styled-components'
import { socialMedia } from '../config';
import { Icon } from './icons/icon';


const StyledSocial = styled.ul`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  
  justify-content: center;
  list-style: none;
  z-index: 10;

  li{
    margin: 0px 20px 5px 0px;
  }
  li {
    &:last-of-type {
      ${'' /* margin-bottom: 25px; */}
    }

    a {
      &:hover,
      &:focus {
        transform: translateY(-5px);
      }

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`
const StyledFooter = styled.div`
  
  margin: auto 30px;
  padding-bottom: 20px;
  text-align: center;
  
  p {
    font-size: 0.8em;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSocial>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} className='transparent' />
            </a>
          </li>
          
        ))}
        </StyledSocial>
        <p>Designed & Built by Hyojin Yoo © 2020</p>
    </StyledFooter>
    
  )
}