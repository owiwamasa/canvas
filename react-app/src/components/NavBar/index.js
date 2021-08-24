import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);

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
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
          <div>
            <button>Demo</button>
          </div>
        </div>
        :
        <div className='nav-user'>
          <div>
            <NavLink to='/users/:id' exact={true} activeClassName='active'>
              Profile Page
            </NavLink>
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      }
      </div>
    </nav>
  );
}

export default NavBar;
