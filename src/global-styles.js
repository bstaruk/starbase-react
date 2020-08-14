import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${(props) => props.theme.fonts.default};
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.mineshaft};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }
`;

export default GlobalStyle;
