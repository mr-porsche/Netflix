import './Login.css';
import Logo from '../../assets/logo.png';
import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] =useState('Sign In');

  return (
    <div className='login'>
      <img src={Logo} className='login-logo' alt="logo" />
      <div className='login-form'>
        <h1>{isLogin}</h1>
        <form>
          {
            isLogin === 'Sign Up'
              ? <input type='text' placeholder='Your Name' />
              : <></>
          }
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>{isLogin}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {
            isLogin === 'Sign In'
              ? <p>New to Netflix? <span onClick={() => {setIsLogin("Sign Up")}}>Sign Up Now</span></p>
              : <p>Already have an account? <span onClick={() => {setIsLogin("Sign In")}}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login;