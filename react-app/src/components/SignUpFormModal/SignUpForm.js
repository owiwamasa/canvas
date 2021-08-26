import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    let errs = []

    if (password !== repeatPassword) {
      errs.push('Passwords do not match')
      setErrors(errs)
      return
    }
    const data = await dispatch(signUp(username, email, password, profilePic));
    if (data){
      errs = [...errs, ...data]
      setErrors(errs)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className='form-header'>SIGN UP</div>
      <div className='form-errors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='signup-div'>
        <div className='signup-1'>
          <div className='form-input'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='form-input'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
        </div>
        <div className='signup-2'>
        <div className='form-input'>
            <input
              type='text'
              name='email'
              placeholder='Email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='form-input'>
            <input
              type='password'
              name='repeat_password'
              placeholder='Confirm Password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
            ></input>
          </div>
        </div>
      </div>
      <div className='form-input signup-3'>
        <input
          type='text'
          name='profilePic'
          placeholder='Profile Picture URL'
          onChange={(e) => setProfilePic(e.target.value)}
          value={profilePic}
        ></input>
      </div>
      <button className='form-submit' type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
