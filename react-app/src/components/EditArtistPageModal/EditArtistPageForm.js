import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allArtistPages } from "../../store/artistPage"
import { editArtist } from "../../store/artistPage"
import Errors from "../Errors"
import './EditArtistPage.css'

function EditArtistPageForm({setShowModal}){
    const user = useSelector(state => state.session.user);
    const artistPages = useSelector(state => state.artistPageReducer.artistPages)
    const artist = artistPages?.filter(page => page?.userId === user.id)[0]
    const artistId = artist?.id
    const [biography, setBiography] = useState(artist?.biography)
    const [headerImage, setHeaderImage] = useState(artist?.headerImage)
    const [imageLoading, setImageLoading] = useState(false)
    const dispatch = useDispatch()


    const editOneArtist = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('biography', biography)
        formData.append('headerImage', headerImage)

        setImageLoading(true)
        const success = await dispatch(editArtist(formData, artistId))
        if (success) {
            setBiography(success.biography)
            setHeaderImage(success.headerImage)
            setShowModal(false)
            setImageLoading(false)
        }
    }

    useEffect(() => {
        dispatch(allArtistPages())
    }, [dispatch])


    return (
        <form onSubmit={editOneArtist}>
            <div className='form-header'>Edit Artist Page</div>
            <Errors />
            <div className='form-input form-edit-artist-input'>
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
                onChange={(e) => setHeaderImage(e.target.files[0])}
                />
            </div>
            {(imageLoading) && <p className='form-loading'>Loading...</p>}
            <button className='form-submit' type='submit'>Edit</button>
        </form>
    )
}


export default EditArtistPageForm
