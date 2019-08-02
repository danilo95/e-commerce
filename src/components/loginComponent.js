import React from 'react';
import './css/login.css'
const LoginComponent=()=>{
  return(
   <>
    <form className="log-in">
    <h1 className="title">Hello!</h1>
    <input className="input" type="text" autoFocus placeholder="Email" />
    <input className="input" type="password" placeholder="Password" />
    <button className="input submit" type="submit">Log In</button>
  </form>
</>
);
  }

export default LoginComponent;