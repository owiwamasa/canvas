import { useState } from 'react'
import { useDispatch } from 'react-redux';
import CompletedArt from "./CompletedArt";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function CompletedArtModal({completedArtwork}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='completed-artwork' onClick={() => setShowModal(true)}>View Completed Artwork</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <CompletedArt setShowModal={setShowModal} completedArtwork={completedArtwork} />
                </Modal>
            )}
        </>

    )
}

export default CompletedArtModal
