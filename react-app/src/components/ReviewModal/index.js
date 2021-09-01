import { useState } from 'react'
import { useDispatch } from 'react-redux';
import ReviewForm from "./ReviewForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function ReviewModal({job}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='review-modal-btn' onClick={() => setShowModal(true)}>Leave a Review</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <ReviewForm setShowModal={setShowModal} job={job}/>
                </Modal>
            )}
        </>

    )
}

export default ReviewModal
