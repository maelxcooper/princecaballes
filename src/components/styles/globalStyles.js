import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables}; 
  
  html {
    overflow-x: hidden;
  }

  body {
    font-family: var(--font-sans);
    color: var(--slate);
  }

  a {
  display: inline-block;
  transition: var(--transition);
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  }
`;

export default GlobalStyle;
