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
    0% {
        transform : scale(1.0) rotate(36deg);
        
    }
    10% {
        transform : scale(0.9) rotate(72deg);
   
    }
    20% {
        transform : scale(0.8) rotate(108deg)
   
    }
    30% {
        transform : scale(0.7) rotate(142deg)
     
    }
    40% {
        transform : scale(0.6) rotate(178deg)
 
    }
    50% {
        transform : scale(0.5) rotate(216deg)
  
    }
    60% {
        transform : scale(0.4) rotate(252deg)

    }
    70% {
        transform : scale(0.3) rotate(280deg)
;
    }
    80% {
        transform : scale(0.2)  rotate(316deg)

    }
    90% {
        transform : scale(0.1) rotate(342deg)
    }
    100% {
        transform : scale(0.1) rotate(360deg)
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
            animation: ${TodoDeleteFade} 3s linear;
        `}
        }
    };
`;

const DisplayArea = { DisplayAreaStyle, TodoItem }

export default DisplayArea;