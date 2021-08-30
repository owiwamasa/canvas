import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { allArtistTypeLists } from '../../store/artistTypeList'
import { allArtistPages } from '../../store/artistPage'
import { allArtistTypes } from '../../store/artistType'
import './SearchResults.css'

function SearchResults(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const typeLists = useSelector(state => state.artistTypeListReducer.artistTypeLists)
    const lists = typeLists.filter(list => list.artistTypeId === +id)
    const artistPages = useSelector(state => state.artistPageReducer.artistPages)
    const pageList = []
    lists.forEach(list => {
       artistPages.forEach(page => {
           if (page.id === list.artistPageId) pageList.push(page)
        })
    })
    const types = useSelector(state => state.artistTypeReducer.artistTypes)
    const type = types.filter(type => type.id === +id)[0]

    useEffect(() => {
        dispatch(allArtistTypeLists())
        dispatch(allArtistPages())
        dispatch(allArtistTypes())
    },[dispatch])

    return(
        <div className='search-results'>
            <div className='search-results-title'>Search Results for {type.title}</div>
            {pageList ? pageList.map(page => (
                <div className='search-user-card'>
                    <Link to={`/artist-pages/${page.id}`}>
                        <div className='search-user-card-image'>
                            <img src={page.profilePic}/>
                        </div>
                        <div className='search-user-card-info'>
                            <div className='search-user-card-name'>{page.username}</div>
                            <div className='search-user-card-bio'>{page.biography}</div>
                        </div>
                    </Link>
                </div>
            )) : <div>No results :(</div>}
        </div>
    )
}


export default SearchResults
