import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from "gatsby-image"


const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 150px;
  
  @media (max-width: 1080px) {
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    margin-top: 35px;
  }
  @media (max-width: 480px) {
    margin-top: 35px;
  }
  
  .inner {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
      max-width: 90%;
      margin: 50px auto 0;
    }
  }

  .text{
    font-family: Lora;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
  }

  h2 {
    margin-bottom: 2em;
  }

  h4 {
    max-width: 620px;
  }
  h5{
    margin-top: 0.6em;
    margin-bottom: 0.7em;
  }

  .skill {
    max-width: 938px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    grid-gap: 10px;
    grid-row-gap: 1.8em;
    position: relative;
    margin-top: 50px;
    background-color: rgba(68, 40, 105, 0.1);
    padding: 35px;
    border-radius: 5px;


    @media (min-width: 980px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
      max-width: 90%;
      grid-template-columns: repeat(2, minmax(155px, 1fr));
      margin: 50px auto 0;
    }
    @media (max-width: 620px) {
      max-width: 90%;
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
      margin: 50px auto 0;
    }
  }

  .skill > div{
    position: relative;
    list-style: none;
    display: inline;
    font-size: 16px;
    line-height: 130%;
    ${'' /* margin-bottom: 1.1em; */}
  }
  
  .line {
      position: absolute;
      width: 17.71px;
      height: 4px;
      left: 0;
      top: 0;
      background-color: var(--purple);
  }

  .roundImg{
    width: 182px;
    ${'' /* background-color: var(--purple); */}
    border-radius: 50%;
    
    @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
    max-width: 182px;
    margin-bottom: 3em;
  }
  }
`;

const StyledText = styled.div`
  max-width: 768px;
  margin: auto 0;
  width: 100%;
`;


const About = () => {
  const data = useStaticQuery(graphql`
  query{
    about: allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/about/"}
          frontmatter: { show: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
        )
        {
        edges {
          node {
            frontmatter {
              title
              languages
              libraries
              database
              tools
              coverImg {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)
  // debugger
  const about = data.about.edges.filter(node => node)[0].node
  const {title, coverImg, languages, libraries, database, tools} = about.frontmatter

  return(
    <StyledAboutSection className='main' id="about">
      <StyledText>
        <h2>{title}</h2>
        <div className="about-me inner">
          <div className="roundImg">
            <Img fluid={coverImg.childImageSharp.fluid} alt={title}  />
          </div>
          <div className="text">
            <h4>I am a recent grad from the Flatiron School with a full scholarship from the NYC Tech Talent Pipeline. </h4>
            <h4>I have an MFA from the Rhode Island School of Design in Digital Media and have worked in the field of computational art and visual communication design for several years. </h4>
          </div>
                  </div>
        <div className="skill">
          <div className="language">
            <div className="line"></div>
            <h5>Languages</h5>
            {languages.map( lang => (<li>{lang}</li>))}
          </div>
          <div className="libraries">
          <div className="line"></div>
            <h5>Libraries</h5>
            {libraries.map( library => (<li>{library}</li>))} 
          </div>
          <div className="database">
          <div className="line"></div>
            <h5>Database</h5>
            {database.map( db => (<li>{db}</li>) )}
          </div>
          <div className="tools">
          <div className="line"></div>
            <h5>Tools</h5>
            {tools.map( tool => (<li>{tool}</li>))} 
          </div>
        </div>
      </StyledText>
    </StyledAboutSection>
  )
}

export default About;
