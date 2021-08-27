import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { allArtistPages } from "../../store/artistPage"
import EditArtistPageModal from "../EditArtistPageModal"
import { getAllPosts } from "../../store/post"
import { allJobs } from "../../store/job"
import CreateJobModal from "../CreateJobModal"
import './ArtistPage.css'


function ArtistPage(){
    const { artistPageId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const artistPages = useSelector(state => state.artistPageReducer.artistPages)
    const artist = artistPages.find(page => page.id === +artistPageId)
    const jobs = useSelector(state => state.jobReducer.jobs)
    const hasJob = jobs.find(job => (job?.userId === user?.id) && (job?.artistId === artist?.userId))
    const posts = useSelector(state => state.postReducer.posts)
    const myPosts = posts.filter(post => post.artistPageId === +artistPageId)
    console.log(hasJob)

    useEffect(() => {
        dispatch(allArtistPages())
        dispatch(getAllPosts())
        dispatch(allJobs())
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
                {(artist?.userId !== user?.id && user) &&
                    <div className='artistPage-nonuser-btns'>
                        {hasJob ?
                          <button className='artistPage-job-sent' disabled={true}>Work Request Sent <i class="fas fa-check"></i></button>
                        : <CreateJobModal artistId={artist?.userId} />}
                        <button className='artistPage-message'>Message</button>
                    </div>
                }
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
