const GET_ALL_ARTISTS = '/artistPages/GET_ALL_ARTISTS'
const GET_ONE_ARTIST = '/artistPages/GET_ONE_ARTISTS'

const getAllArtists = (artists) => {
    return {type: GET_ALL_ARTISTS, artists}
}

const getOneArtist = (artist) => {
    return {type: GET_ONE_ARTIST, artist}
}


export const allArtistPages = () => async dispatch => {
    const res = await fetch('/api/artistPages/')
    if (res.ok){
        const allArtists = await res.json()
        dispatch(getAllArtists(allArtists))
    }
}

export const oneArtistPage = (id) => async dispatch => {
    const res = await fetch (`/api/artistPages/${id}`)
    if (res.ok){
        const artist = await res.json()
        dispatch(getOneArtist(artist))
    }
}


const initialState = {artistPages: []}


const artistPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_ARTISTS:
            return {...state, ...action.artists}
        case GET_ONE_ARTIST:
            return {...state, ...action.artist}
        default:
            return state
    }
}


export default artistPageReducer
