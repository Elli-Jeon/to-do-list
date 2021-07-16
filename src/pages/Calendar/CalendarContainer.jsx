import React, { useState, useContext } from "react";
import CalaendarPresenter from "./CalendarPresenter";

// context
import { TodoContext } from "../../context/todo-context";

const CalaendarContainer = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const context = useContext(TodoContext);

    return (
        <CalaendarPresenter 
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            context={context}
        />
    );
}

export default CalaendarContainer;