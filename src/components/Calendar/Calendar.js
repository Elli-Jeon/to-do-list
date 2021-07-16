// Calendar
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CustomCalendar = ({selectedDay, setSelectedDay}) => {
    return (
        <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        >
        </Calendar>
    );
}

export default CustomCalendar;