import styled from "styled-components";
import memo from "../../assets/images/memo.png"


const AddTodoFormContainer = styled.form`
    position: relative;
    top : 70%;
    min-width : 600px;
    min-height: 400px;
    margin-top : 6rem;
    border : 1px solid #9c88ff;
    display: flex;
    justify-content: center;
    &::before{
        content : "";
        width : 6rem;
        height :6rem;  
        background: linear-gradient(#673ab7, #e53935);
        z-index : 1;
        padding : 0.5rem;
        border-radius: 50%;
        position: absolute;
        box-shadow : 2px 3px 4px;
        top : -10%;
    }
    &::after{
        content : "";
        width : 5rem;
        height :5rem;
        border-radius: 50%;
        position : absolute;
        padding : 0.5rem; 
        z-index : 2;
        background: url(${memo}) no-repeat center;
        top : -8%;
    }
`;

export default AddTodoFormContainer