import React from "react"
import styled from 'styled-components';

const StyledContactSection = styled.section`
  max-height: 90vh;
  h5{
    font-weight: 700;
  }

  p{
    font-size: 15px;
  }
  display: grid;
  grid-template-rows: repeat(2, 200px);
  ${'' /* align-items: center; */}
`;

export default function Contact() {


  return (
    <StyledContactSection className='main' id="contact">
      <h5>Let's get in touch</h5>
      <div id='contactList'>
        <p>yoohyojin@gmail.com</p>
        <p>linkedin.com/in/hyojinyoo</p>
        <p>medium.com/@hyojin</p>
      </div>
    </StyledContactSection>
  )
}