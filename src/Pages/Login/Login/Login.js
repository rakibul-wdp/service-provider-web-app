import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
  return (
    <div className='container login-container'>
      <SocialLogin />
      <div>
        <p>use the classical way</p>
        <form className='login-from'>
          <input type='text' name='name' id='' placeholder='email' required />
          <input type='password' name='password' id='' placeholder='password' required />
          <input type='submit' value='Login' />
        </form>
        <p>
          New to Genius Car?{' '}
          <span style={{ cursor: 'pointer' }} className='text-primary'>
            Please Register
          </span>
        </p>
        <p>
          Forget Password?{' '}
          <span style={{ cursor: 'pointer' }} className='text-primary'>
            Reset Password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
