import { useState } from 'react'
import { useDispatch } from 'react-redux';
import ViewPost from "./ViewPost";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function ViewPostModal({post, artist}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='view-post' onClick={() => setShowModal(true)}>
                <img src={post?.image} alt='artist post'/>
            </button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <ViewPost setShowModal={setShowModal} post={post} artist={artist}/>
                </Modal>
            )}
        </>

    )
}

export default ViewPostModal
