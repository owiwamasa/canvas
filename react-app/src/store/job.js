import { setErrors } from "./errors"

const CREATE_JOB = 'jobs/CREATE_JOB'
const GET_ALL_JOBS = 'jobs/GET_ALL_JOBS'
const DELETE_JOB = 'jobs/DELETE_JOB'
const EDIT_JOB = 'jobs/EDIT_JOB'


const createOneJob = (job) => {
    return {type: CREATE_JOB, job}
}

const getAllJobs = (jobs) => {
    return {type: GET_ALL_JOBS, jobs}
}

const deleteOneJob = (jobId) => {
    return {type: DELETE_JOB, jobId}
}

const editOneJob = (job) => {
    return {type: EDIT_JOB, job}
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
    }
}

export const deleteJob = (jobId) => async dispatch => {
    const res = await fetch (`/api/jobs/${jobId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(deleteOneJob(jobId))
    }
}

export const editJob = (job, jobId) => async dispatch => {
    const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(job)
    })
    if (res.ok) {
        const job = await res.json()
        dispatch(editOneJob(job))
        return job
    } else {
        const job = await res.json()
        dispatch(setErrors(job))
    }
}


const initialState = {jobs: []}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_JOBS:
            return {...state, ...action.jobs}
        case CREATE_JOB:
            return {...state, jobs: [...state.jobs, action.job]}
        case DELETE_JOB:
            return {
                ...state,
                jobs: [...state.jobs.filter(
                    job => job.id !== action.jobId)]
            }
        case EDIT_JOB:
            return {
                ...state,
                jobs: [...state.jobs.filter(
                    job => job.id !== action.job.id), action.job]
            }
        default:
            return state
    }
}


export default jobReducer
