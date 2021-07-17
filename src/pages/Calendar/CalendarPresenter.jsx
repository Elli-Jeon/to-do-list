import React from 'react'

// components
import CalendarSection from '../../styles/CalendarSection-style';
import CalendarSelectedDayTodo from '../../components/CalendarSelectedDayTodo/CalendarSelectedDayTodo';
import Calendar from "../../components/Calendar/Calendar"
import Todo from '../../components/Todo/index'


const CalendarPresenter = ({selectedDay, setSelectedDay, todoContext}) => {

    return (
        <CalendarSection>
            <CalendarSelectedDayTodo>
                <div className='selectedDayTodoTitle'>이날의 할 일</div>
                {todoContext.todos.map((eachTodo)=>{
                    if(selectedDay !== null && selectedDay.year === eachTodo.dueDate.year && selectedDay.month === eachTodo.dueDate.month && selectedDay.day === eachTodo.dueDate.day){
                        return <Todo key={eachTodo.id} todo={eachTodo} isCalendar={true}/>
                    }
                })}
            </CalendarSelectedDayTodo>
            <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                todoContext={todoContext}
            />
        </CalendarSection>
    );
}

export default CalendarPresenter;
