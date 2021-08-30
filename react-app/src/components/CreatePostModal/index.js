import { useState } from 'react'
import { useDispatch } from 'react-redux';
import CreatePostForm from "./CreatePostForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function CreatePostModal({artistPageId}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='create-post' onClick={() => setShowModal(true)}>Add Post <i className="fas fa-plus"></i></button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <CreatePostForm setShowModal={setShowModal} artistPageId={artistPageId}/>
                </Modal>
            )}
        </>

    )
}

export default CreatePostModal
