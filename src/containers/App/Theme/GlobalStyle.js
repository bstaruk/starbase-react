import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    width: 100%;
  }

  body {
    max-width: 60rem; /* 960/16 */
    font-family: ${(props) => props.theme.fonts.default};
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.darkGray};
    font-size: 100%;
    font-weight: 400;
    line-height: 1.4;
    padding: 1rem;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
