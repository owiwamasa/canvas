import { setErrors } from "./errors"

const GET_ALL_POSTS = 'posts/GET_ALL_POSTS'
const CREATE_POST = 'posts/CREATE_POST'


const allPosts = (posts) => {
    return {type: GET_ALL_POSTS, posts}
}

const createOnePost = (post) => {
    return {type: CREATE_POST, post}
}


export const getAllPosts = () => async dispatch => {
    const res = await fetch (`/api/posts/`)
    if (res.ok) {
        const posts = await res.json()
        dispatch(allPosts(posts))
    }
}

export const createPost = (post) => async dispatch => {
    const res = await fetch ('/api/posts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    })
    if (res.ok){
        const post = await res.json()
        dispatch(createOnePost(post))
        return post
    } else {
        const post = await res.json()
        dispatch(setErrors(post))
    }
}


const initialState = {posts: []}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_POSTS:
            return {...state, ...action.posts}
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.post]}
        default:
            return state
    }
}


export default postReducer
