import { createGlobalStyle, css } from "styled-components";
import reset from 'styled-reset';
import customReset from './customReset.scss';

const GlobalStyle = createGlobalStyle`
    // 기존의 css 파일 import해서 사용 가능
    ${reset};
    ${customReset};

    // 원하면 추가 가능
    html {
        font-size : 62.5%; // 1rem = 10px;
    }

    // themeProvier에 의해 제공받은 theme props 사용
    ${({ theme })=>{
        return css`
            body {
                font-family: ${theme.fonts.family.base};
                font-weight: ${theme.fonts.weight.normal};
                font-size: ${theme.fonts.size.base};
            }
        `;
    }}
`;

export default GlobalStyle;