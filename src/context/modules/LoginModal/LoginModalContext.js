// action
export const MODAL_ACTION = {
    MODAL_TOGGLE : 'MODAL_TOGGLE'
}

// reducer
export const modalReducer = (state, action) => {
    switch(action.type){
        case MODAL_ACTION.MODAL_TOGGLE : 
            return {
                ...state,
                state : !(state)
            }
        default : 
            return state;
    }
}

