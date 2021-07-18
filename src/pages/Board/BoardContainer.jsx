import React, { useState, useContext } from 'react'
import BoardPresenter from './BoardPresenter'

// ACTIONS & Context
import {ACTIONS} from '../../context/actions'
import { TodoContext } from '../../context/todoContext'
import DispatchContext from '../../context/dispatchContext'


const BoardContainer = () => {
    
    const todoContext = useContext(TodoContext);
    const dispatch = useContext(DispatchContext); // dispatch에 바로 가져 옴. 

    const [ todo, setTodo ] = useState("");
    const [ priority, setPriority ] = useState("Check now!");
    const d = new Date();
    const defaultSelectedDay = {year : d.getFullYear(), month : d.getMonth() + 1, day : d.getDate()}
    const [ selectedDay, setSelectedDay] = useState(defaultSelectedDay);
    console.log(selectedDay)

    // AddInput의 input의 값을 todo에 저장
    const addTodoValue = (e) => {
        setTodo(e.target.value);
    }

    // 자식 datepicker에게 줄 함수
    const changeSelectedDay = (day) => {
        setSelectedDay(day);
    }
    //console.log(dispatchContext);
    // todo를 위로 올려 줌. 
    const todoSubmit = (e) => {
        e.preventDefault();
        dispatch({ type : ACTIONS.TODO_SUBMIT, payload : { todo, priority, selectedDay }});
        setTodo('');
        setPriority("Check Now!");
    }

    const checkPriority = (e) => {
        e.preventDefault();
        dispatch({type : ACTIONS.TODO_CHECK_PRIORITY})
    }

    return (
        <BoardPresenter 
            todoContext={todoContext}
            checkPriority={checkPriority}
            todo={todo}
            todoSubmit={todoSubmit}
            addTodoValue={addTodoValue}
            changeSelectedDay={changeSelectedDay} 
        />
    )
}

export default React.memo(BoardContainer)
