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
        min-width : 440px;
    }

    body {
        max-width : 1440px;
        min-height : 1000px;
        margin : 0 auto;
    }

    a {
        color : black;
    }

    button {
        cursor : pointer
    }

    ${()=>{
        return css`

        `;
    }}

`;

export default GlobalStyle;