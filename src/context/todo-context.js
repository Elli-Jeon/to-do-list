import React from 'react';

// 초기 값
export const initialValue = {
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

// Context 생성
export const TodoContext = React.createContext(initialValue);
