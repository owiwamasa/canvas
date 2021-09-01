import { setErrors } from "./errors"

const GET_ALL_REVIEWS = 'reviews/GET_ALL_REVIEWS'
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'


const allReviews = (reviews) => {
    return {type: GET_ALL_REVIEWS, reviews}
}

const createOneReview = (review) => {
    return {type: CREATE_REVIEW, review}
}


export const getAllReviews = () => async dispatch => {
    const res = await fetch(`/api/reviews/`)
    if (res.ok) {
        const reviews = await res.json()
        dispatch(allReviews(reviews))
    }
}

export const createReview = (review) => async dispatch => {
    const res = await fetch (`/api/reviews/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const review = await res.json()
        dispatch(createOneReview(review))
        return review
    } else {
        const review = await res.json()
        dispatch(setErrors(review))
    }
}


const initialState = {reviews: []}

const reviewReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_REVIEWS:
            return {...state, ...action.reviews}
        case CREATE_REVIEW:
            return {...state, reviews: [...state.reviews, action.review]}
        default:
            return state
    }
}


export default reviewReducer
