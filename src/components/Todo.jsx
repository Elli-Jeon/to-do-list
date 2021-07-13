import React , { useContext }from 'react'
import { TodoContext } from '../context/todo-context';

// ACTIONS
import { ACTIONS } from '../context/actions';

import DisplayArea from '../styles/DisplayArea-style';

const { DisplayAreaStyle, TodoItem } = DisplayArea;

const Todo = ({todo}) => {
    console.log(todo);
    const context = useContext(TodoContext);

    const todoDelete = (e) => {
        e.preventDefault();
        console.log(e);
        context.dispatch({type : ACTIONS.TODO_DELETE, payload : { todo }});
    }
    
    return (
        <TodoItem>
            <h2>{todo.priority}</h2> 
            <p>{todo.todo}</p>
            <p>{`${todo.dueDate.year} / ${todo.dueDate.month} / ${todo.dueDate.day}`}</p>
            <button onClick={todoDelete}>삭제</button>
        </TodoItem>
    )
}

export default Todo

