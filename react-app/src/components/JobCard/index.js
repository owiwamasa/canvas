import './JobCard.css'

function JobCard({artist, otherUser, job}){
    return(
    (job.userId === otherUser.id ?
        <div className='job-card' key={job.id}>
            <div className='job-card-header-center'>
                <div className='job-card-dates'>
                    <div className='job-card-date'>Deadline: {job.dueDate.slice(0,17)}</div>
                </div>
                {job.accepted ?
                <div className='job-card-status'>Accepted <i class="far fa-check-circle"></i></div>
            : <div className='job-card-status'>Accepted <i class="fas fa-times"></i></div>}
                {job.completed ?
                <div className='job-card-status'>Completed <i class="far fa-check-circle"></i></div>
            : <div className='job-card-status'>Completed <i class="fas fa-times"></i></div>}
            </div>
            <div className='job-card-header'>
                <div className='job-card-header-left'>
                    <div className='job-card-title'>{job.title}</div>
                    <div className='job-card-body'>{job.description}</div>
                </div>
                <div className='job-card-header-right'>
                    <div className='job-card-user'>
                        <div className='job-card-profilePic'>
                            <img src={artist.profilePic} />
                        </div>
                        <div className='job-card-name'>Artist:</div>
                        <div>{artist.username}</div>
                    </div>
                </div>
            </div>
            <div className='job-card-edit-btns'>
                <button><i className="fas fa-edit"></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
        :
        <div className='job-card' key={job.id}>
            <div className='job-card-header-center'>
                <div className='job-card-dates'>
                    <div className='job-card-date'>Deadline: {job.dueDate}</div>
                </div>
                {job.accepted ?
                <div>Accepted <i class="far fa-check-circle"></i></div>
            : <button>Accept</button>}
                {job.completed ?
                <div>Completed <i class="far fa-check-circle"></i></div>
            : <button>Complete</button>}
            </div>
            <div className='job-card-header'>
                <div className='job-card-header-left'>
                    <div className='job-card-title'>{job.title}</div>
                    <div className='job-card-body'>{job.description}</div>
                </div>
                <div className='job-card-header-right'>
                    <div className='job-card-user'>
                        <div className='job-card-profilePic'>
                            <img src={otherUser.profilePic} />
                        </div>
                    <div>{otherUser.username}</div>
                </div>
            </div>
        </div>
        </div>)
    )
}

export default JobCard
