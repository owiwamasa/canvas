import { setErrors } from "./errors"

const CREATE_JOB = 'jobs/CREATE_JOB'
const GET_ALL_JOBS = 'jobs/GET_ALL_JOBS'


const createOneJob = (job) => {
    return {type: CREATE_JOB, job}
}

const getAllJobs = (jobs) => {
    return {type: GET_ALL_JOBS, jobs}
}


export const allJobs = () => async dispatch => {
    const res = await fetch('/api/jobs/')
    if (res.ok) {
        const jobs = await res.json()
        dispatch(getAllJobs(jobs))
        return jobs
    }
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
        case GET_ALL_JOBS:
            return {...state, ...action.jobs}
        case CREATE_JOB:
            return {...state, jobs: [...state.jobs, action.job]}
        default:
            return state
    }
}


export default jobReducer
