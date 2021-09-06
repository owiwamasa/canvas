import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/post'
import Errors from '../Errors'
import './CreatePostForm.css'


function CreatePostForm({setShowModal, artistPageId}){
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageLoading, setImageLoading] = useState(false)
    const dispatch = useDispatch()

    const createOnePost = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('artistPageId', artistPageId)

        setImageLoading(true)
        const success = await dispatch(createPost(formData))
        if (success) {
            setShowModal(false)
            setImageLoading(false)
        } else {
            setImageLoading(false)
        }
    }

    return(
        <form onSubmit={createOnePost}>
            <div className='form-header'>Add Post</div>
            <Errors />
            <div className='form-input form-post-title'>
                <input
                type='text'
                value={title}
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className='form-input form-post'>
                <textarea
                type='text'
                value={description}
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='form-input-image-upload'>
                <label>Upload Post Image:</label>
                <input
                type='file'
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            {(imageLoading) && <p className='form-loading'>Loading...</p>}
            <button className='form-submit' type='submit'>Submit</button>
        </form>
    )
}


export default CreatePostForm
