const GET_ONE_USER = 'users/GET_ONE_USER'
const GET_ALL_USERS = 'users/GET_ALL_USERS'


export const getUser = (user) => {
    return {type: GET_ONE_USER, user}
}

export const getAllUsers = (users) => {
    return {type: GET_ALL_USERS, users}
}

export const getOneUser = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}`)
    if (res.ok){
        const user = await res.json()
        dispatch(getUser(user))
        return user
    }
}

export const allUsers = () => async dispatch => {
    const res = await fetch(`/api/users/`)
    if (res.ok){
        const user = await res.json()
        dispatch(getAllUsers(user))
        return user
    }
}

const initialState = {users: []}


const userReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ONE_USER:
            return { ...action.user }
        case GET_ALL_USERS:
            return {...state, ...action.users}
        default:
            return state
    }
}


export default userReducer
