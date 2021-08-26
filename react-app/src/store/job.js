import { setErrors } from "./errors"

const CREATE_JOB = 'jobs/CREATE_JOB'


const createOneJob = (job) => {
    return {type: CREATE_JOB, job}
}


export const createJob = (job) => async dispatch => {
    const res = await fetch ('/api/jobs/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(job)
    })
    if (res.ok) {
        const job = await res.json()
        dispatch(createOneJob(job))
        return job
    } else {
        const job = await res.json()
        dispatch(setErrors(job))
        return job
    }
}


const initialState = {jobs: []}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_JOB:
            return {...state, jobs: [...state.jobs, action.job]}
        default:
            return state
    }
}


export default jobReducer
