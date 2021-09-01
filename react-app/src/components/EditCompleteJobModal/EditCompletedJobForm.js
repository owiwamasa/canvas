import { useState } from 'react'
import {editCompleteJob} from '../../store/job'
import { editUserCompletedJob } from '../../store/session'
import { useDispatch } from 'react-redux'
import './EditCompletedJobForm.css'

function EditCompletedJobForm ({setShowModal, job}){
    const [completedArtwork, setCompletedArtwork] = useState(null)
    const [imageLoading, setImageLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const editCompletedJob = async (e) => {
        e.preventDefault()

        if (!completedArtwork) {
            setError('Completed Artwork is required.')
            return
        }
        const formData = new FormData()
        formData.append('title', job.title)
        formData.append('description',job.description)
        formData.append('dueDate',job.dueDate)
        formData.append('completedArtwork', completedArtwork)

        setImageLoading(true)
        const success = await dispatch(editCompleteJob(formData, job.id))
        if (success) {
            await dispatch(editUserCompletedJob(job.artistId))
            setShowModal(false)
            setImageLoading(false)
            setCompletedArtwork(null)
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
            <div className='form-input-image-upload'>
                <input
                type='file'
                accept='image/*'
                onChange={(e) => setCompletedArtwork(e.target.files[0])}
                />
            </div>
            {(imageLoading) && <p className='form-loading'>Loading...</p>}
            <button
            type='submit'
            className='form-submit'
            >Submit</button>
        </form>
    )
}


export default EditCompletedJobForm
