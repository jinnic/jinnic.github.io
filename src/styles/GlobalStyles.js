import { createGlobalStyle } from 'styled-components';
import "fontsource-karla/400.css"
import "fontsource-karla/700.css"
import "fontsource-lora/400.css"
import "fontsource-lora/700.css"

const GlobalStyles = createGlobalStyle`

  :root {
    --white: #FFFFFF;
    --purple: #442869;
    --blue-gray: #CDD2E0;

    --gradiant: linear-gradient(100.83deg, #6530C5 5.38%, #ED50C5 52.76%, #FDB47D 91.2%);
    --background: #F4F0EB;
    --form-background: rgba(68, 40, 105, 0.1);

    --font-sans: 'Karla', -apple-system, system-ui, sans-serif;
    --font-serif: 'Lora', serif;
    
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 5px;
    --nav-height: 50px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--slate);
    color: var(--lightest-slate);
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--purple);
    font-family: var(--font-sans);
    font-size: 16px;
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: 18px;
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  .main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    padding: 150px 200px;

    @media (max-width: 1080px) {
      padding: 100px 100px;
    }
    @media (max-width: 768px) {
      padding: 35px 50px;
    }
    @media (max-width: 480px) {
      padding: 35px 25px;
    }

     
  }
  .fillHeight {
      @media (max-width: 1080px) {
        padding: 0px;
      }
      @media (max-width: 768px) {
        padding: 0px;
      }
      @media (max-width: 480px) {
        padding: 0px;
      }
    }
  section {
    margin: 0 auto;
    padding: 100px 0;
    ${'' /* max-width: 1000px; */}

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 50px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    color: var(--purple);
  }

  h1 {
    font-family: Lora;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 130%;  
    @media (max-width: 480px) {
      font-size: 32px;
    }
  }
  h2 {
    font-family: Karla;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    margin-bottom: 2em;
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  h3 {
    font-family: Karla;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  h4 {
    font-family: Lora;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  h5 {
    font-family: Karla;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
  }
  p {
    font-family: Karla;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-serif);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    z-index: -1;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.transparent {
        fill-opacity: 0.75
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    ${'' /* color: var(--purple); */}
    position: relative;
    transition: var(--transition);
    cursor: pointer;

    &:hover,
    &:focus  {
      color: var(--white);
    }

    &.inline-link {
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }


    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-serif);
    font-size: var(--fz-md);
  }
  .line {
    position: absolute;
    width: 17.71px;
    height: 4px;
    left: 0;
    top: 0;
    background-color: var(--purple);
  }
  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-serif);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-serif);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      font-family: var(--font-serif);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

//doesn't work with : export default GlobalStyle;
export {GlobalStyles};