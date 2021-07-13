import styled from "styled-components";

// Area 자체 CSS
const AddAreaStyle = styled.form`
    position: absolute;
    top : 70%;
    min-width : 60%;
    min-height: 45%;
    border : 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size : 2rem;
`;

// 할 일 input 창 컴포넌트 생성

const AddInput = styled.input`
    width : 30rem;
    height: 5rem;
    padding : 0.5rem;
    margin : 1rem;
`;

// 해야하는 우선순위 input 창 

const PriorityInput = styled.input`
    width : 30rem;
    height: 5rem;
    padding : 0.5rem;
    margin : 1rem;
`;

// 생성 버튼 button

const AddButton = styled.button`
    width : 10rem;
    height : 5rem;
    font-size : 3rem;
`;

const AddStyle = { AddAreaStyle, AddInput, PriorityInput, AddButton }

export default AddStyle;