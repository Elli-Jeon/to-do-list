import React, { useReducer } from 'react'
// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Main from './components/Main';
import GlobalState from './context/GlobalState';

// reducer 함수 (컴포넌트 바깥에서 상태 관리)
import { initialValue } from './context/todo-context';
import { reducer } from './context/reducers'

const App = () => {
   
    return (
        <div>
            <GlobalState >
                <GlobalStyle />
                <Header />
                <Main />
            </GlobalState>
        </div>
    )
}

export default App;

