import { useState } from 'react'
import ViewPost from "./ViewPost";
import { Modal } from '../../context/Modal'

function ViewPostModal({post, artist}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='view-post' onClick={() => setShowModal(true)}>
                <img src={post?.image} alt='artist post'/>
            </button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    }}>
                    <ViewPost post={post} artist={artist}/>
                </Modal>
            )}
        </>

    )
}

export default ViewPostModal
