import { useState } from 'react'
import Chat from "./Chat";
import { Modal } from '../../context/Modal'
import './Chat.css'

function ChatModal({artist}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='message-btn' onClick={() => setShowModal(true)}>Message</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    }}>
                    <Chat setShowModal={setShowModal} artist={artist}/>
                </Modal>
            )}
        </>

    )
}

export default ChatModal
