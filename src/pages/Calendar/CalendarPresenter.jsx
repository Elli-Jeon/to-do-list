import React from 'react'

// components
import CalendarSection from '../../styles/CalendarSection-style';
import CalendarSelectedDayTodo from '../../components/CalendarSelectedDayTodo/CalendarSelectedDayTodo';
import Calendar from "../../components/Calendar/Calendar"
import Todo from '../../components/Todo/index'


const CalendarPresenter = ({selectedDay, setSelectedDay, context}) => {

    return (
        <CalendarSection>
            <CalendarSelectedDayTodo>
                <div className='selectedDayTodoTitle'>이날의 할 일</div>
                {context.state.todos.map((eachTodo)=>{
                    if(selectedDay !== null && selectedDay.year === eachTodo.dueDate.year && selectedDay.month === eachTodo.dueDate.month && selectedDay.day === eachTodo.dueDate.day){
                        return <Todo key={eachTodo.id} todo={eachTodo} isCalendar={true}/>
                    }
                })}
            </CalendarSelectedDayTodo>
            <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                context={context}
            />
        </CalendarSection>
    );
}

export default CalendarPresenter;
