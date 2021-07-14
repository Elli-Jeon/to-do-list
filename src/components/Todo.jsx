import React , { useState, useContext, useEffect }from 'react'
import { TodoContext } from '../context/todo-context';

// ACTIONS
import { ACTIONS } from '../context/actions';

import DisplayArea from '../styles/DisplayArea-style';

const { DisplayAreaStyle, TodoItem } = DisplayArea;

const Todo = ({todo}) => {
    //console.log(todo);
    const context = useContext(TodoContext);
    const [ edit, setEdit ] = useState(false);
    const [ newTodo, SetNewTodo ] = useState();
    const [ deleted, setDeleted ] = useState(false);
    const [ color, setColor ] = useState("red");

    const todoDelete = (e) => {
        e.preventDefault();
        //console.log(e);
        setDeleted(true);
        // setTimeout 안 걸면 바로 상태 변화로 상위 MainTodo에서 map돌 때 삭제되어 버림.
       
    }

    // setTimeOut useEffect에 담아야 함.
    useEffect(()=>{
        if(deleted === true){
            setTimeout(()=>{
                context.dispatch({type : ACTIONS.TODO_DELETE, payload : { todo }});
                
                return () => setDeleted(false); // cleanUp을 함수로 걸어주었기(비동기) 때문에, 사라진 컴포넌트의 deleted를 참조하지 않게 되어서 에러 해결
            },3000) 
        }
    },[deleted]); // context, todo를 넣어버리면 context, todo가 변하기만 해도 삭제 작업 실행

    // 등록하는 todo의 color 지정
    useEffect(()=>{
        const colorRandNum = Math.random();
        if(colorRandNum <= 0.3){
            setColor("blue");
        } else if (colorRandNum >= 0.7){
            setColor("yellow");
        }
    },[])

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
        /*삭제 버튼 클릭하면 className 들어와서 className에 수동으로 들어가서(토글형식), styled-components 부분에서 props.className으로 조회 */
    return (
        <TodoItem className={deleted? 'deleted' : null} color={color}>
            <h2>{todo.priority}</h2> 
            {edit? (<input placeholder={todo.todo} onChange={todoEdit}/>) : (<p>{todo.todo}</p>)}
            
            <p>{`${todo.dueDate.year} / ${todo.dueDate.month} / ${todo.dueDate.day}`}</p>
            <button onClick={todoDelete}>삭제</button>
            {edit ? (<button onClick={todoEditSubmit}>적용</button>) : (<button onClick={todoEditSubmit}>수정</button>) }
        </TodoItem>
    )
}

export default Todo

