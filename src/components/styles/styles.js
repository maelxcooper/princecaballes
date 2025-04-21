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
  width: 300px;
  max-width: calc(100% - 60px);
  background: #fffbaf;
  position: relative;
  border: 2px solid #111;

  &::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 20px;
  left: 20px;
  border-radius: inherit;
  background: repeating-linear-gradient(
    45deg,
    #d4c481,
    #d4c481 2px,
    transparent 2px,
    transparent 6px
  );
  transition: all 0.3s ease;
}

  }
`;
