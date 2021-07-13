import React , { useState, useContext }from 'react'
import { TodoContext } from '../context/todo-context';

// ACTIONS
import { ACTIONS } from '../context/actions';

import DisplayArea from '../styles/DisplayArea-style';

const { DisplayAreaStyle, TodoItem } = DisplayArea;

const Todo = ({todo}) => {
    console.log(todo);
    const context = useContext(TodoContext);
    const [ edit, setEdit ] = useState(false);
    const [ newTodo, SetNewTodo ] = useState("");

    const todoDelete = (e) => {
        e.preventDefault();
        //console.log(e);
        context.dispatch({type : ACTIONS.TODO_DELETE, payload : { todo }});
    }

    const todoEdit = (e) => {
        e.preventDefault();
        SetNewTodo(e.target.value);
    }
    
    const todoEditSubmit = (e) => {
        e.preventDefault();
        setEdit(!edit);  
        if(edit){
            context.dispatch({type : ACTIONS.TODO_EDIT, payload : { todo, newTodo }})
        }     
    }

    return (
        <TodoItem>
            <h2>{todo.priority}</h2> 
            {edit? (<input placeholder={todo.todo} onChange={todoEdit}/>) : (<p>{todo.todo}</p>)}
            
            <p>{`${todo.dueDate.year} / ${todo.dueDate.month} / ${todo.dueDate.day}`}</p>
            <button onClick={todoDelete}>삭제</button>
            {edit ? (<button onClick={todoEditSubmit}>적용</button>) : (<button onClick={todoEditSubmit}>수정</button>) }
            
        </TodoItem>
    )
}

export default Todo

