//ACTIONS
import { ACTIONS } from "./actions";

const checkPriority = ({todos}) => {
    const priority = [];
    // 현재보다 지났으면 out of date해주고 아니면 priority 비교 위해 push
    todos.map((todo) => {
        const compareNum = new Date(todo.dueDate.year, todo.dueDate.month-1, todo.dueDate.day).getTime() - Date.now();
        //console.log(compareNum)
        if (compareNum < 0){
            todo.priority = "Out of Date";
        } else {
            return priority.push([todo.id, compareNum]);
        }
    });
    // 정렬
    priority.sort((a,b)=>{
        return a[1] - b[1];
    })
    todos.map((todo)=>{
        for(let i = 0; i < priority.length; i++){
            if(todo.id === priority[i][0]){
                todo.priority = i+1;
            }
        }
    })
    return todos;
}

export const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.TODO_SUBMIT: 
            return {...state , todos : [...state.todos, { id : Date.now(), todo : action.payload.todo, priority : action.payload.priority, dueDate : action.payload.selectedDay }]}
        case ACTIONS.TODO_DELETE:
            return {...state, todos : state.todos.filter(todo => todo.id !== action.payload.todo.id ) }
        case ACTIONS.TODO_EDIT :
            return {...state, todos : [...state.todos.filter(todo => todo.id !== action.payload.todo.id), {...action.payload.todo, todo : action.payload.newTodo}]}
        case ACTIONS.TODO_CHECK_PRIORITY :
            checkPriority(state);
            return {...state, todos : [...state.todos]};
        default : 
            return state;
    }
}

// checkPriority 함수.
// 등록한 시간을 구함. new Date(todos.dueDate.year, todos.dueDate.month, todos.dueDate.day)
// check priority 버튼을 누르면 현재 시간 - 저위 시간. - 이면 out of date. 아니면 서로 비교해서 작은 순 부터 1..2..