import React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Layout, Landing, About, Project, Blog, Contact } from "../components";


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Index = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Landing />
      <About />
      <Project />
      <Blog />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

Index.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Index;

