import React from 'react'

import TodoPostIt from '../TodoPostIt/TodoPostIt';

const TodoPresenter = ({todo, edit, color, deleted, todoEdit, todoEditSubmit, todoDelete, isCalendar}) => {
    return (
        <TodoPostIt className={deleted? 'deleted' : null} color={color} isCalendar={isCalendar}>
            <h2>{todo.priority}</h2> 
            {edit? (<input placeholder={todo.todo} onChange={todoEdit}/>) : (<p>{todo.todo}</p>)}
            
            <p>{`${todo.dueDate.year} / ${todo.dueDate.month} / ${todo.dueDate.day}`}</p>
            {edit ? (<button onClick={todoEditSubmit}>적용</button>) : (<button onClick={todoEditSubmit}>수정</button>) }
            <button onClick={todoDelete}>삭제</button>
        </TodoPostIt>
    )
}

export default TodoPresenter;
