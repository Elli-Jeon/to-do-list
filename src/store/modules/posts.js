import * as PostAPI from '../api/posts'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_ERROR = 'GET_POST_ERROR'

export const getPosts = () => {
  return async function(dispatch){
    try {
      const posts = await PostAPI.getPosts()
      dispatch({type : GET_POSTS_SUCCESS, posts})
    } catch(e) {
      dispatch({type : GET_POSTS_ERROR, error : e})
    }
  }
}

export const getPost = id => async dispatch => {
  dispatch({type : GET_POST})
  try {
    const post = await PostAPI.getPostById(id)
    dispatch({type : GET_POST_SUCCESS, post})
  } catch(e) {
    dispatch({type : GET_POST_ERROR, error : e})
  }
}

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null
  },
  post: {
    loading: false,
    data: null,
    error: null
  }
};

export default function posts(state = initialState, action){
  switch(action.type){
    case GET_POSTS : 
      return {
        ...state,
        posts : {
          loading : true,
          data : null,
          error : null
        }
      }
    case GET_POSTS_SUCCESS :
      return {
        ...state, 
        loading : true,
        daya : action.posts,
        error : null
      }
    case GET_POSTS_ERROR :
      return {
        ...state, 
        posts : {
          loading : true,
          data : null,
          error : action.error
        }
      }
    default :
      return state;
  }
}