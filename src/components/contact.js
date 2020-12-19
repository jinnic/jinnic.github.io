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
      <form method="post" action="https://getform.io/f/03e7aa3f-04b2-411a-a5ed-68dc9bb99d6c" id='contactForm'>
        <label>
          Name
          <input type="text" name="name" id="name" rules="required|max:255"/>
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" rules="required|max:255"/>
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </StyledContactSection>
  )
}