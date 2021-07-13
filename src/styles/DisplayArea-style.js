import styled, { keyframes, css } from "styled-components";

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

/* 이게 왜 안되징
const calculateRotate = (num) => {
    return css`
        transform : rotate(${num})
    `;
}
*/

const TodoDeleteFade = keyframes`
    from {
        transform : scale(1.0) rotate(0deg);
    }
    to {
        transform : scale(0.1) rotate(360deg);
    }

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
    ${(props) => {
        if(props.className === 'deleted'){
            return css`
            animation: ${TodoDeleteFade} 2.5s linear;
        `}
        }
    };
`;

const DisplayArea = { DisplayAreaStyle, TodoItem }

export default DisplayArea;