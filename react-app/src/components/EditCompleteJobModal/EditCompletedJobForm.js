import { useState } from 'react'
import {editCompleteJob} from '../../store/job'
import { useDispatch } from 'react-redux'
import './EditCompletedJobForm.css'

function EditCompletedJobForm ({setShowModal, job}){
    const [completedArtwork, setCompletedArtwork] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const editCompletedJob = async (e) => {
        e.preventDefault()

        if (!completedArtwork) {
            setError('Completed Artwork URL must have a value.')
            return
        }
        const completedJob = {'title': job.title, 'description': job.description, 'dueDate': job.dueDate, completedArtwork}
        const success = await dispatch(editCompleteJob(completedJob, job.id))
        if (success) {
            setShowModal(false)
        }
    }

    return (
        <form onSubmit={editCompletedJob}>
            <div className='form-header'>Upload Completed Artwork</div>
            {error &&
                <div className='form-errors'>
                    <div className="error" >
                        {error}
                    </div>
                </div>
            }
            <div className='form-input'>
                <input
                className='form-complete-job-input'
                value={completedArtwork}
                type='text'
                placeholder='Completed Artwork URL'
                onChange={(e) => setCompletedArtwork(e.target.value)}
                />
            </div>
            <button
            type='submit'
            className='form-submit'
            >Submit</button>
        </form>
    )
}


export default EditCompletedJobForm
