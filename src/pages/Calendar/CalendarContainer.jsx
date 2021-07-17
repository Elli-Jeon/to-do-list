import React, { useState, useContext } from "react";
import CalaendarPresenter from "./CalendarPresenter";

// context
import { TodoContext } from "../../context/todoContext";
import DispatchContext from "../../context/dispatchContext";

const CalaendarContainer = () => {
    const todoContext = useContext(TodoContext);
    const dispatchContext = useContext(DispatchContext);

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