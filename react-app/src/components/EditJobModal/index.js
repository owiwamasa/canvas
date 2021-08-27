import { useState } from 'react'
import { useDispatch } from 'react-redux';
import EditJobForm from "./EditJobForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function EditJobModal({job}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='edit-job' onClick={() => setShowModal(true)}><i className="fas fa-edit"></i></button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <EditJobForm setShowModal={setShowModal} job={job} />
                </Modal>
            )}
        </>

    )
}

export default EditJobModal
