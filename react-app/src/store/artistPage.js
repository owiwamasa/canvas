import { setErrors } from "./errors"
// import history from '../history'

const GET_ALL_ARTISTS = '/artistPages/GET_ALL_ARTISTS'
const GET_ONE_ARTIST = '/artistPages/GET_ONE_ARTISTS'
const CREATE_ARTIST = '/artistPages/CREATE_ARTIST'


const getAllArtists = (artists) => {
    return {type: GET_ALL_ARTISTS, artists}
}

const getOneArtist = (artist) => {
    return {type: GET_ONE_ARTIST, artist}
}

const createArtist = (artist) => {
    return {type: CREATE_ARTIST, artist}
}


export const allArtistPages = () => async dispatch => {
    const res = await fetch('/api/artist-pages/')
    if (res.ok){
        const allArtists = await res.json()
        dispatch(getAllArtists(allArtists))
    }
}

export const oneArtistPage = (id) => async dispatch => {
    const res = await fetch (`/api/artist-pages/${id}`)
    if (res.ok){
        const artist = await res.json()
        dispatch(getOneArtist(artist))
    }
}

export const createArtistPage = (artist) => async dispatch => {
    const res = await fetch ('/api/artist-pages/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(artist)
    })
    if (res.ok){
        const artist = await res.json()
        // history.push(`/artist-pages/${artist.id}`)
        dispatch(createArtist(artist))
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
        case GET_ONE_ARTIST:
            return {...state, ...action.artist}
        case CREATE_ARTIST:
            return {...state, artistPages: [...state.artistPages, action.artist]}
        default:
            return state
    }
}


export default artistPageReducer
