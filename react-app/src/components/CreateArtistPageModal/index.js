import { useState } from 'react'
import { useDispatch } from 'react-redux';
import CreateArtistPageForm from "./CreateArtistPageForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function CreateArtistPageModal() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='create-artistPage' onClick={() => setShowModal(true)}>Create Artist Page</button>
            {showModal && (
                <Modal onClose={async () => {
                    await dispatch(setErrors([]))
                    setShowModal(false)
                    }}>
                    <CreateArtistPageForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default CreateArtistPageModal
