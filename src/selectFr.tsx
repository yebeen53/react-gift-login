/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from './theme';
import React from 'react';

const SelectFr: React.FC = () => {
  const theme = useTheme() as Theme;

  const containerStyle = css`
    padding: ${theme.spacing.spacing4};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.spacing4};
    height: 80px;
  `;
  const friendBoxStyle = css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.spacing2};
    padding: ${theme.spacing.spacing2};
    border-radius: 8px;
  `;

  const plusCircleStyle = css`
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.semantic.kakaoYellow};
    color: black;
    font-size: 25px;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const bannerStyle = css`
    background-color: ${theme.colors.semantic.backgroundDefault};
    padding: ${theme.spacing.spacing2};
    font-size: ${theme.typography.label2Regular.fontSize};
    border-radius: 8px;
  `;

  return (
    <div css={containerStyle}>
      <div css={friendBoxStyle}>
        <div css={plusCircleStyle}>+</div>
        <span>선물할 친구를 선택해 주세요.</span>
      </div>

      <div css={bannerStyle}>
      </div>
    </div>
  );
};

export default SelectFr;
