import React, { useState, useContext } from "react";
import CalaendarPresenter from "./CalendarPresenter";

// context
import { TodoContext } from "../../context/index";


const CalaendarContainer = () => {
    const todoContext = useContext(TodoContext);


    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <CalaendarPresenter 
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            todoContext={todoContext}
        />
    );
}

export default CalaendarContainer;