import React, { useReducer } from 'react'
// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Main from './components/Main';

// ACTIONS
export const ACTIONS = {
    TODO_SUBMIT : 'todoSubmit',
    EXAM : 'exam'
}

// reducer 함수 (컴포넌트 바깥에서 상태 관리)
const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.EXAM:
            return {...state , todos : [...state.todos, { id : Date.now(), todo : "Hi", priority : 2 }]}
        case ACTIONS.TODO_SUBMIT: 
            console.log(state);
            return {...state , todos : [...state.todos, { id : Date.now(), todo : action.payload.todo, priority : action.payload.priority }]}
        default : 
            return state;
    }
}

// 초기 값
const initialValue = {
    todos : [
        {
            id : 1,
            todo : "react 공부",
            priority : 3,
        }
    ]
};



const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initialValue);
    

    const exam = (e) => {
        e.preventDefault();
        dispatch({type : ACTIONS.EXAM})
    }

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Main dispatch = {dispatch} todos={state.todos} />
            <button onClick={exam}>dd</button>
        </div>
    )
}

export default App;

