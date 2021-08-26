import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
// import { oneArtistPage } from "../../store/artistPage"
import { allArtistPages } from "../../store/artistPage"
import EditArtistPageModal from "../EditArtistPageModal"
import { getAllPosts } from "../../store/post"
import './ArtistPage.css'


function ArtistPage(){
    const { artistPageId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    // const artist = useSelector(state => state.artistPageReducer)
    const artistPages = useSelector(state => state.artistPageReducer.artistPages)
    const artist = artistPages.filter(page => page.userId === user.id)[0]
    const posts = useSelector(state => state.postReducer.posts)
    const myPosts = posts.filter(post => post.artistPageId === +artistPageId)


    useEffect(() => {
        // dispatch(oneArtistPage(artistPageId))
        dispatch(allArtistPages())
        dispatch(getAllPosts())
    }, [dispatch, artistPageId])

    return(
        <div className='artistPage'>
            {(user?.id === artist?.userId) &&
                <EditArtistPageModal/>
            }
            <div className='artistPage-header-img'>
                <img src={artist?.headerImage} alt='profile header'/>
            </div>
            <div className='artistPage-userCard'>
                <div className='artistPage-username'>{artist?.username}</div>
                <div className='artistPage-user-img'>
                    <img src={artist?.profilePic} alt='profile'/>
                </div>
                <button className='artistPage-job'>Send Work Request</button>
                <button className='artistPage-message'>Message</button>
                <div className='artistPage-bio'>
                    <div className='artistPage-bio-title'>Biography</div>
                    <div className='artistPage-bio-detail'>{artist?.biography}</div>
                </div>
            </div>
            <div className='artistPage-allPosts'>
                {myPosts && myPosts.map(post => (
                    <div key={post.id} className='artistPage-post'>
                        <img src={post.image} alt='artist post'/>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ArtistPage
