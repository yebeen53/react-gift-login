/**@jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { Theme } from './theme';


const Navibar=()=>{
    const theme = useTheme() as Theme;
    const navstyle=`
            max-width:720px;
            height: auto;
            background:${theme.colors.semantic.kakaoYellow};
            display:flex;
            align-items:center;
            color:${theme.colors.gray1000};
            margin: 0 auto;`

    return (<>
        <nav>
            css={navstyle}
            </nav>
                선물하기
    
    </>)

}; export default Navibar;