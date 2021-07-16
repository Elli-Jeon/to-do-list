import React, { useState, useContext } from 'react'
import BoardPresenter from './BoardPresenter'

// ACTIONS & Context
import {ACTIONS} from '../../context/actions'
import { TodoContext } from '../../context/todo-context'


const BoardContainer = () => {
    
    const context = useContext(TodoContext);

    const [ todo, setTodo ] = useState("");
    const [ priority, setPriority ] = useState("Check now!");
    const [ selectedDay, setSelectedDay] = useState(null);

    // AddInput의 input의 값을 todo에 저장
    const addTodoValue = (e) => {
        setTodo(e.target.value);
    }

    // 자식 datepicker에게 줄 함수
    const changeSelectedDay = (day) => {
        setSelectedDay(day);
    }

    // todo를 위로 올려 줌. 
    const todoSubmit = (e) => {
        e.preventDefault();
        context.dispatch({ type : ACTIONS.TODO_SUBMIT, payload : { todo, priority, selectedDay }});
        setTodo('');
        setPriority("Check Now!");
    }

    const checkPriority = (e) => {
        e.preventDefault();
        context.dispatch({type : ACTIONS.TODO_CHECK_PRIORITY})
    }

    return (
        <BoardPresenter 
            context={context}>
            checkPriority={checkPriority}
            todo={todo}
            todoSubmit={todoSubmit}
            addTodoValue={addTodoValue}
            setSelectedDay={setSelectedDay}
            changeSelectedDay={changeSelectedDay}
            
        </BoardPresenter>
    )
}

export default BoardContainer
