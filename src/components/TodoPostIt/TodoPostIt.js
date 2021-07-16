import styled, { keyframes, css} from 'styled-components'

import realpin from "../../assets/images/real-pin.png"

// 포스트잇 사라지는
const todoPostItDeleteFade = keyframes`
    from {
        transform : scale(1.0) rotate(0deg);
    }
    to {
        transform : scale(0) rotate(360deg) translate(500%,800%);
    }
`;

// 포스트잇 핀 사라지는
const todoPinDeleteFade = keyframes`
    0%{
        transform: translate(55%,-70%);
    }
    50%{
        transform: translate(55%,-100%);
    }
    60%{
        transform: scale(0);
    }
    100% {
        transform: scale(0);
    }
`;

const TodoPostIt = styled.div`
    position: relative;
    margin : 0.8rem;
    color : black;
    min-width : 10rem;
    min-height : 1rem;
    display: flex;
    flex-direction: column;
    //align-items: center;
    padding : 0.5rem;
    box-shadow: 4px 4px 4px black;
    ${({color})=>{
        if(color === "red"){
            return css`
                background: linear-gradient(#ff8a80, #f44336);
            `;
        } else if(color === "blue"){
            return css`
                background: linear-gradient(#8187ff, #42a5f5);
            `;
        } else if(color === "yellow"){
            return css`
                background: linear-gradient(#fdd835, #fdd835);
            `;
        }
    }}
    &::after{
        content : "";
        position: absolute;
        top : -25%;
        left : 45%;
        background: url(${realpin}) top no-repeat;
        background-size: 80%;
        width : 70px;
        height: 70px;
        ${({isCalendar})=>{
            if(isCalendar){
                return css`
                    display: none;
                `;
            }
        }}
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
        background : none;
        padding : 0.2rem;
        margin : 0.2rem 0;
        background-color: white;
        font-weight: 700;
        font-size : 1.5rem;
        &::after{
            content : "";
            background-color: black;
            width : 50%;
            height : 50%;
        }
        &:hover {
            transform: scale(1.1);
        }
    }
    ${(props) => {
        if(props.className === 'deleted'){
            return css`
            animation: ${todoPostItDeleteFade} 1.3s 1.2s;
            &::after{
                animation: ${todoPinDeleteFade} 2.2s ;
            }
        `}
        }
    };
`;

export default TodoPostIt;