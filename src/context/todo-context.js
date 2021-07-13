import React from 'react';

// 초기 값
export const initialValue = {
    todos : [
        {
            id : Date.now(),
            todo : "React 공부",
            priority : 1,
            dueDate : {
                year : 2021,
                month : 10,
                day : 1,
            },
        }
    ]
};

// Context 생성
export const TodoContext = React.createContext(initialValue);
