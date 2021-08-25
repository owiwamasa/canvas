import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { oneArtistPage } from "../../store/artistPage"


function ArtistPage(){
    const { artistPageId } = useParams()
    const dispatch = useDispatch()
    const artist = useSelector((state) => state.artistPageReducer)
    console.log(artist.username)

    useEffect(() => {
        dispatch(oneArtistPage(artistPageId))
    }, [dispatch, artistPageId])

    return(
        <div>
            <div className='artistPage-header-img'>
                <img src={artist.headerImage} alt='profile header'/>
            </div>
            <div className='artistPage-user'>
                <div>{artist.username}</div>
                <div>
                    <img src={artist.profilePic} alt='profile'/>
                </div>
            </div>
        </div>
    )
}


export default ArtistPage
