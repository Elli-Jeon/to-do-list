// GlobalState 목표 : useReducer와 context API를 합쳐서 App.js를 깔끔하게 만들기 (0)
import React, { useReducer } from 'react'

// context, initalValue
import { TodoContext, initialValue } from './todo-context';

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
// usecontext, usereducer 같이 쓰는 법 : https://dev.to/jackent2b/the-best-couple-usecontext-usereducer-4e65
// globalstate 구성 방법 : https://github.com/academind/react-redux-vs-context/blob/context-hooks/src/context/GlobalState.js


export default GlobalState;