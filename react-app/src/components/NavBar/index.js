import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import { allArtistPages } from '../../store/artistPage';
import { allArtistTypes } from '../../store/artistType';
import { allUsers } from '../../store/user';

import './NavBar.css'

const NavBar = () => {
  const [search, setSearch] = useState('')
  const user = useSelector(state => state.session.user);
  const artistPages = useSelector(state => state.artistPageReducer.artistPages)
  const myArtistPageId = artistPages?.filter(page => page?.userId === user?.id)[0]?.id
  const users = useSelector(state => state.userReducer.users)
  const searchUsers = users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
  const artistTypes = useSelector(state => state.artistTypeReducer.artistTypes)
  const searchTypes = artistTypes.filter(type => type.title.toLowerCase().includes(search.toLowerCase()))
  const dispatch = useDispatch();
  const history = useHistory()

  const demoLogin = () => {
    dispatch(login('Demo@email.com', 'password'));
  }

  useEffect(() => {
    dispatch(allArtistPages())
    dispatch(allArtistTypes())
    dispatch(allUsers())
  }, [dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const toPage = (e) => {
    e.preventDefault()
    if (e.target.value.includes('Results')){
      return
  } else if (e.target.value.includes('user')) {
      setSearch('')
      const pageId = (e.target.value.slice(4))
      return history.push(`/artist-pages/${pageId}`);
  } else {
      setSearch('')
      return history.push(`/search-results/${e.target.value}`);
  }
  }

  return (
    <nav>
      <div className='navbar'>
        <div className='nav-logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src={'https://i.imgur.com/KWLdwNk.png'} alt='logo'/>
          </NavLink>
        </div>
        <div className='nav-search'>
          <form id='nav-search-form' onSubmit={onSubmit}>
            <input
            className='nav-search-input'
            placeholder='Search by Username or Artist Tags'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            {search &&
            <select className='nav-search-results' onChange={toPage} size={searchTypes.length + searchUsers.length + 2}>
              <option className='nav-search-results-title'>Artist Tag Results ({searchTypes.length})</option>
              {searchTypes.map(type => (
                <option key={type.id} value={type.id}>{type.title}</option>
              ))}
              <option className='nav-search-results-title'>Users Results ({searchTypes.length})</option>
              {searchUsers.map(user => {
                let artistPageId = artistPages?.find(page => page?.userId === user?.id)?.id
                return (
                <option key={user.id} value={'user' + artistPageId}>{user.username}</option>
              )})}
            </select>
            }
          </form>
        </div>
        {!user ?
        <div className='nav-nonuser'>
            <LoginFormModal />
            <SignUpFormModal />
            <button className='nav-demo' onClick={demoLogin}>Demo</button>
        </div>
        :
        <div className='nav-user'>
          {user.isArtist &&
            <NavLink className='nav-artist-link' to={`/artist-pages/${myArtistPageId}`}>
            My Artist Page
            </NavLink>
          }
            <NavLink className='nav-profile-link' to={`/users/${user.id}`}>
              {user.username}
            </NavLink>
            <LogoutButton />
        </div>
      }
      </div>
    </nav>
  );
}

export default NavBar;
