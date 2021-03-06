import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteJob, editAcceptJob } from '../../store/job'
import EditJobModal from '../EditJobModal'
import EditCompletedJobModal from '../EditCompleteJobModal'
import CompletedArtModal from '../CompletedArtModal'
import ReviewModal from '../ReviewModal'
import { getAllReviews } from '../../store/review'
import './JobCard.css'
import { useEffect } from 'react'
import { allArtistPages } from '../../store/artistPage'

function JobCard({artist, otherUser, job}){
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviewReducer.reviews)
    const jobReview = reviews.find(review => review?.jobId === job?.id)
    const artistPages = useSelector(state => state.artistPageReducer.artistPages)
    const artistPageId = artistPages.find(page => page?.userId === artist.id).id

    const deleteOneJob = (e, id) => {
        e.preventDefault()
        dispatch(deleteJob(id))
    }

    const editAccept = (e) => {
        e.preventDefault()
        dispatch(editAcceptJob(job, job.id))
    }

    useEffect(() => {
        dispatch(getAllReviews())
        dispatch(allArtistPages())
    }, [dispatch])

    return(
    (job?.userId === user?.id ?
        <div className='job-card' key={job.id}>
            <div className='job-card-header-center'>
                <div className='job-card-dates'>
                    <div className='job-card-date'>Deadline: {job?.dueDate.slice(0,16)}</div>
                </div>
                <div className='job-card-status-div'>
                    {job?.accepted ?
                    <div className='job-card-status'>Accepted <i className="far fa-check-circle"></i></div>
                : <div className='job-card-status'>Accepted <i className="fas fa-times"></i></div>}
                    {job?.completed ?
                    <div className='job-card-status'>Completed <i className="far fa-check-circle"></i></div>
                : <div className='job-card-status'>Completed <i className="fas fa-times"></i></div>}
                    {job?.completed &&
                        <div>
                            {(job?.userId === user?.id && !jobReview) &&
                                <ReviewModal job={job}/>}
                        </div>
                    }
                </div>
            </div>
            <div className='job-card-header'>
                <div className='job-card-header-left'>
                    <div className='job-card-title'>{job?.title}</div>
                    <div className='job-card-body'>{job?.description}</div>
                </div>
                <div className='job-card-header-right'>
                    <div className='job-card-user'>
                        <Link to={`/artist-pages/${artistPageId}`}>
                            <div className='job-card-profilePic'>
                                <img src={artist?.profilePic} alt='profile'/>
                            </div>
                        </Link>
                        <div className='job-card-name'>Artist:</div>
                        <div>{artist?.username}</div>
                    </div>
                </div>
            </div>
            {!job.completed ?
            <div className='job-card-edit-btns'>
                <EditJobModal job={job}/>
                <button onClick={(e) => deleteOneJob(e, job?.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
            :
            <div className='job-card-artwork-container'>
                <CompletedArtModal completedArtwork={job.completedArtwork}/>
            </div>
            }
        </div>
        :
        <div className='job-card' key={job?.id}>
            <div className='job-card-header-center'>
                <div className='job-card-dates'>
                    <div className='job-card-date'>Deadline: {job?.dueDate.slice(0,16)}</div>
                </div>
                <div className='job-card-status-div'>
                    {job?.accepted ?
                    <div className='job-card-status'>Accepted <i className="far fa-check-circle"></i></div>
                : <button onClick={editAccept} className='job-card-accept-btn'>Accept</button>}
                {job?.accepted ?
                    (job?.completed ?
                    <div className='job-card-status'>Completed <i className="far fa-check-circle"></i></div>
                    : <EditCompletedJobModal job={job}/>
                ): <button className='edit-completed-job-disabled' disabled={true}>Complete</button>}
                </div>
            </div>
            <div className='job-card-header'>
                <div className='job-card-header-left'>
                    <div className='job-card-title'>{job?.title}</div>
                    <div className='job-card-body'>{job?.description}</div>
                </div>
                <div className='job-card-header-right'>
                    <div className='job-card-user'>
                        <div className='job-card-profilePic'>
                            <img src={otherUser?.profilePic} alt='profile'/>
                        </div>
                    <div className='job-card-name'>Requested By:</div>
                    <div>{otherUser?.username}</div>
                </div>
            </div>
        </div>
            {job.completed &&
            <div className='job-card-artwork-container'>
                <CompletedArtModal completedArtwork={job.completedArtwork}/>
            </div>
            }
        </div>)
    )
}

export default JobCard
