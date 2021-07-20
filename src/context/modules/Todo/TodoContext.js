// actions
export const TODO_ACTIONS = {
    TODO_SUBMIT : 'todoSubmit',
    TODO_DELETE : 'todoDelete',
    TODO_EDIT : 'todoEdit',
    TODO_CHECK_PRIORITY : 'todoCheckPriority'
}

// reducer

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


export const todoReducer = (state, action) => {
    switch(action.type){
        case TODO_ACTIONS.TODO_SUBMIT: 
            return {
                ...state,
                 todos : [
                    ...state.todos, {
                        id : Date.now(), 
                        todo : action.payload.todo, 
                        priority : action.payload.priority, 
                        dueDate : action.payload.selectedDay 
                    }
                ]
            }
        case TODO_ACTIONS.TODO_DELETE:
            return {
                ...state, 
                todos : state.todos.filter(todo => todo.id !== action.payload.todo.id)
            }
        case TODO_ACTIONS.TODO_EDIT :
            return {...state, 
                todos : [
                    ...state.todos.filter(todo => todo.id !== action.payload.todo.id), {
                        ...action.payload.todo,
                        todo : action.payload.newTodo
                    }
                ]
            }
        case TODO_ACTIONS.TODO_CHECK_PRIORITY :
            checkPriority(state);
            return {
                ...state, 
                todos : [
                    ...state.todos
                ]
            };
        default : 
            return state;
    }
}

