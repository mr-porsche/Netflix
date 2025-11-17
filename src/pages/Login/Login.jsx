import './Login.css';
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { signin, signup } from '../../firebase';

const Login = () => {
  const [isLogin, setIsLogin] =useState('Sign In');
  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');

  const userAuth = async (e)=> {
    e.preventDefault();
    if (isLogin === 'Sign In') {
      await signin(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  return (
    <div className='login'>
      <img src={Logo} className='login-logo' alt="logo" />
      <div className='login-form'>
        <h1>{isLogin}</h1>
        <form>
          {
            isLogin === 'Sign Up'
              ? <input type='text' value={name} placeholder='Your Name'
                  onChange={(e)=> {setName(e.target.value)}}
                />
              : <></>
          }
          <input type='email' value={email} placeholder='Email'
            onChange={(e)=> {setEmail(e.target.value)}}
          />
          <input type='password' value={password} placeholder='Password'
            onChange={(e)=> {setPassword(e.target.value)}}
          />
          <button onClick={userAuth} type='submit'>{isLogin}</button>
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