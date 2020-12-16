import React from 'react'
import styled from 'styled-components'
import { socialMedia } from '../config';
import { Icon } from './icons/icon';

const waveLine = <Icon name={'WaveLine'} />

const StyledSocialList = styled.ul`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 30px;
  z-index: 10;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--purple);


  ${'' /* &:after {
    content: url(${waveLine});
    display: block;
    width: 6px;
    height: 99px;
    margin: 0 auto;
    fill: var(--purple);
  } */}

  li {
    &:last-of-type {
      ${'' /* margin-bottom: 25px; */}
    }

    a {
      margin-bottom: 25px;

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
  .waveLine {
    display: block;
    width: 6px;
    height: 99px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Social() {
  return (
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} className='transparent' />
            </a>
          </li>
          
        ))}
        <div className="waveLine">{waveLine}</div>
    </StyledSocialList>
    
  )
}