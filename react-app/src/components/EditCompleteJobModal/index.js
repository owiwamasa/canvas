import { useState } from 'react'
import { useDispatch } from 'react-redux';
import EditCompletedJobForm from "./EditCompletedJobForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function EditCompletedJobModal({job}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='edit-completed-job' onClick={() => setShowModal(true)}>Complete</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <EditCompletedJobForm setShowModal={setShowModal} job={job} />
                </Modal>
            )}
        </>

    )
}

export default EditCompletedJobModal
