import { useState } from 'react'
import CreateArtistPageForm from "./CreateArtistPageForm";
import { Modal } from '../../context/Modal'

function CreateArtistPageModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='create-artistPage' onClick={() => setShowModal(true)}>Create Artist Page</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    }}>
                    <CreateArtistPageForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default CreateArtistPageModal
