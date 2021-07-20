import React , { useState, useContext, useEffect }from 'react'
import TodoPresenter from './TodoPresenter'

// Actions & Container
import { TODO_ACTIONS } from '../../context/modules/Todo/TodoContext';
import TodoDispatchContext from '../../context/index';


const TodoContainer = ({todo, isCalendar}) => {
    

    const todoDispatch = useContext(TodoDispatchContext);
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
                todoDispatch({type : TODO_ACTIONS.TODO_DELETE, payload : { todo }});
                
                return () => setDeleted(false); // cleanUp을 함수로 걸어주었기(비동기) 때문에, 사라진 컴포넌트의 deleted를 참조하지 않게 되어서 에러 해결
            },2500) 
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
            todoDispatch({type : TODO_ACTIONS.TODO_EDIT, payload : { todo, newTodo }})
        }     
    }

    return (
        <TodoPresenter 
            todo={todo}
            edit={edit}
            color={color}
            deleted={deleted}
            todoEdit={todoEdit}
            todoEditSubmit={todoEditSubmit}
            todoDelete={todoDelete}
            isCalendar={isCalendar}
        />
    )
}

export default TodoContainer
