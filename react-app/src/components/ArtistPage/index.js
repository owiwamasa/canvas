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
import ArtistTypeForm from "../ArtistTypeForm"
import { allArtistTypeLists } from "../../store/artistTypeList"
import { allArtistTypes } from "../../store/artistType"
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
    const artistTypes = useSelector(state => state.artistTypeReducer.artistTypes)
    const typeLists = useSelector(state => state.artistTypeListReducer.artistTypeLists)
    const myLists = typeLists.filter(list => list.artistPageId === +artistPageId)
    const myTypeTitles = myLists?.map(list => {
        let typeTitle = artistTypes?.find(type => list?.artistTypeId === type.id)?.title
        return typeTitle
    })
    const myTags = myTypeTitles?.join(', ')
    const [artistTypeButtonClicked, setArtistTypeButtonClicked] = useState(false)

    useEffect(() => {
        dispatch(allArtistPages())
        dispatch(getAllPosts())
        dispatch(allJobs())
        dispatch(allArtistTypeLists())
        dispatch(allArtistTypes())
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
                        {hasJob ?
                          <button className='artistPage-job-sent' disabled={true}>Work Request Sent <i className="fas fa-check"></i></button>
                        : <CreateJobModal artistId={artist?.userId} />}
                        <button className='artistPage-message'>Message</button>
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
                {myPosts && myPosts.map(post => (
                    <div key={post.id} className='artistPage-post'>
                        <ViewPostModal post={post} artist={artist} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ArtistPage
