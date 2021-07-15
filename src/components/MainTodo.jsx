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
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

// image
import memo from "../assets/images/memo.png"


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

    // todo를 위로 올려 줌. 
    const todoSubmit = (e) => {
        e.preventDefault();
        context.dispatch({ type : ACTIONS.TODO_SUBMIT, payload : { todo, priority, selectedDay }});
        setTodo('');
        setPriority(0);
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
                    <img src={memo} alt="memo"/>
                    <label>할 일을 적어주세요!</label>
                    <AddInput onChange={addTodoValue} value={todo}/>
                    <label>마감 일을 설정해주세요!</label>
                    <DatePicker 
                        value={selectedDay} 
                        onChange={setSelectedDay} 
                        inputPlaceholder="Select due Date"
                        shouldHighlightWeekends/>
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
