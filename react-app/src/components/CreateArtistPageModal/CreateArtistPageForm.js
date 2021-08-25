import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { createArtistPage } from "../../store/artistPage"
import { editUser } from "../../store/user"
import Errors from "../Errors"
import './CreateArtistPageForm.css'

function CreateArtistPageForm({setShowModal}){
    const [biography, setBiography] = useState('')
    const [headerImage, setHeaderImage] = useState('')
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()

    const createArtist = async (e) => {
        e.preventDefault()

        const artist = {biography, headerImage, userId: user.id}
        const success = await dispatch(createArtistPage(artist))
        console.log(success)
        if (success) {
            await dispatch(editUser(user))
            setShowModal(false)
            history.push(`/artist-pages/${success.id}`)
        }
    }


    return (
        <form onSubmit={createArtist}>
            <div className='form-header'>Create Artist Page</div>
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
            <button className='form-submit' type='submit'>Create</button>
        </form>
    )
}


export default CreateArtistPageForm
