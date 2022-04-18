import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    console.log('user', user);
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home');
  };
  return (
    <div className='container login-container'>
      <SocialLogin />
      <div>
        <p>use the classical way</p>
        <form onSubmit={handleRegister} className='login-from'>
          <input type='text' name='name' id='' placeholder='username' />
          <input type='email' name='email' id='' placeholder='email' required />
          <input type='password' name='password' id='' placeholder='password' required />
          <input onClick={() => setAgree(!agree)} type='checkbox' name='terms' id='terms' />
          <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>
            Accept Capture Wild Nature Terms and Conditions
          </label>
          <input disabled={!agree} type='submit' value='Login' />
        </form>
        <p className='w-50 mx-auto'>
          Already have an account?{' '}
          <span onClick={navigateLogin} style={{ cursor: 'pointer' }} className='text-primary'>
            Please Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;