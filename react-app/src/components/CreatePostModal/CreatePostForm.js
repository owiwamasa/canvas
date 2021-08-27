import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/post'
import Errors from '../Errors'
import './CreatePostForm.css'


function CreatePostForm({setShowModal, artistPageId}){
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const createOnePost = async (e) => {
        e.preventDefault()

        const post = {image, title, description, artistPageId}
        const success = await dispatch(createPost(post))
        if (success) {
            setShowModal(false)
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
            <div className='form-input form-post'>
                <input
                type='text'
                value={image}
                placeholder='Image URL'
                onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <button className='form-submit' type='submit'>Submit</button>
        </form>
    )
}


export default CreatePostForm
