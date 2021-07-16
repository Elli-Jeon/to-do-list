import React, { useState, useContext } from 'react'
import MainStyle from '../styles/Main-style'

// Components
import DisplayArea from '../styles/DisplayArea-style'
import AddStyle from '../styles/AddArea-style'
import Todo from './Todo'


// ACTIONS
import {ACTIONS} from '../context/actions'
import { TodoContext } from '../context/todo-context'

// Date Picker
import DatePicker from "./DatePicker/DatePicker"

const { DisplayAreaStyle, CheckPriorityButton, Reference } = DisplayArea;
const { AddAreaStyle, AddInput, AddButton, AddAreaForm } = AddStyle;

const MainTodo = () => {

    const context = useContext(TodoContext);
    //console.log(context);
    
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
        <MainStyle>
            <DisplayAreaStyle>
                {context.state.todos.map((eachTodo)=>{
                    return (
                    <Todo key={eachTodo.id} todo={eachTodo} />
                    )
                })}
                <CheckPriorityButton onClick={checkPriority}>Check Priority</CheckPriorityButton>
            </DisplayAreaStyle>
            <AddAreaStyle>
                <AddAreaForm>
                    <label>할 일을 적어주세요!</label>
                    <AddInput onChange={addTodoValue} value={todo}/>
                    <label>마감 일을 설정해주세요!</label>
                    <DatePicker onChange={setSelectedDay} changeSelectedDay={changeSelectedDay}/>
                    {console.log(selectedDay)}
                    <AddButton onClick={todoSubmit}>Add</AddButton>
                </AddAreaForm>
            </AddAreaStyle>
            <Reference>
                <a target="_blank" href="https://icons8.com/icon/mrLvzJucXKo2/calculate">Calculate</a> icon by <a target="_blank" href="https://icons8.com">Icons8  </a>
                <a target="_blank" href="https://icons8.com/icon/9i9HlS0bGONj/pencil">Pencil</a> icon by <a target="_blank" href="https://icons8.com">Icons8  </a>
                <a target="_blank" href="https://icons8.com/icon/MbRthDvtoWcb/memo">Memo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </Reference>
        </MainStyle>
    )
}

export default React.memo(MainTodo);
