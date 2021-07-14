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


const { DisplayAreaStyle, CheckPriorityButton } = DisplayArea;
const { AddAreaStyle, AddInput, PriorityInput, AddButton } = AddStyle;

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
                할 일을 적어주세요!
                <AddInput onChange={addTodoValue} value={todo} />
                마감 일을 설정해주세요!
                <DatePicker 
                    value={selectedDay} 
                    onChange={setSelectedDay} 
                    inputPlaceholder="Select a day"
                    shouldHighlightWeekends/>
                <AddButton onClick={todoSubmit}>Add</AddButton>
            </AddAreaStyle>

        </MainStyle>
    )
}

export default React.memo(MainTodo);
