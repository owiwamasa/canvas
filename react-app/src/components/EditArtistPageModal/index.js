import { useState } from 'react'
import { useDispatch } from 'react-redux';
import EditArtistPageForm from "./EditArtistPageForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function EditArtistPageModal() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='edit-artistPage' onClick={() => setShowModal(true)}>
                <i className="far fa-edit"></i>
            </button>
            {showModal && (
                <Modal onClose={() => {
                    dispatch(setErrors([]))
                    setShowModal(false)
                    }}>
                    <EditArtistPageForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default EditArtistPageModal
