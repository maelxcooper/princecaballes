// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import variables from './variables'; 

const GlobalStyle = createGlobalStyle`
  ${variables}; 

  body {
    font-family: var(--font-sans);
    background: var(--bodyColor);
  }
`;

export default GlobalStyle;
