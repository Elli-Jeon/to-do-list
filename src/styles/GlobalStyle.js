import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding : 0;
        margin : 0;
        box-sizing : border-box;
        list-style : none;
        text-decoration : none;
    }

    html {
        font-size : 62.5%;
    }

    ${()=>{
        return css`

        `;
    }}

`;

export default GlobalStyle;