import { css } from "@emotion/core";

export default css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100vh;
    margin: 0;
    color: #fff;
    background: #000;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
`;
