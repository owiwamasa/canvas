const GET_ARTIST_TYPES = 'artistTypes/GET_ARTIST_TYPES'


const getAllArtistTypes = (artistTypes) => {
    return {type: GET_ARTIST_TYPES, artistTypes}
}


export const allArtistTypes = () => async dispatch => {
    const res = await fetch (`/api/artist-types/`)
    if (res.ok) {
        const artistTypes = await res.json()
        dispatch(getAllArtistTypes(artistTypes))
        return artistTypes
    }
}


const initialState = {artistTypes: []}


const artistTypeReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ARTIST_TYPES:
            return {...state, ...action.artistTypes}
        default:
            return state
    }
}


export default artistTypeReducer
