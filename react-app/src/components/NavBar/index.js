import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import { allArtistPages } from '../../store/artistPage';

import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const artistPages = useSelector(state => state.artistPageReducer.artistPages)
  const myArtistPageId = artistPages?.filter(page => page?.userId === user?.id)[0]?.id
  const dispatch = useDispatch();

  const demoLogin = () => {
    dispatch(login('Demo@email.com', 'password'));
  }

  useEffect(() => {
    dispatch(allArtistPages())
  }, [dispatch])

  return (
    <nav>
      <div className='navbar'>
        <div className='nav-logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src={'https://i.imgur.com/KWLdwNk.png'} alt='logo'/>
          </NavLink>
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
