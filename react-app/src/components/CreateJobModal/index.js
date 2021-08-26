import { useState } from 'react'
import { useDispatch } from 'react-redux';
import CreateJobForm from "./CreateJobForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function CreateJobModal({artistId}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='create-job' onClick={() => setShowModal(true)}>Send Work Request</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <CreateJobForm setShowModal={setShowModal} artistId={artistId} />
                </Modal>
            )}
        </>

    )
}

export default CreateJobModal
