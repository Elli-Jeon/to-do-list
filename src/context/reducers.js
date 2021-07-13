//ACTIONS
import { ACTIONS } from "./actions";

export const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.TODO_SUBMIT: 
            return {...state , todos : [...state.todos, { id : Date.now(), todo : action.payload.todo, priority : action.payload.priority, dueDate : action.payload.selectedDay }]}
        case ACTIONS.TODO_DELETE:
            return {...state, todos : state.todos.filter(user => user.id !== action.payload.todo.id ) }
        default : 
            return state;
    }
}
