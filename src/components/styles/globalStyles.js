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
`;

export default GlobalStyle;
