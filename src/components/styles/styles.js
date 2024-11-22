import { css } from 'styled-components';

export const hoverUnderlineEffect = css`
  position: relative;
  display: inline-block;
  text-decoration: none;

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


    &:hover {
    outline: none;
    box-shadow: 3px 3px 0 0 var(--priColor);
    transform: translate(-4px, -4px);
    }
`