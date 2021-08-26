const SET_ERRORS = '/errors/set_errors'

export const setErrors = (errors) => {
    return {type: SET_ERRORS, errors}
}


const initialState = []

const errorReducer = (state, action) => {
    switch(action.type){
        case SET_ERRORS:
            return action.errors
        default:
            return initialState
    }
}


export default errorReducer
