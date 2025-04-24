import { css } from "styled-components";

export const hoverUnderlineEffect = css`
  &:after {
    content: "";
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
`;

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
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background: var(--lightest-slate);
  }
`;

export const ulStyleEffect = css`
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
`;

export const sectionHeading = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;

  &::before {
    position: relative;
    bottom: 4px;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--priColor);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
  }

  &::after {
    position: relative;
    content: "";
    width: 18.75rem;
    height: 1px;
    background: var(--lightest-navy);
    margin-left: 20px;
    top: 2px;
  }

  @media (max-width: 768px) {
    &::after {
      width: 100%;
    }
  }
`;

export const anchorEffect = `
    position: relative;
    color: var(--priColor);


    &::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: 4px;
    height: 1px;
    background: #00ffaa;
    transition: 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
`;


export const styledImage = css`
   --s: 20px;
  --b: 1px;
  --w: 300px;

  width: var(--w);
  aspect-ratio: 1;
  object-fit: cover;
  padding: calc(2 * var(--s));
  --_g: var(--priColor) var(--b), #0000 0 calc(100% - var(--b)),
    var(--priColor) 0;
  background: linear-gradient(var(--_g)) 50%/100% var(--_i, 100%) no-repeat,
    linear-gradient(90deg, var(--_g)) 50% / var(--_i, 100%) 100% no-repeat;
  outline: calc(var(--w) / 2) solid #0009;
  outline-offset: calc(var(--w) / -2 - 2 * var(--s));
  transition: 0.4s;
  cursor: pointer;

  &:hover {
  outline: var(--b) solid var(--priColor);
  outline-offset: calc(var(--s) / -2);
  --_i: calc(100% - 2 * var(--s));
  transform: scale(1.1);
}
`;
