import React from 'react'

// components
import CalendarSection from '../../styles/CalendarSection-style';
import CalendarSelectedDayTodo from '../../components/CalendarSelectedDayTodo/CalendarSelectedDayTodo';
import Calendar from "../../components/Calendar/Calendar"
import Todo from '../../components/Todo/index'


const CalendarPresenter = ({selectedDay, setSelectedDay, context}) => {

    return (
        <CalendarSection>
            <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                context={context}
            />
            <CalendarSelectedDayTodo>
                {context.state.todos.map((eachTodo)=>{
                    if(selectedDay !== null && selectedDay.year === eachTodo.dueDate.year && selectedDay.month === eachTodo.dueDate.month && selectedDay.day === eachTodo.dueDate.day){
                        return <Todo key={eachTodo.id} todo={eachTodo} isCalendar={true}/>
                    }
                })}
            </CalendarSelectedDayTodo>
        </CalendarSection>
    );
}

export default CalendarPresenter;
