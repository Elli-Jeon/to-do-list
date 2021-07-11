import styled from "styled-components";

const DisplayAreaStyle = styled.div`
    position : absolute;
    top : 3rem;
    background-color : black;
    min-width : 80%;
    min-height: 70%;
    color : white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Todo = styled.div`
    color : white;
    width : 100px;
    height : 100px;
`;

const DisplayArea = { DisplayAreaStyle, Todo }

export default DisplayArea;