import styled from "styled-components";

const HeaderStyle = styled.header`
    display : flex;
    flex-direction : row;
    flex-wrap: nowrap;
    justify-content : space-between;
    align-items : flex-end;
    margin-top : 1rem;
    border-bottom: 1px solid black;
    min-width : 420px;
    & a h1 {
        font-size : 5rem;
    }
`;

const NavStyle = styled.nav`
    display : flex;
    font-size : 3rem;
    & > * {
        margin : 0.5rem 1rem 0 1rem;
    }
`;

const TotalHeaderStyle = { HeaderStyle, NavStyle }

export default TotalHeaderStyle;