import { useState } from 'react'
import Chat from "./Chat";
import { Modal } from '../../context/Modal'
import './Chat.css'

function ChatModal({artistId}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='message-btn' onClick={() => setShowModal(true)}>Message</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    }}>
                    <Chat setShowModal={setShowModal} artistId={artistId}/>
                </Modal>
            )}
        </>

    )
}

export default ChatModal
