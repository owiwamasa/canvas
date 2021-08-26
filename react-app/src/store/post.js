const GET_ALL_POSTS = 'posts/GET_ALL_POSTS'


const allPosts = (posts) => {
    return {type: GET_ALL_POSTS, posts}
}


export const getAllPosts = () => async dispatch => {
    const res = await fetch (`/api/posts/`)
    if (res.ok) {
        const posts = await res.json()
        dispatch(allPosts(posts))
    }
}


const initialState = {'posts': []}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_POSTS:
            return {...state, ...action.posts}
        default:
            return state
    }
}


export default postReducer
