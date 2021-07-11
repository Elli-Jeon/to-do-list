import React, { useReducer } from 'react'
// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Main from './components/Main';

// ACTIONS
export const ACTIONS = {
    TODO_SUBMIT : 'todoSubmit',
}

// reducer 함수 (컴포넌트 바깥에서 상태 관리)
const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.TODO_SUBMIT :
            return [...state, { id : Date.now(), todo : action.payload.todo, priority : action.payload.priority }];
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
    
    console.log(state);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Main dispatch = {dispatch} todos={state.todos} />
        </div>
    )
}

export default App;

