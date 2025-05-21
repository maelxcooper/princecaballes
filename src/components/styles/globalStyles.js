import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}; 
  
  html {
    overflow-x: hidden;
    scroll-behavior: smooth; 
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }

  body {
    font-family: var(--font-sans);
    background-color: #0f172a;
    color: var(--slate);
    line-height: 1.8;
    font-size: var(--fz-md);
  }

  a {
  display: inline-block;
  transition: var(--transition);
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  }

  p {
    margin: 0px 0px 15px;
  }


`;

export default GlobalStyle;
