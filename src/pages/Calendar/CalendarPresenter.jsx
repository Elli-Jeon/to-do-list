import React from 'react'
import styled from 'styled-components';

// components
import CalendarSelectedDayTodo from '../../components/CalendarSelectedDayTodo/CalendarSelectedDayTodo';
import Calendar from "../../components/Calendar/Calendar"
import Todo from '../../components/Todo/index'

const CalendarPresenter = ({selectedDay, setSelectedDay, context}) => {
    
    const CalendarSection = styled.div`
    display : flex;
    flex-direction: row;
    justify-content : center;
    align-items : center;
    min-height : 80vh;
    `;


    return (
        <CalendarSection>
            <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
            />
            <CalendarSelectedDayTodo>
                {context.state.todos.map((eachTodo)=>{
                    if(selectedDay !== null && selectedDay.year === eachTodo.dueDate.year && selectedDay.month === eachTodo.dueDate.month && selectedDay.day === eachTodo.dueDate.day){
                        return <Todo key={eachTodo.id} todo={eachTodo} />
                    }
                })}
            </CalendarSelectedDayTodo>
        </CalendarSection>
    );
}

export default CalendarPresenter;
