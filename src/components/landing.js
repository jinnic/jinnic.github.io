import React from 'react'
import styled from 'styled-components';

const StyledMainSection = styled.section`
  background: var(--gradiant);
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 200px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 35px;
  }
`;

const StyledText = styled.div`
  max-width: 768px;
  margin: auto 0;
  
  h1, h3, p{
    color: var(--white);
    margin-bottom: 1em;
    font-weight: 700;
    line-height: 130%;
  }
  p{
    font-size: 24px;
    line-height: 150%;
    @media (max-width: 580px) {
      font-weight: 400;
      line-height: 150%;
    }
  }
  span {
    positon: relative;
    border-bottom: 0.1em solid white;
    padding-bottom: 0.1em;
    margin-bottom: 0.2em;
    
  }
  .wave {
    positon: absolute;
    left: 0;
    bottom: 0;
    background-color:red;
    width: 6px;
    height: 99px;
    margin: 0 auto;
    display: inline-block;
  }
`;
const Landing = () =>{
  return(
    <StyledMainSection >
      <StyledText >
        <h3>👋 Hi my name is Hyojin Yoo.</h3>
        <h1>I’m a creative technologist and <span>software engineer</span>.</h1>
        <p>As a detail oriented tech junkie, I’m committed to building a great user experience with efficiency. Currently based in Brooklyn, NY.</p>      
      </StyledText>
    </StyledMainSection>
  )
}

export default Landing