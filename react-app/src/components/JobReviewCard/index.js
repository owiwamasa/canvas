import './JobReviewCard.css'

function JobReviewCard({job, jobReview, reviewUser}){
    return (
        <div className='review-card' key={job?.id}>
            <div className='review-img-div'>
                <div className='review-img'>
                    <img src={job?.completedArtwork} alt='artwork'/>
                </div>
            </div>
            {jobReview?.review ?
            <div className='review-user'>
                <div className='review-text'>"{jobReview?.review}"</div>
                    <div className='review-user-info'>
                        <div className='review-user-img'>
                            <img src={reviewUser?.profilePic} alt='profile'/>
                        </div>
                        <div>-{reviewUser?.username}</div>
                    </div>
            </div>
            :
            <div><div className='review-user'>Awaiting user review...</div></div>}
        </div>
    )
}


export default JobReviewCard
