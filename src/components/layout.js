import React from "react"

import styled from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles'

import {Head, Nav ,Social, Footer} from '.';


const StyledContent = styled.div`
  positon: absolute;
  zIndex: -100;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

console.log(GlobalStyles)

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Nav />
      <Social />
      <StyledContent>
      <GlobalStyles />
        <div id="content">
          {children}
        </div>
      </StyledContent>
      <Footer/>
    </>
  )
}