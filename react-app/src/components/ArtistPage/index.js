import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { allArtistPages } from "../../store/artistPage"
import EditArtistPageModal from "../EditArtistPageModal"
import { getAllPosts } from "../../store/post"
import { allJobs } from "../../store/job"
import CreateJobModal from "../CreateJobModal"
import CreatePostModal from "../CreatePostModal"
import ViewPostModal from "../ViewPostModal"
import ChatModal from "../Chat"
import ArtistTypeForm from "../ArtistTypeForm"
import { allArtistTypeLists } from "../../store/artistTypeList"
import { allArtistTypes } from "../../store/artistType"
import { getAllReviews } from "../../store/review"
import { getAllUsers } from "../../store/user"
import './ArtistPage.css'


function ArtistPage(){
    const { artistPageId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const artistPages = useSelector(state => state.artistPageReducer.artistPages)
    const artist = artistPages.find(page => page.id === +artistPageId)
    const jobs = useSelector(state => state.jobReducer.jobs)
    const hasJob = jobs.filter(job => (job?.userId === user?.id) && (job?.artistId === artist?.userId))
    const posts = useSelector(state => state.postReducer.posts)
    const myPosts = posts.filter(post => post.artistPageId === +artistPageId).reverse()
    const artistTypes = useSelector(state => state.artistTypeReducer.artistTypes)
    const typeLists = useSelector(state => state.artistTypeListReducer.artistTypeLists)
    const myLists = typeLists.filter(list => list.artistPageId === +artistPageId)
    const myTypeTitles = myLists?.map(list => {
        let typeTitle = artistTypes?.find(type => list?.artistTypeId === type.id)?.title
        return typeTitle
    })
    const myTags = myTypeTitles?.join(', ')
    const [artistTypeButtonClicked, setArtistTypeButtonClicked] = useState(false)
    const jobCompleted = (currentJob) => currentJob.completed
    const completedJobs = jobs.filter(job => (job?.artistId === artist?.userId) && job?.completed)
    const reviews = useSelector(state => state.reviewReducer.reviews)
    const users = useSelector(state => state.userReducer.users)

    useEffect(() => {
        dispatch(allArtistPages())
        dispatch(getAllPosts())
        dispatch(allJobs())
        dispatch(allArtistTypeLists())
        dispatch(allArtistTypes())
        dispatch(getAllReviews())
        dispatch(getAllUsers())
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
                {myTags && <div className='artistPage-tags'>{myTags}</div>}
                {(artist?.userId !== user?.id && user) ?
                    <div className='artistPage-nonuser-btns'>
                        {hasJob.length && !hasJob.every(jobCompleted) ?
                          <button className='artistPage-job-sent' disabled={true}>Work Request Sent <i className="fas fa-check"></i></button>
                        : <CreateJobModal artistId={artist?.userId} />}
                        <ChatModal artistId={artist?.userId}/>
                    </div>
                    :
                    (artistTypeButtonClicked ?
                        <ArtistTypeForm setArtistTypeButtonClicked={setArtistTypeButtonClicked} artistPageId={artistPageId}/> :
                        <button className='artistPage-tag-btn' onClick={() => setArtistTypeButtonClicked(!artistTypeButtonClicked)}><i className="fas fa-plus"></i> Artist Tags</button>
                        )
                }
                <div className='artistPage-bio'>
                    <div className='artistPage-bio-title'>Biography</div>
                    <div className='artistPage-bio-detail'>{artist?.biography}</div>
                </div>
            </div>
            {artist?.userId === user?.id &&
            <div className='artistPage-post-btn'>
                <CreatePostModal artistPageId={artistPageId}/>
            </div>}
            <div className='artistPage-allPosts'>
                {myPosts && myPosts?.map(post => (
                    <div key={post?.id} className='artistPage-post'>
                        <ViewPostModal post={post} artist={artist} />
                    </div>
                ))}
            </div>
            {completedJobs.length &&
            <div className='reviews-section'>
                <div className='past-job-title'>PAST PROJECTS</div>
                {completedJobs.map(job => {
                    let jobReview = reviews?.find(review => review?.jobId === job?.id)
                    let reviewUser = users?.find(user => user?.id === jobReview?.userId)
                    return (
                    <div className='review-card' key={job?.id}>
                        <div className='review-img-div'>
                            <div className='review-img'>
                                <img src={job?.completedArtwork} alt='artwork'/>
                            </div>
                        </div>
                        <div className='review-user'>
                            <div className='review-text'>"{jobReview?.review}"</div>
                                <div className='review-user-info'>
                                    <div className='review-user-img'>
                                        <img src={reviewUser?.profilePic} alt='profile'/>
                                    </div>
                                    <div>-{reviewUser?.username}</div>
                                </div>
                        </div>
                    </div>
                )})}
            </div>
            }
        </div>
    )
}



export default ArtistPage
