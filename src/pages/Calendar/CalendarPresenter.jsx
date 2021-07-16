import React from 'react'

// components
import CalendarSection from '../../components/CalendarSection/CalendarSection';
import CalendarSelectedDayTodo from '../../components/CalendarSelectedDayTodo/CalendarSelectedDayTodo';
import Calendar from "../../components/Calendar/Calendar"



import Todo from "../../components/Todo";

const CalendarPresenter = ({selectedDay, setSelectedDay, context}) => {
     
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
