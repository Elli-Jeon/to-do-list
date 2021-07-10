import styled from "styled-components";

const HeaderStyle = styled.header`
    display : flex;
    justify-content : center;
    align-items : center;
    margin-top : 1rem;
    padding-bottom : 1rem;
    border-bottom: 1px solid black;
    & button {
        padding : 2rem;
    }
`;

export default HeaderStyle;