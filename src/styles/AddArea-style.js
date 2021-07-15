import styled, {keyframes} from "styled-components";

import pencil from "../assets/images/pencil.png"


// Area 자체 CSS
const AddAreaStyle = styled.form`
    position: absolute;
    top : 70%;
    min-width : 60%;
    min-height: 45%;
    border : 1px solid #9c88ff;
    display: flex;
    justify-content: center;
`;

const AddAreaForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    font-size : 2rem;
    position : relative;
    & img{
        position: absolute;
        top : 0;
        left : -40%;
        border-radius: 50%;
        padding : 0.5rem; 
        background: linear-gradient(#673ab7, #e53935);
        box-shadow : 2px 3px 4px;
    }
    & > * {
        margin : 0.5rem 0;
    }
    & button {
        margin-bottom : 2.5rem;
    }
`;

const pencilRotate = keyframes`
    from{
        transform: rotate(5deg);
    }
    50%{
        transform: rotate(-15deg);
    }
    to{
        transform: rotate(5deg);
    }      
`;

// 할 일 input 창 컴포넌트 생성

const AddInput = styled.input`
    width : 30rem;
    height: 4rem;
    padding : 0.8rem;
    position: relative;
    border : 1px solid #9c88ff;
    border-radius: 100px;
    box-shadow : 0 1.5rem 2rem rgba(156, 136, 255, 0.2);
    outline : none;
    //background: url(${pencil}) no-repeat right;
    &:active{
        animation: ${pencilRotate} 1s;        
    }
`;

// 생성 버튼 button
const AddButton = styled.button`
    width : 15rem;
    height : 5rem;
    font-size : 3rem;
    margin : 2.5rem auto;
    border-radius: 100px;
    background: #9c88ff;
    color :white;
    box-shadow : 0 1.5rem 2rem rgba(156, 136, 255, 0.4);
    &:hover{
        transform : scale(1.1);
    }
`;

const AddStyle = { AddAreaStyle, AddInput,  AddButton, AddAreaForm }
export default AddStyle;