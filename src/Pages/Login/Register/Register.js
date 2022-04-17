import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  return (
    <div className='container login-container'>
      <SocialLogin />
      <div>
        <p>use the classical way</p>
        <form className='login-from'>
          <input type='text' name='name' id='' placeholder='username' />
          <input type='text' name='name' id='' placeholder='email' required />
          <input type='password' name='password' id='' placeholder='password' required />
          <input type='submit' value='Login' />
        </form>
        <p className='w-50 mx-auto'>
          Already have an account?{' '}
          <span style={{ cursor: 'pointer' }} className='text-primary'>
            Please Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;