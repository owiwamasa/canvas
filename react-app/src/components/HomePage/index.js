import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allArtistTypes } from "../../store/artistType"
import { allUsers } from "../../store/user"
import './HomePage.css'

function HomePage(){
    const dispatch = useDispatch()
    const artistTypes = useSelector(state => state.artistTypeReducer.artistTypes)
    const users = useSelector(state => state.userReducer.users)
    const artists = users.filter(user => user.isArtist)
    const popularArtists = artists.sort((a, b) => (a.numCompletedJobs < b.numCompletedJobs) ? 1 : -1).slice(0,10)

    useEffect(() => {
        dispatch(allArtistTypes())
        dispatch(allUsers())
    }, [dispatch])
    return(
        <div>
            <div className='home-page-header'>
                <div className='home-page-header-title'>Discover and hire freelance artists.<br></br>Create an 'Artist Page' and <br></br>start receiving job inquiries.</div>
                <img src='https://images.pexels.com/photos/4212917/pexels-photo-4212917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='home header'/>
            </div>
            <div className='home-artistTypes-scroll-title'>Find Arists By Specialty</div>
            <div className='home-artistTypes-scroll'>
                {artistTypes && artistTypes.map(type => (
                    <div className='home-artistTypes-div' key={type.id}>
                        <div className='home-artistTypes-image-div'>
                            <div className='home-artistTypes-title'>{type.title}</div>
                            <img className='home-artistTypes-image' src={type.image} alt='artist-type'/>
                        </div>
                    </div>
                ))}
            </div>
            <div className='home-page-popular'>
                <div className='home-page-popular-title'>Popular Artists</div>
                {popularArtists && popularArtists.map(artist => (
                    <div key={artist.id}>
                        <div>{artist.username}</div>
                        <div>
                            <img src={artist.profilePic} alt='profile'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default HomePage
