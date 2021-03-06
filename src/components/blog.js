import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from './icons/icon';

const StyledBlogSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: 100%;

  }
  h5 {
    font-weight:400;
    @media (max-width: 1024px) {
      font-size: 12px;
      font-weight:700;
    }
    @media (max-width: 768px) {
      font-weight:400;
      font-size: 15px;
    }
  }
  
  .blogs-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(265px, 1fr));
    grid-gap: 15px;
    position: relative;
    @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-gap: 10px;
    }
    @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    }
  }
  


  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }
`;

const StyledBlog = styled.div`
  cursor: default;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;
    .blog-inner {
      transform: translateY(-7px);
    }
  }

  .blog-inner {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    ${'' /* padding: 2rem 1.75rem; */}
    border: 1px solid var(--purple);
    border-radius: 5px;
    transition: var(--transition);
    .blog-inner>* {
        flex: 1 1 1;
    }
  }

  .blog-top {
    height: 190px;
    padding: 2rem 1.75rem;
    
    .line {
      position: absolute;
      width: 17.71px;
      height: 4px;
      left: 1.75rem;
      top: 2rem;
      background-color: var(--purple);
    }
    .blog-title {
      color: var(--purple);
      margin-top: 0.6em;
      margin-bottom: 0.7em;
      font-weight: 700;
      @media (max-width: 1024px) {
        font-size: 18px;
      }
    }
    @media (max-width: 880px) {
      height: 210px;
    }
  }
  .blog-bottom {
    height: 150px;
    @media (max-width: 880px) {
      height: 180px;
    }
    @media (max-width: 768px) {
      height: 130px;
    }
    padding: 2rem 1.75rem;
    background-color: var(--purple);
    position: relative;
    .blog-description {
      color: var(--blue-gray);
      
    }
    .links {
      position:absolute;
      bottom:1.75em;
      right:1.75em;
      text-align: right;
      a { 
        width: 20px;
        height: 20px;
      }

      svg {
        fill: var(--blue-gray);
        &:hover,
        &:focus {
          fill: var(--white);
          transition: var(--transition);
        }
      }
    }

    @media (max-width: 580px) {
      height: 130px;
    }
  }
  

  

`;


const Blog = () => {
  const data = useStaticQuery( graphql`
    {
      content: allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/blog/"}
          frontmatter: { show: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              published
              publishdate
              link
            }
            excerpt
            html
          }
        }
      }
    }
  `)
  
  const blog = data.content.edges.filter(({ node }) => node);
  const linkIcon = 'Link';
  // console.log("Blog List : ", blog)
  return(
    <StyledBlogSection className='main' id="blog">
      <div className='blog'>
        <h2>Blog</h2>
        <div className="blogs-grid">
          { blog.map(({ node }, i) => {
            const {frontmatter, excerpt} = node
            const {title,published,publishdate,link} = frontmatter;
           
            return(
              <StyledBlog
                key={'blog'+i}
                tabIndex="0"
                >
                  <div className="blog-inner">
                    <div className="blog-top">
                      <div className="line"></div>
                      <h4 className="blog-title">{title}</h4>
                      <h5>Published in {published} · {publishdate}</h5>
                    </div>
                    <div className="blog-bottom">
                      <div className="blog-description">
                        <p>{excerpt}</p>
                      </div>
                      <div className='links'>
                        <a href={link} aria-label={linkIcon}>
                          <Icon name={linkIcon} className='blog-links'/>
                        </a>
                      </div>  
                    </div>
                  </div>
              </StyledBlog>
            )
          })}
          {/* <p>{JSON.stringify(data, null, 4)}</p> */}      
        </div>
      </div>
    </StyledBlogSection>
  )
}





export default Blog