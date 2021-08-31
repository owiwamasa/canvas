import { setErrors } from "./errors"

const GET_ALL_POSTS = 'posts/GET_ALL_POSTS'
const CREATE_POST = 'posts/CREATE_POST'
const DELETE_POST = 'posts/DELETE_POST'
const EDIT_POST = 'posts/EDIT_POST'


const allPosts = (posts) => {
    return {type: GET_ALL_POSTS, posts}
}

const createOnePost = (post) => {
    return {type: CREATE_POST, post}
}

const deleteOnePost = (postId) => {
    return {type: DELETE_POST, postId}
}

const editOnePost = (post) => {
    return {type: EDIT_POST, post}
}


export const getAllPosts = () => async dispatch => {
    const res = await fetch (`/api/posts/`)
    if (res.ok) {
        const posts = await res.json()
        dispatch(allPosts(posts))
    }
}

export const createPost = (formData) => async dispatch => {
    const res = await fetch ('/api/posts/', {
        method: 'POST',
        body: formData
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

export const deletePost = (postId) => async dispatch => {
    const res = await fetch (`/api/posts/${postId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(deleteOnePost(postId))
    }
}

export const editPost = (post, postId) => async dispatch => {
    const res = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    })
    if (res.ok) {
        const post = await res.json()
        dispatch(editOnePost(post))
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
        case DELETE_POST:
            return { ...state,
                posts: [...state.posts.filter(
                    post => post.id !== action.postId
                    )] }
        case EDIT_POST:
            return {
                ...state,
                posts: [...state.posts.filter(
                    post => post.id !== action.post.id), action.post]
            }
        default:
            return state
    }
}


export default postReducer
