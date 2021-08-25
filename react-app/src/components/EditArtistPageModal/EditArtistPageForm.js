import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Errors from "../Errors"
import './EditArtistPage.css'

function EditArtistPageForm({setShowModal}){
    const [biography, setBiography] = useState('')
    const [headerImage, setHeaderImage] = useState('')
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const editArtist = async (e) => {
        e.preventDefault()

        const artist = {biography, headerImage, userId: user.id}
        // const success = await dispatch(createArtistPage(artist))
        // if (success) {
        //     setShowModal(false)
        // }
    }


    return (
        <form onSubmit={editArtist}>
            <div className='form-header'>Edit Artist Page</div>
            <Errors />
            <div className='form-input'>
                <textarea
                type='text'
                value={biography}
                placeholder='Biography'
                onChange={(e) => setBiography(e.target.value)}
                />
            </div>
            <div className='form-input headerImageURL'>
                <input
                text='text'
                value={headerImage}
                placeholder='Header Image URL'
                onChange={(e) => setHeaderImage(e.target.value)}
                />
            </div>
            <button className='form-submit' type='submit'>Edit</button>
        </form>
    )
}


export default EditArtistPageForm
