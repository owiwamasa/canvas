import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../../store/review'
import Errors from '../Errors'
import './ReviewForm.css'

function ReviewForm({setShowModal, job}){
    const [review, setReview] = useState('')
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        const payload = {review, userId: user.id, jobId: job.id}
        const success = await dispatch(createReview(payload))
        if (success){
            setShowModal(false)
            setReview('')
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <div className='form-header'>Work Review</div>
            <Errors />
            <div className='form-input review-input'>
                <textarea
                type='text'
                value={review}
                placeholder='Write a Review...'
                onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <button className='form-submit' type='submit'>Submit</button>
        </form>
    )
}


export default ReviewForm
