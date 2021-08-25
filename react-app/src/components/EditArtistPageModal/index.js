import { useState } from 'react'
import EditArtistPageForm from "./EditArtistPageForm";
import { Modal } from '../../context/Modal'

function EditArtistPageModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='edit-artistPage' onClick={() => setShowModal(true)}>
                <i className="far fa-edit"></i>
            </button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    }}>
                    <EditArtistPageForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default EditArtistPageModal
