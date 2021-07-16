import styled from "styled-components";

const AddTodoButton = styled.button`
    width : 15rem;
    height : 5rem;
    font-size : 3rem;
    margin : 2.5rem auto;
    border-radius: 100px;
    background: #9c88ff;
    color :white;
    box-shadow : 1rem 1.5rem 3rem rgba(156, 136, 255, 0.5);
    &:hover{
        transform : scale(1.1);
    }
`;

export default AddTodoButton