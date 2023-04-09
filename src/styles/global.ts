import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: ${(props) => props.theme.palette.bodyBg};
    color: ${(props) => props.theme.palette.textColor};
    font-size: ${(props) => props.theme.fontSize};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

export default GlobalStyle;
