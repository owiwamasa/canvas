import { setErrors } from "./errors"

const GET_ALL_CONVERSATIONS = '/conversations/GET_ALL_CONVERSATIONS'
const CREATE_CONVERSATION = '/conversations/CREATE_CONVERSATION'


const getAllConversations = (conversations) => {
    return {type: GET_ALL_CONVERSATIONS, conversations}
}

const createOneConversation = (conversation) => {
    return {type: CREATE_CONVERSATION, conversation}
}


export const allConversations = () => async dispatch => {
    const res = await fetch('/api/conversations/')
    if (res.ok){
        const conversations = await res.json()
        dispatch(getAllConversations(conversations))
    }
}


export const createConversation = (conversation) => async dispatch => {
    const res = await fetch ('/api/conversations/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(conversation)
    })
    if (res.ok){
        const conversation = await res.json()
        dispatch(createOneConversation(conversation))
        return conversation
    } else {
        const conversation = await res.json()
        dispatch(setErrors(conversation))
    }
}


const initialState = {conversations: []}


const conversationReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CONVERSATIONS:
            return {...state, ...action.conversations}
        case CREATE_CONVERSATION:
            return {...state, conversations: [...state.conversations, action.conversation]}
        default:
            return state
    }
}


export default conversationReducer
