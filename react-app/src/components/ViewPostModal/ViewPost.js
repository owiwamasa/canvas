import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../../store/post'
import { editPost } from '../../store/post'
import Errors from '../Errors'
import './ViewPost.css'

function ViewPost({setShowModal, post, artist}){
    const [editClicked, setEditClicked] = useState(false)
    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const deleteOnePost = async (e) => {
        e.preventDefault()
        const success = await dispatch(deletePost(post.id))
        if (success) {
            setShowModal(false)
        }
    }

    const editOnePost = async (e) => {
        e.preventDefault()
        const editedPost = {'image': post.image, title, description, 'artistPageId': post.artistPageId}
        const success = await dispatch(editPost(editedPost, post.id))
        if (success) {
            setEditClicked(false)
        }
    }

    return(
        <div className='post-card'>
            {artist?.userId === user?.id &&
            <div className='post-card-edit-btns'>
                <button onClick={() => setEditClicked(!editClicked)}><i className="fas fa-edit"></i></button>
                <button onClick={deleteOnePost}><i className="fas fa-trash-alt"></i></button>
            </div>
            }
            <div className='post-card-image'>
                <img src={post.image} alt='post'/>
            </div>
            {!editClicked ?
            <div className='post-card-details'>
                <div className='post-card-title'>{post.title}</div>
                <div>{post.description}</div>
            </div>
            :
            <form id='edit-post-form' onSubmit={editOnePost}>
                <Errors />
                <input
                value={title}
                placeholder='Title'
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                value={description}
                placeholder='Description'
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                />
                <button type='submit'>Edit</button>
            </form>
            }
        </div>
    )
}

export default ViewPost
