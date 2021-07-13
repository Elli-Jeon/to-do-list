import styled from "styled-components";

const HeaderStyle = styled.header`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin-top : 1rem;
    padding-bottom : 1rem;
    border-bottom: 1px solid black;
    & button {
        padding : 2rem;
    }
`;

const NavStyle = styled.nav`
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 5rem;
    & > * {
        margin : 0.5rem 1rem;
    }
`;

const TotalHeaderStyle = { HeaderStyle, NavStyle }

export default TotalHeaderStyle;