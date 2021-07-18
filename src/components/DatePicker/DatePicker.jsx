import React, { useState } from "react";
//import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "../../styles/Calendar-style.css"
import DatePicker from "react-modern-calendar-datepicker";


const App = ({ changeSelectedDay }) => {
  const [pickedDay, setPickedDay] = useState(null);
  
  
  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Select Due Date"
      value={pickedDay ? `${pickedDay.year} / ${pickedDay.month} / ${pickedDay.day} ✅`: ''}
      style={{
        width : '30rem',
        textAlign: 'center',
        padding: '1rem 1.5rem',
        fontSize: '1.5rem',
        border: '1px solid #9c88ff',
        borderRadius: '100px',
        boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
        color: '#9c88ff',
        outline: 'none',
      }}
      className="my-custom-input-class" // a styling class
    />
  )
      // changeSelectedDay는 부모에서 정의되서 내려와가지고 부모의 selected day를 바꿔줌
      // setPickedDay는 컴포넌트 안에서만 쓸 려고 사용 input의 value 값 바꿔주기 위해
  const selectedDayChange = (e) => {
    setPickedDay(e);  
    changeSelectedDay(e);
    }
  
  return (
    <DatePicker
      value={pickedDay}
      onChange={selectedDayChange}
      renderInput={renderCustomInput} // render a custom input
      shouldHighlightWeekends
    />
  );
};

export default React.memo(App);