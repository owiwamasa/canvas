const GET_ONE_USER = 'users/GET_ONE_USER'
const GET_ALL_USERS = 'users/GET_ALL_USERS'
// const EDIT_USER = 'users/EDIT_USER'


export const getUser = (user) => {
    return {type: GET_ONE_USER, user}
}

export const getAllUsers = (users) => {
    return {type: GET_ALL_USERS, users}
}

// export const editOneUser = (user) => {
//     return {type: EDIT_USER, user}
// }

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

// export const editUser = (user) => async dispatch => {
//     const res = await fetch(`/api/users/${user.id}`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(user)
//     })
//     if (res.ok){
//         const user = await res.json()
//         dispatch(editOneUser(user))
//     }
//   }

//   export const editUserCompletedJob = (userId) => async dispatch => {
//     const res = await fetch(`/api/users/${userId}/completed`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'}
//     })
//     if (res.ok){
//         const user = await res.json()
//         dispatch(editOneUser(user))
//     }
//   }

const initialState = {users: []}


const userReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ONE_USER:
            return { ...action.user }
        case GET_ALL_USERS:
            return {...state, ...action.users}
        // case EDIT_USER:
        //     return {
        //         ...state,
        //         users: [...state.users.filter(
        //             user => user.id !== action.user.id), action.user]
        //     }
        default:
            return state
    }
}


export default userReducer
