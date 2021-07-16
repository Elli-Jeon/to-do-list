import styled from 'styled-components'

const SelectedDayTodoArea = styled.div`
    width : 20vw;
    height: 90rem;
    box-shadow : 1px 1px 10px;
    margin-right : 1rem;
    border-radius: 1rem;
    & .selectedDayTodoTitle{
        display : flex;
        justify-content: center;
        align-items: center;
        width : 100%;
        height : 4%;
        font-size : 2rem;
        color : white;
        background-color: black;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
`;

export default SelectedDayTodoArea;