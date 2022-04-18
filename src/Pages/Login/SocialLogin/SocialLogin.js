import React from 'react';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import twitter from '../../../images/twitter.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const navigate = useNavigate();

  
  if (googleLoading || githubLoading || facebookLoading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (googleError || githubError || facebookError) {
    errorElement = (
      <p className='text-danger'>
        Error: {googleError?.message} {githubError?.message} {facebookError?.message}
      </p>
    );
  }
  if (googleUser || githubUser || facebookUser) {
    navigate('/home');
  }
  return (
    <div className='login-with-social rounded-start'>
      <h2 className='social-login-heading'>Sign in with</h2>
      {errorElement}
      <button style={{ backgroundColor: '#b07871' }} onClick={() => signInWithGoogle()}>
        <img src={google} alt='' />
        <span>Sign in with Google</span>
      </button>
      <button style={{ backgroundColor: '#6cc644' }} onClick={() => signInWithGithub()}>
        <img src={github} alt='' />
        <span>Sign in with Github</span>
      </button>
      <button style={{ backgroundColor: '#3b5897' }} onClick={() => signInWithFacebook()}>
        <img src={facebook} alt='' />
        <span>Sign in with Facebook</span>
      </button>
      <button style={{ backgroundColor: '	#53abee' }}>
        <img src={twitter} alt='' />
        <span>Sign in with Twitter</span>
      </button>
    </div>
  );
};

export default SocialLogin;