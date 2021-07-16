import React, { useState, useContext } from "react";

// Component
import Todo from "./Todo";

// Calendar
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

// CSS
import CalendarAreaStyle from "../styles/CalendarArea-style";
import { TodoContext } from "../context/todo-context";

const { CalendarArea, SelectedDayTodoArea } = CalendarAreaStyle;

const MainCalendar = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const context = useContext(TodoContext);

    return (
        <CalendarArea>
            <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
            />
            <SelectedDayTodoArea>
                {context.state.todos.map((eachTodo)=>{
                    if(selectedDay !== null && selectedDay.year === eachTodo.dueDate.year && selectedDay.month === eachTodo.dueDate.month && selectedDay.day === eachTodo.dueDate.day){
                        return <Todo key={eachTodo.id} todo={eachTodo} />
                    }
                })}
            </SelectedDayTodoArea>
        </CalendarArea>
    )
}

export default MainCalendar
