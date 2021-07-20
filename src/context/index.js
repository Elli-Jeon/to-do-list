// useReducer와 context API를 합쳐서 App.js를 깔끔하게 만들기

import React, { useReducer } from 'react'
//reducer
import { todoReducer } from './modules/Todo/TodoContext';
import { modalReducer } from './modules/LoginModal/LoginModalContext';

// todoInitialValue 와todocontext, dispatchcontext 생성
const initialValue = {
    todos : [
        {
            id : Date.now(),
            todo : "React 공부",
            priority : 1,
            dueDate : {
                day : 1,
                month : 10,
                year : 2021,
            },
        }
    ]
};
export const TodoContext = React.createContext(initialValue);
export const TodoDispatchContext = React.createContext();

// loginmodalInitailValue와 context 생성
const isModalOpened = false;
export const LoginModalContext = React.createContext(isModalOpened);


const GlobalState = props => {
    const [ state, dispatch ] = useReducer(todoReducer, initialValue);
    const [ isModalOpened, isModalOpenedToggle ] = useReducer(modalReducer, false);

    return (
        <TodoContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <LoginModalContext.Provider value={{isModalOpened, isModalOpenedToggle}}>
                    {props.children}
                </LoginModalContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}

export default GlobalState;