import styled from "styled-components";

const AddTodoButton = styled.button`
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

export default AddTodoButton