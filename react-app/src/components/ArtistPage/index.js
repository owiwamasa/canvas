import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { oneArtistPage } from "../../store/artistPage"
import EditArtistPageModal from "../EditArtistPageModal"
import './ArtistPage.css'


function ArtistPage(){
    const { artistPageId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const artist = useSelector((state) => state.artistPageReducer)

    useEffect(() => {
        dispatch(oneArtistPage(artistPageId))
    }, [dispatch, artistPageId])

    return(
        <div className='artistPage'>
            {(user?.id === artist?.userId) &&
                <EditArtistPageModal/>
            }
            <div className='artistPage-header-img'>
                <img src={artist.headerImage} alt='profile header'/>
            </div>
            <div className='artistPage-userCard'>
                <div className='artistPage-username'>{artist.username}</div>
                <div className='artistPage-user-img'>
                    <img src={artist.profilePic} alt='profile'/>
                </div>
                <button className='artistPage-job'>Send Work Request</button>
                <button className='artistPage-message'>Message</button>
                <div className='artistPage-bio'>
                    <div className='artistPage-bio-title'>Biography</div>
                    <div className='artistPage-bio-detail'>{artist.biography}</div>
                </div>
            </div>

        </div>
    )
}


export default ArtistPage
