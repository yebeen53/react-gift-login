/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html, body {
        height: 100%;
        font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
        background-color: #fff;
        color: #111;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ul, ol {
        list-style: none;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
        font: inherit;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    `}
  />
);

export default GlobalStyles;
