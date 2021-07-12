import React, { useState } from 'react'
import MainStyle from '../styles/Main-style'

// Components
import DisplayArea from '../styles/DisplayArea-style'
import AddStyle from '../styles/AddArea-style'

// ACTIONS
import {ACTIONS} from '../context/actions'

const { DisplayAreaStyle, Todo } = DisplayArea;
const { AddAreaStyle, AddInput, PriorityInput, AddButton } = AddStyle;

const Main = ({ dispatch, todos }) => {
    const [ todo, setTodo ] = useState("");
    const [ priority, setPriority ] = useState(0);

    // AddInput의 input의 값을 todo에 저장
    const addTodoValue = (e) => {
        setTodo(e.target.value);
    }

    // PriorityInput의 input 값을 priority에 저장
    const addPriorityValue = (e) => {
        setPriority(e.target.value);
    }

    // todo를 위로 올려 줌. 
    const todoSubmit = (e) => {
        e.preventDefault();
        dispatch({ type : ACTIONS.TODO_SUBMIT, payload : { todo, priority }});
        setTodo('');
        setPriority(0);
    }

    return (
        <MainStyle>
            <DisplayAreaStyle>
                {todos.map((todo)=>{
                    return (
                    <Todo key={todo.id}>
                        <h2>{todo.priority}</h2> 
                        <p>{todo.todo}</p>
                    </Todo>
                    )
                })}
            </DisplayAreaStyle>
            <AddAreaStyle>
                할 일을 적어주세요!
                <AddInput onChange={addTodoValue} value={todo} />
                우선 순위를 설정해주세요!
                <PriorityInput onChange={addPriorityValue} value={priority}/>
                <AddButton onClick={todoSubmit}>Add</AddButton>
            </AddAreaStyle>
        </MainStyle>
    )
}

export default React.memo(Main);
