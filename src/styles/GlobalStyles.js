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
    --text-highlight: #82F521;
    --pink: #E62EC6;

    --gradiant: linear-gradient(100.83deg, #6530C5 5.38%, #ED50C5 52.76%, #FDB47D 91.2%);
    --background: #F4F0EB;
    --form-background: rgba(68, 40, 105, 0.1);

    --font-sans: 'Karla', -apple-system, system-ui, sans-serif;
    --font-serif: 'Lora', serif;
    

    --border-radius: 5px;
    --nav-height: 60px;
    --nav-scroll-height: 70px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
    background-color: var(--text-highlight);
    color: var(--purple);
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
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
        
        img {
          user-select: none;
        }

        p{
          user-select: all;
        }
      }
    }
    .web-template{
      user-select: none;
    }    
    img {
      user-select: none;
    }

    p{
      user-select: all;
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
      padding: 85px 50px;
    }
    @media (max-width: 480px) {
      padding: 85px 25px;
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
    @media (max-width: 768px) {
      font-size: 48px;
    }
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
    fill: var(--purple);
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
  }

  .line {
    position: absolute;
    width: 17.71px;
    height: 4px;
    left: 0;
    top: 0;
    background-color: var(--purple);
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

//doesn't work with : export default GlobalStyle;
export {GlobalStyles};