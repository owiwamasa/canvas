import { useDispatch, useSelector } from 'react-redux'
import { deleteJob, editAcceptJob } from '../../store/job'
import EditJobModal from '../EditJobModal'
import EditCompletedJobModal from '../EditCompleteJobModal'
import './JobCard.css'

function JobCard({artist, otherUser, job}){
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);

    const deleteOneJob = (e, id) => {
        e.preventDefault()
        dispatch(deleteJob(id))
    }

    const editAccept = (e) => {
        e.preventDefault()
        dispatch(editAcceptJob(job, job.id))
    }

    // const editComplete = (e) => {
    //     e.preventDefault()
    //     dispatch(editCompleteJob(job, job.id))
    // }

    return(
    (job?.userId === user?.id ?
        <div className='job-card' key={job.id}>
            <div className='job-card-header-center'>
                <div className='job-card-dates'>
                    <div className='job-card-date'>Deadline: {job?.dueDate.slice(0,17)}</div>
                </div>
                {job?.accepted ?
                <div className='job-card-status'>Accepted <i className="far fa-check-circle"></i></div>
            : <div className='job-card-status'>Accepted <i className="fas fa-times"></i></div>}
                {job?.completed ?
                <div className='job-card-status'>Completed <i className="far fa-check-circle"></i></div>
            : <div className='job-card-status'>Completed <i className="fas fa-times"></i></div>}
            </div>
            <div className='job-card-header'>
                <div className='job-card-header-left'>
                    <div className='job-card-title'>{job?.title}</div>
                    <div className='job-card-body'>{job?.description}</div>
                </div>
                <div className='job-card-header-right'>
                    <div className='job-card-user'>
                        <div className='job-card-profilePic'>
                            <img src={artist?.profilePic} alt='profile'/>
                        </div>
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
                <div className='job-card-artwork'>
                    <img src={job.completedArtwork}/>
                </div>
            </div>
            }
        </div>
        :
        <div className='job-card' key={job?.id}>
            <div className='job-card-header-center'>
                <div className='job-card-dates'>
                    <div className='job-card-date'>Deadline: {job?.dueDate.slice(0,17)}</div>
                </div>
                {job?.accepted ?
                <div className='job-card-status'>Accepted <i className="far fa-check-circle"></i></div>
            : <button onClick={editAccept} className='job-card-accept-btn'>Accept</button>}
                {job?.completed ?
                <div className='job-card-status'>Completed <i className="far fa-check-circle"></i></div>
            : <EditCompletedJobModal job={job}/>
            // <button onClick={editComplete} className='job-card-complete-btn'>Complete</button>
            }
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
                <div className='job-card-artwork'>
                    <img src={job.completedArtwork}/>
                </div>
            </div>
            }
        </div>)
    )
}

export default JobCard
