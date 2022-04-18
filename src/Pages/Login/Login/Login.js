import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || '/';
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate('/register');
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      // toast('Sent email');
    } else {
      // toast('please enter your email address');
    }
  };
  return (
    <div className='container login-container'>
      <SocialLogin />
      <div>
        <p>use the classical way</p>
        <form onSubmit={handleSubmit} className='login-from'>
          <input ref={emailRef} type='text' name='name' id='' placeholder='email' required />
          <input ref={passwordRef} type='password' name='password' id='' placeholder='password' required />
          <input type='submit' value='Login' />
        </form>
        {errorElement}
        <p>
          New to Capture Wild Nature?{' '}
          <span onClick={navigateRegister} style={{ cursor: 'pointer' }} className='text-primary'>
            Please Register
          </span>
        </p>
        <p>
          Forget Password?{' '}
          <span onClick={resetPassword} style={{ cursor: 'pointer' }} className='text-primary'>
            Reset Password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
