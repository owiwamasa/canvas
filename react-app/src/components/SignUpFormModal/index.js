import { useState } from 'react'
import SignUpForm from "./SignUpForm";
import { Modal } from '../../context/Modal'

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='nav-signup' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    }}>
                    <SignUpForm />
                </Modal>
            )}
        </>

    )
}

export default SignUpFormModal
