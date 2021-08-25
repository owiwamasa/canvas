const EDIT_USER = 'users/EDIT_USER'


export const editOneUser = (user) => {
    return {type: EDIT_USER, user}
}


export const editUser = (user) => async dispatch => {
    const res = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    if (res.ok){
        const user = await res.json()
        dispatch(editOneUser(user))
    }
}

const initialState = {'users': []}


const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case EDIT_USER:
            return { ...state, ...action.user }
        default:
            return state
    }
}


export default usersReducer
