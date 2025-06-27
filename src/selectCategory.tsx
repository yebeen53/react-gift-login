import { useTheme } from '@emotion/react';
import type { Theme } from '@/theme';
import { css } from '@emotion/react';

const themes = [
  { label: '생일', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371520241125_LQBMT.png' },
  { label: '맛있는선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371420250401_CYHOR.png' },
  { label: '직장동료', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371320250107_QWGZN.png' },
  { label: '연인', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371220250107_YMYGC.png' },
  { label: 'FOR ME', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F399320250519_CMTFF.png' },
  { label: '가벼운선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371020250102_QSNFV.png' },
  { label: '스몰럭셔리', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F378220250214_OHAQK.png' },
  { label: '명품선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F387720250324_SDCJQ.png' },
  { label: '출산 · 돌', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370720241228_QFZPM.png' },
  { label: '결혼 · 집들이', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F369720250126_OGWLG.png' },
  { label: '시원한선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370420250324_WDMHS.png' },
  { label: '합격 · 응원', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370520250127_NLVFN.png' },
  { label: '건강 · 케어', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370620250415_HENTO.png' },
  { label: '교환권', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370320250331_NPPCU.png' },
  { label: '웃긴선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370220241228_UPSAE.png' },
];

export default function GiftThemeSection() {
  const theme = useTheme() as Theme;

  const wrapperStyle = css`
    padding: ${theme.spacing.spacing5};
  `;

  const titleStyle = css`
    font-size: ${theme.typography.title2Bold.fontSize};
    font-weight: ${theme.typography.title2Bold.fontWeight};
    line-height: ${theme.typography.title2Bold.lineHeight};
    margin-bottom: ${theme.spacing.spacing4};
  `;

  const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${theme.spacing.spacing4};

    @media (max-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const itemStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    span {
      font-size: ${theme.typography.label1Regular.fontSize};
      font-weight: ${theme.typography.label1Regular.fontWeight};
      line-height: ${theme.typography.label1Regular.lineHeight};
      color: ${theme.colors.semantic.textDefault};
      margin-top: ${theme.spacing.spacing2};
    }

    img {
      width: 56px;
      height: 56px;
      object-fit: contain;
    }
  `;

  return (
    <section css={wrapperStyle}>
      <h2 css={titleStyle}>선물 테마</h2>
      <div css={gridStyle}>
        {themes.map((item) => (
          <div key={item.label} css={itemStyle}>
            <img src={item.image} alt={item.label} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
