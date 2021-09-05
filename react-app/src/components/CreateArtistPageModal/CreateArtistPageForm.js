import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { createArtistPage } from "../../store/artistPage"
import { editUser } from "../../store/session"
import { allUsers } from "../../store/user"
import Errors from "../Errors"
import './CreateArtistPageForm.css'

function CreateArtistPageForm({setShowModal}){
    const [biography, setBiography] = useState('')
    const [headerImage, setHeaderImage] = useState(null)
    const [imageLoading, setImageLoading] = useState(false)
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()

    const createArtist = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('biography', biography)
        formData.append('headerImage', headerImage)

        setImageLoading(true)
        const success = await dispatch(createArtistPage(formData))
        if (success) {
            await dispatch(editUser(user))
            setShowModal(false)
            setImageLoading(false)
            await dispatch(allUsers())
            history.push(`/artist-pages/${success.id}`)
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0]
        setHeaderImage(file)
    }


    return (
        <form onSubmit={createArtist}>
            <div className='form-header'>Create Artist Page</div>
            <Errors />
            <div className='form-input' id='artistPage-form-biography-input'>
                <textarea
                type='text'
                value={biography}
                placeholder='Biography'
                onChange={(e) => setBiography(e.target.value)}
                />
            </div>
            <div className='form-input-image-upload'>
                <label>Upload Header Image:</label>
                <input
                type='file'
                accept='image/*'
                onChange={updateImage}
                />
            </div>
            {(imageLoading) && <p className='form-loading'>Loading...</p>}
            <button className='form-submit' type='submit'>Create</button>
        </form>
    )
}


export default CreateArtistPageForm
