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
  const [profilePic, setProfilePic] = useState(null);
  const [imageLoading, setImageLoading] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    let errs = []

    if (password !== repeatPassword && !errors.find(error => error.includes('Passwords'))) {
      errs.push('Passwords do not match')
      setErrors(errors.concat(errs))
    }
    if (!profilePic && !errors.find(error => error.includes('Profile'))) {
      errs.push('Profile Picture is required.')
      setErrors(errors.concat(errs))
    }

    const formData = new FormData()
    formData.append('username', username)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('profilePic', profilePic)
    setImageLoading(true)
    const data = await dispatch(signUp(formData));
    if (data){
      errs = [...errs, ...data]
      setErrors(errors.concat(errs))
    } else {
      setImageLoading(false)
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
      {/* <div className='form-errors-signup'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}
      <div className='signup-div'>
        <div className='signup-1'>
          <div className='form-input'>
            {errors.filter(err => err.includes('username')).map(err => (
              <div className='form-errors-signup' key={err}><div>{err.slice(0,8)} {err.slice(22)}</div></div>
            ))}
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='form-input'>
          {errors.filter(err => err.includes('Password')).map(err => (
              <div className='form-errors-signup signup-password-error' key={err}><div>{err}</div></div>
            ))}
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
        {errors.filter(err => err.includes('email')).map(err => (
              <div className='form-errors-signup' key={err}><div>{err.slice(0,6)} {err.slice(19)}</div></div>
            ))}
            <input
              type='text'
              name='email'
              placeholder='Email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='form-input'>
          {errors.filter(err => err.includes('Password')).map(err => (
              <div className='form-errors-signup signup-password-error' key={err}><div><br></br></div></div>
            ))}
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
      <div className='form-input-image-upload'>
      {errors.filter(err => err.includes('Picture')).map(err => (
              <div className='form-errors-signup' key={err}><div>{err}</div></div>
            ))}
        <label>Upload Profile Picture:</label>
        <input
          type='file'
          accept='image/*'
          onChange={(e) => setProfilePic(e.target.files[0])}
        ></input>
      </div>
      {(imageLoading) && <p className='form-loading'>Loading...</p>}
      <button className='form-submit' type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
