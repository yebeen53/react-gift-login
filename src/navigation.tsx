/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from './theme';

const Navibar = () => {
  const theme = useTheme() as Theme;

  const container = css`
    max-width: 720px;
    height: 50px;
    background: ${theme.colors.semantic.backgroundDefault};
    display: flex;
    align-items: center;
    justify-content: space-between; /* 세 요소 좌우 배치 */
    margin: 0 auto;
    padding: 0 16px;
  `;

  const navstyle = css`
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
    color: ${theme.colors.semantic.textDefault};
  `;

  const per = css`
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aLBdZ-dWr4tVuP38je4WW2WVGphxmiINHA&s');
    background-size: contain;
    background-position: center;
    `


  const pre = css`
    cursor: pointer;
  `;

  const preStyle = css`
    width: 40px;
    height: 40px;
    color: black;
    font-size: 25px;
  `;

  return (
    <div css={container}>
      <div css={pre}>
        <div css={preStyle}>&lt;</div>
      </div>

      <nav css={navstyle}>선물하기</nav>

      <div css={per}></div>
    </div>
  );
};

export default Navibar;
