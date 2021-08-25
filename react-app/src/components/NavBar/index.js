import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoLogin = () => {
    dispatch(login('Demo@email.com', 'password'));
  }

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
            <NavLink className='nav-artist-link' to={`/artist-page/${user.id}`} exact={true} activeClassName='active'>
            My Artist Page
            </NavLink>
          }
            <NavLink className='nav-profile-link' to={`/users/${user.id}`} exact={true} activeClassName='active'>
              {`${user.username}'s Page`}
            </NavLink>
            <LogoutButton />
        </div>
      }
      </div>
    </nav>
  );
}

export default NavBar;
