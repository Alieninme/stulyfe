import React, {useState} from 'react'
import "./login.css";
import {useNavigate} from 'react-router-dom';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleLogin() {  
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    navigate('/home');
  }

  return (
    <div className='mainLoginContainer'>
         <div className='loginWrapper'>
           <span role="img" aria-label="hand">&#x1F44B;</span>
           <h2>Login</h2>
            <form className='loginForm'>
            <div>
            <label htmlFor="email">E-mail</label><br />
            <input type="email" placeholder="Enter your registered e-mail" style={{ paddingLeft: "10px" }} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" placeholder="**********" style={{ paddingLeft: "10px" }} onChange={(e)=>setPassword(e.target.value)} />
            <div className='resetLinks'><p>Remember me</p><h4>Forgot Password?</h4></div>
            </div>
            <button className="btn-login" type="submit" onClick={handleLogin}>Log In</button>
            </form>
           <p className='tnc'>By signing up you accept the <br />
              <span>Terms of Service</span> and <span>Privacy Policy</span></p>
        </div>
    </div>
  )
}
