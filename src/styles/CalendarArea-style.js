import styled from 'styled-components'

const CalendarArea = styled.div`
    display : flex;
    flex-direction: row;
    justify-content : center;
    align-items : center;
    min-height : 80vh;
`;

const SelectedDayTodoArea = styled.div`
    width : 40vw;
    height: 50vh;
    border : 1px solid black;
    margin-left: 8vw;
`;



const CalendarAreaStyle = { CalendarArea, SelectedDayTodoArea };

export default CalendarAreaStyle;