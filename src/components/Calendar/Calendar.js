// Calendar
import "./Calendar.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CustomCalendar = ({selectedDay, setSelectedDay, todoContext}) => {


    // 이것도 분리할까하다가 이정도는 같이 있는게 직관성이 좋을 듯 해서
    const scheduledDays = [];
    todoContext.todos.map((todo)=>{
        return scheduledDays.push({...todo.dueDate, className : 'scheduled'});
    })
    console.log(scheduledDays)

    return (
        <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            customDaysClassName={
                scheduledDays
            }
        >
        </Calendar>
    );
}

export default CustomCalendar;