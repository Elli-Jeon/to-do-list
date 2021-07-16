import styled, {keyframes} from "styled-components";

const inputRotate = keyframes`
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

const AddTodoInput = styled.input`
    width : 30rem;
    height: 4rem;
    padding : 0.8rem;
    position: relative;
    border : 1px solid #9c88ff;
    border-radius: 100px;
    box-shadow : 0 1.5rem 2rem rgba(156, 136, 255, 0.2);
    outline : none;
    &:active{
        animation: ${inputRotate} 1s;        
    }
`;

export default AddTodoInput