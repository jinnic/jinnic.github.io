import React from 'react'
import { Link } from 'gatsby'
// import styled from 'styled-components';

const NavLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const Nav = () => {
  return(
    <header style={{ position: `fixed`, top: `0`, zIndex: `33`, width: `100%` }}>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/projects/">Projects</NavLink>
            <NavLink to="/blog/">Blog</NavLink>
            <NavLink to="/contact/">Get in touch</NavLink>
            <NavLink to="/resume/">Resume</NavLink>
          </ul>
      </header>
  )
}

export default Nav