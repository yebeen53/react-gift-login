import { css} from '@emotion/react';
import useCustomTheme from './useCustomTheme';
import type { Theme } from '@/theme';
import { useSearchParams } from 'react-router-dom';
import Button from '@/Button';

const tabs = ['전체', '여성이', '남성이', '청소년이'];
const subTabs = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  brand: 'BBQ',
  name: 'BBQ',
  price: 29000,
  image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
}));


const sectionStyle = (theme:Theme)=>css`
padding: ${theme.spacing.spacing5};
`;


const titleStyle= (theme:Theme)=>css`
font-size: ${theme.typography.title1Bold.fontSize};
font-weight: ${theme.typography.title1Bold.fontWeight};
margin-bottom: ${theme.spacing.spacing4};
`;

const tabsStyle= (theme:Theme)=>css`
display: flex;
gap: ${theme.spacing.spacing2};
margin-bottom: ${theme.spacing.spacing3};
`;

const subTabContainer =(theme:Theme)=> css`
display: flex;
justify-content: space-around;
margin-bottom: ${theme.spacing.spacing4};
font-size: 14px;
`;

const gridStyle = (theme:Theme)=>css`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: ${theme.spacing.spacing4};
`;

const cardStyle = (theme:Theme)=>css`
position: relative;
border-radius: 8px;
overflow: hidden;
background: white;
padding: ${theme.spacing.spacing2};
text-align: center;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const rankBadge = () => css`
position: absolute;
top: 8px;
left: 8px;
background-color: red;
color: white;
font-size: 12px;
width: 24px;
height: 24px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
`;

const imageStyle = (theme:Theme)=>css`
width: 100%;
height: auto;
margin-bottom: ${theme.spacing.spacing2};
`;

const brandStyle = (theme:Theme)=>css`
font-size: 12px;
color: ${theme.colors.gray400};
`;

const nameStyle = css`
font-weight: 500;
margin-top: 2px;
`;

const priceStyle = css`
font-weight: bold;
margin-top: 4px;
`;
const more=(theme:Theme)=>css`
border:1px solid ${theme.colors.semantic.borderDefault};
border-radius: 10px;
display:flex;
align-items: center;
justify-content: center;
padding:5px;
`

const GiftRanking = () => {
  const theme = useCustomTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTab = searchParams.get('gender') ?? '전체';
  const selectedSubTab = searchParams.get('category') ?? '받고 싶어한';

  const onTabClick = (tab: string) => {
    setSearchParams({ gender: tab, category: selectedSubTab });
  };

  const onSubTabClick = (subTab: string) => {
    setSearchParams({ gender: selectedTab, category: subTab });
  };

  return (
    <section css={sectionStyle(theme)}>
      <h2 css={titleStyle(theme)}>실시간 급상승 선물랭킹</h2>

      <div css={tabsStyle(theme)}>
        {tabs.map((tab) => (
          <Button
          key={tab}
          selected={tab === selectedTab}
          baseColor={theme.colors.blue400}
          selectedColor={theme.colors.blue900}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </Button>
        ))}
      </div>

      <div css={subTabContainer(theme)}>
        {subTabs.map((subTab) => (
          <Button
            key={subTab}
            onClick={() => onSubTabClick(subTab)}
            selected={subTab===selectedSubTab}
            baseColor={theme.colors.blue400}
            selectedColor={theme.colors.blue900}
            transparent
          >
            {subTab}
          </Button>
        ))}
      </div>

      <div css={gridStyle(theme)}>
        {products.map((item) => (
          <div key={item.id} css={cardStyle(theme)}>
            <div css={rankBadge}>{item.id}</div>
            <img src={item.image} alt={item.name} css={imageStyle(theme)} />
            <div css={brandStyle(theme)}>{item.brand}</div>
            <div css={nameStyle}>{item.name}</div>
            <div css={priceStyle}>{item.price.toLocaleString()} 원</div>
          </div>
        ))}
      </div>

      <div css={more(theme)}>더보기</div>
    </section>
  );
}; export default GiftRanking;

