import { css } from 'styled-components';

export const hoverUnderlineEffect = css`

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--priColor);
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: var(--priColor);
  }

  &:hover:after {
    width: 100%;
  }

`;

export const buttonHoverEffect = css`

    position: relative;
    border: 1px solid var(--priColor);
    padding: 0.75rem 1rem;
    color: var(--priColor);
    border-radius: 4px;
    font-size: var(--fz-xs);
    line-height: 1;
    margin-left: 16px;
    transition: var(--transition);


    &:hover {
    outline: none;
    box-shadow: 3px 3px 0 0 var(--priColor);
    transform: translate(-4px, -4px);
    }
`


export const sidebarStyleEffect = css`
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    position: relative;
    letter-spacing: 0.1em;
    transition: var(--transition);

    &:hover {
    color: var(--priColor);
    transform: translateY(-3px);
    }
 
  }

  
   &::after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background: var(--lightest-slate);
    }

`


export const ulStyleEffect = css`

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
`