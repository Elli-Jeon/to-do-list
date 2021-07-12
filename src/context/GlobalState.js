// GlobalState 목표 : useReducer와 context API를 합쳐서 App.js를 깔끔하게 만들기 (0)
// 컴포넌트의 Main.jsx 내부의 여러 함수들을 가져와서 공급시키기. 
import React, { useReducer } from 'react'

// context, initalValue
import { TodoContext, initialValue } from './todo-context';

// ACTIONS
import { ACTIONS } from './actions';

// reducer
import { reducer } from './reducers';

const GlobalState = props => {
    const [ state, dispatch ] = useReducer(reducer, initialValue);

    return (
        <TodoContext.Provider value={{
            state : state,
            dispatch : dispatch,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}
// props.children 설명글 : https://stackoverflow.com/questions/49706823/what-is-this-props-children-and-when-you-should-use-it

export default GlobalState;