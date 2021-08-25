import { useState } from 'react'
import { useDispatch } from 'react-redux';
import SignUpForm from "./SignUpForm";
import { Modal } from '../../context/Modal'
import { setErrors } from '../../store/errors';

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='nav-signup' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <SignUpForm />
                </Modal>
            )}
        </>

    )
}

export default SignUpFormModal
