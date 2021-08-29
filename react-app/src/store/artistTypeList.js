import { setErrors } from "./errors"

const GET_ARTIST_TYPE_LISTS = 'artistTypeLists/GET_ARTIST_TYPE_LIST'
const CREATE_TYPE_LIST = 'artistTypeLists/CREATE_TYPE_LIST'
const DELETE_TYPE_LIST = 'artistTypeLists/DELETE_TYPE_LIST'


const getArtistTypeLists = (lists) => {
    return {type: GET_ARTIST_TYPE_LISTS, lists}
}

const createOneTypeList = (list) => {
    return {type: CREATE_TYPE_LIST, list}
}

const deleteOneTypeList = (listId) => {
    return {type: DELETE_TYPE_LIST, listId}
}


export const allArtistTypeLists = () => async dispatch => {
    const res = await fetch('/api/artist-type-lists/')
    if (res.ok) {
        const lists = await res.json()
        dispatch(getArtistTypeLists(lists))
    }
}

export const createArtistTypeList = (list) => async dispatch => {
    const res = await fetch ('/api/artist-type-lists/', {
        method: 'POSt',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(list)
    })
    if (res.ok) {
        const list = await res.json()
        dispatch(createOneTypeList(list))
        return list
    } else {
        const list = await res.json()
        dispatch(setErrors(list))
    }
}

export const deleteArtistTypeList = (listId) => async dispatch => {
    const res = await fetch (`/api/artist-type-lists/${listId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(deleteOneTypeList(listId))
    }
}


const initialState = {artistTypeLists: []}


const artistTypeListReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ARTIST_TYPE_LISTS:
            return {...state, ...action.lists}
        case CREATE_TYPE_LIST:
            return {...state, artistTypeLists: [...state.artistTypeLists, action.list]}
        case DELETE_TYPE_LIST:
            return {
                ...state,
                artistTypeLists: [...state.artistTypeLists.filter(
                    list => list.id !== action.listId
                )]
            }
        default:
            return state
    }
}


export default artistTypeListReducer
