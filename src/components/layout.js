import React, { useEffect } from "react"
import PropTypes from 'prop-types';
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

export default function Layout({ children, location }) {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  });

  return (
    <>
      <Head />
      <Nav location={ location }/>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};