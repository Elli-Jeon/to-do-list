import styled, { keyframes, css } from "styled-components";
import corkBoard from "../assets/images/corkBoard.jpg"

const DisplayAreaStyle = styled.div`
    position : absolute;
    top : 3rem;
    min-width : 80%;
    min-height: 60%;
    color : white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: url(${corkBoard}) no-repeat center;
    background-size: cover;
`;

const CheckPriorityButton = styled.button`
    position : absolute;
    top : 1rem;
    right : 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TodoDeleteFade = keyframes`
    from {
        transform : scale(1.0) rotate(0deg);
    }
    to {
        transform : scale(0.1) rotate(360deg);
    }

`;

const TodoItem = styled.div`
    margin : 0.8rem;
    color : black;
    ${({color})=>{
        if(color === "red"){
            return css`
                background: linear-gradient(#ff6f60, #e57373);
            `;
        } else if(color === "blue"){
            return css`
                background: linear-gradient(#8187ff, #42a5f5);
            `;
        } else if(color === "yellow"){
            return css`
                background: linear-gradient(#ffeb3b, #fdd835);
            `;
        }
    }} 
    min-width : 10rem;
    min-height : 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding : 0.5rem;
    & h2 {
        margin : 0.5rem;
        font-size : 3rem;
        border-bottom: 1px solid black;
    }
    & p {
        font-size : 2rem;
    }
    
    ${(props) => {
        if(props.className === 'deleted'){
            return css`
            animation: ${TodoDeleteFade} 2.5s linear;
        `}
        }
    };
`;

const DisplayArea = { DisplayAreaStyle, TodoItem, CheckPriorityButton }

export default DisplayArea;