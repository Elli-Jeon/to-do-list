import styled, { keyframes, css } from "styled-components";
import corkBoard from "../assets/images/corkBoard.jpg"

import pin from "../assets/images/pin.png"
import realpin from "../assets/images/real-pin.png"


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
        transform : scale(0) rotate(360deg) translate(500%,800%);
    }
`;

const pinDeleteFade = keyframes`
    0%{
        transform: translate(50%,-70%);
    }
    50%{
        transform: translate(50%,-100%);
    }
    60%{
        transform: scale(0);
    }
    100% {
        transform: scale(0);
    }
`;

const TodoItem = styled.div`
    position: relative;
    margin : 0.8rem;
    color : black;
    min-width : 10rem;
    min-height : 1rem;
    display: flex;
    flex-direction: column;
    //align-items: center;
    padding : 0.5rem;
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
    &::after{
        content : "";
        position: absolute;
        top : 0;
        transform: translate(50%,-70%);
        //background: url(${pin}) center;
        background: url(${realpin}) center no-repeat;
        background-size: contain;
        width : 70px;
        height: 70px;
    }
    & h2 {
        margin : 0.5rem;
        font-size : 3rem;
        border-bottom: 1px solid black;
    }
    & p {
        font-size : 2rem;
    }
    & button {
        display: inline;
        background : none;
        padding : 0.2rem;
        margin : 0.2rem 0;
        background-color: white;
        &::after{
            content : "";
            background-color: black;
            width : 50%;
            height : 50%;
        }
    }
    ${(props) => {
        if(props.className === 'deleted'){
            return css`
            animation: ${TodoDeleteFade} 1.3s 1.2s;
            &::after{
                animation: ${pinDeleteFade} 2.2s ;
            }
        `}
        }
    };
`;

const DisplayArea = { DisplayAreaStyle, TodoItem, CheckPriorityButton }

export default DisplayArea;