import { setErrors } from "./errors"

const GET_ALL_ARTISTS = '/artistPages/GET_ALL_ARTISTS'
const CREATE_ARTIST = '/artistPages/CREATE_ARTIST'
const DELETE_ARTIST = '/artistPages/DELETE_ARTIST'
const EDIT_ARTIST = '/artistPages/EDIT_ARTIST'


const getAllArtists = (artists) => {
    return {type: GET_ALL_ARTISTS, artists}
}

const createArtist = (artist) => {
    return {type: CREATE_ARTIST, artist}
}

const deleteOneArtist = (artist) => {
    return {type: DELETE_ARTIST, artist}
}

const editOneArtist = (artist) => {
    return {type: EDIT_ARTIST, artist}
}



export const allArtistPages = () => async dispatch => {
    const res = await fetch('/api/artist-pages/')
    if (res.ok){
        const allArtists = await res.json()
        dispatch(getAllArtists(allArtists))
    }
}


export const createArtistPage = (formData) => async dispatch => {
    const res = await fetch ('/api/artist-pages/', {
        method: 'POST',
        body: formData
    })
    if (res.ok){
        const artist = await res.json()
        dispatch(createArtist(artist))
        return artist
    } else {
        const artist = await res.json()
        dispatch(setErrors(artist))
    }
}

export const deleteArtist = (artistId) => async dispatch => {
    const res = await fetch(`/api/artist-pages/${artistId}`, {
        method: 'DELETE'
    })
    if (res.ok){
        dispatch(deleteOneArtist(artistId))
    }
}

export const editArtist = (formData, artistId) => async dispatch => {
    const res = await fetch(`/api/artist-pages/${artistId}`, {
        method: 'PUT',
        body: formData
    })
    if (res.ok) {
        const artist = await res.json()
        dispatch(editOneArtist(artist))
        return artist
    } else {
        const artist = await res.json()
        dispatch(setErrors(artist))
    }
}


const initialState = {artistPages: []}


const artistPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_ARTISTS:
            return {...state, ...action.artists}
        case CREATE_ARTIST:
            return {...state, artistPages: [...state.artistPages, action.artist]}
        case EDIT_ARTIST:
            return{
                    ...state,
                    artistPages: [
                    ...state.artistPages.filter((artist) => artist.id !== action.artist.id),
                    action.artist,
                    ]
                };
        case DELETE_ARTIST:
            return {
                ...state,
                artistPages: [...state.artistPages.filter(
                    artist => artist.id !== action.artistId
                )]
            }
        default:
            return state
    }
}


export default artistPageReducer
