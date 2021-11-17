import React from 'react'
import { FaTimes } from 'react-icons/fa';
import "../styles/Login.css";

function Login({ id, fct }) {
  return (
    <div className="Login" id={id}>
    <div className="popup">
      <div className="close-btn" onClick={fct}><FaTimes/></div>
      <div className="loginForm">
      <h2>Log in</h2>
      <div className="form-element">
        <label form="email">Email</label>
        <input type="text" id="email" placeholder="Enter email"/>
      </div>
      <div className="form-element">
        <label form="password">Password</label>
        <input type="password" id="password" placeholder="Enter password"/>
      </div>
      <div className="form-element">
        <button className="btn">Sign in</button>
      </div>
      <div className="form-element">
        <a href="#">Forgot password?</a>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
