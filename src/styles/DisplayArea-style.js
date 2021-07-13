import styled from "styled-components";

const DisplayAreaStyle = styled.div`
    position : absolute;
    top : 3rem;
    border : 1px solid black;
    min-width : 80%;
    min-height: 60%;
    color : white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TodoItem = styled.div`
    margin : 0.2rem;
    color : black;
    min-width : 10rem;
    min-height : 1rem;
    border : 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2 {
        margin : 0.5rem;
    }
`;

const DisplayArea = { DisplayAreaStyle, TodoItem }

export default DisplayArea;