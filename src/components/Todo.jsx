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
    const [ newTodo, SetNewTodo ] = useState();
    const [ deleted, setDeleted ] = useState(false);

    const todoDelete = (e) => {
        e.preventDefault();
        //console.log(e);
        setDeleted(true);
        // setTimeout 안 걸면 바로 상태 변화로 상위 MainTodo에서 map돌 때 삭제되어 버림.
        setTimeout(()=>{
            context.dispatch({type : ACTIONS.TODO_DELETE, payload : { todo }});
            setDeleted(false);
        },3000)        
    }

    // setTimeOut useEffect에 담아야 함.

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
            /*삭제 버튼 클릭하면 className 들어와서 className에 수동으로 들어가서, styled-components 부분에서 props.className으로 조회 */
    return (
        <TodoItem className={deleted? 'deleted' : null}>
            <h2>{todo.priority}</h2> 
            {edit? (<input placeholder={todo.todo} onChange={todoEdit}/>) : (<p>{todo.todo}</p>)}
            
            <p>{`${todo.dueDate.year} / ${todo.dueDate.month} / ${todo.dueDate.day}`}</p>
            <button onClick={todoDelete}>삭제</button>
            {edit ? (<button onClick={todoEditSubmit}>적용</button>) : (<button onClick={todoEditSubmit}>수정</button>) }
            
        </TodoItem>
    )
}

export default Todo

