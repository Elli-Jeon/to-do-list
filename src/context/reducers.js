//ACTIONS
import { ACTIONS } from "./actions";

export const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.EXAM:
            return {...state , todos : [...state.todos, { id : Date.now(), todo : "Hi", priority : 2 }]}
        case ACTIONS.TODO_SUBMIT: 
            console.log(state);
            return {...state , todos : [...state.todos, { id : Date.now(), todo : action.payload.todo, priority : action.payload.priority }]}
        default : 
            return state;
    }
}
