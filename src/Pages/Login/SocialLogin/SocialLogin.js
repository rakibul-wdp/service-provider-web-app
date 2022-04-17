import React from 'react';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import twitter from '../../../images/twitter.png';

const SocialLogin = () => {
  return (
    <div className='login-with-social'>
      <h2>Sign in with</h2>
      <button>
        <img src={google} alt='' />
        <span>Sign in with Google</span>
      </button>
      <button>
        <img src={github} alt='' />
        <span>Sign in with Github</span>
      </button>
      <button>
        <img src={facebook} alt='' />
        <span>Sign in with Facebook</span>
      </button>
      <button>
        <img src={twitter} alt='' />
        <span>Sign in with Twitter</span>
      </button>
    </div>
  );
};

export default SocialLogin;