import { useSelector } from 'react-redux'
import './ViewPost.css'

function ViewPost({post, artist}){
    const user = useSelector(state => state.session.user)

    return(
        <div className='post-card'>
            {artist?.userId === user?.id &&
            <div className='post-card-edit-btns'>
                <button><i className="fas fa-edit"></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
            </div>
            }
            <div className='post-card-image'>
                <img src={post.image} alt='post'/>
            </div>
            <div className='post-card-details'>
                <div className='post-card-title'>{post.title}</div>
                <div>{post.description}</div>
            </div>
        </div>
    )
}

export default ViewPost
