import { createStore } from 'redux'
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// actions
export const FETCH_USERS_REQUEST = '/reducer/FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = '/reducer/FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = '/reducer/FETCH_USERS_FAILURE'

export const fetchUsersRequest = () => {
  return {
    type : FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type : FETCH_USERS_REQUEST,
    payload : users
  }
}
export const fetchUsersFailure = error => {
  return {
    type : FETCH_USERS_REQUEST,
    payload : error
  }
}
// reducers
const initialState = {
  loading : false,
  users : [],
  error : ''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS_REQUEST : 
      return {
        ...state,
        loading : true,
      };
    case FETCH_USERS_SUCCESS :
      return {
        loading : false,
        users : action.payload,
        error : ''
      };
    case FETCH_USERS_FAILURE :
      return {
        loading : false,
        users : [],
        error : action.payload,
      };
    default :
      return state;
  }
}


// thunk

export const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUsersRequest())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data.map(user=>user.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())