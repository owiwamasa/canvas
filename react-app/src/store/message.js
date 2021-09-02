import { setErrors } from "./errors"

const GET_ALL_MESSAGES = '/messages/GET_ALL_MESSAGES'
const CREATE_MESSAGE = '/messages/CREATE_MESSAGE'


const getAllMessages = (messages) => {
    return {type: GET_ALL_MESSAGES, messages}
}

const createOneMessage = (message) => {
    return {type: CREATE_MESSAGE, message}
}


export const allMessages = () => async dispatch => {
    const res = await fetch('/api/messages/')
    if (res.ok){
        const messages = await res.json()
        dispatch(getAllMessages(messages))
    }
}


export const createMessage = (message) => async dispatch => {
    const res = await fetch ('/api/messages/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    })
    if (res.ok){
        const message = await res.json()
        dispatch(createOneMessage(message))
        return message
    } else {
        const message = await res.json()
        dispatch(setErrors(message))
    }
}


const initialState = {messages: []}


const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_MESSAGES:
            return {...state, ...action.messages}
        case CREATE_MESSAGE:
            return {...state, messages: [...state.messages, action.message]}
        default:
            return state
    }
}


export default messageReducer
