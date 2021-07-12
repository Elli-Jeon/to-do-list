import React, { useReducer } from 'react'
// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Main from './components/Main';

// ACTIONS
import { ACTIONS } from './context/actions';

// reducer 함수 (컴포넌트 바깥에서 상태 관리)
import { initialValue } from './context/todo-context';
import { reducer } from './context/reducers'

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initialValue);
    


    return (
        <div>
            <GlobalStyle />
            <Header />
            <Main dispatch = {dispatch} todos={state.todos} />
        </div>
    )
}

export default App;

