import React from 'react';
import './Login.css';
import { Link ,useHistory} from "react-router-dom";
import { useState } from 'react';
import {auth} from './firebase';

function Login({user}) {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginuser =e=>{
        e.preventDefault()

        auth
          .signInWithEmailAndPassword(email,password)
          .then(auth=>{
              history.push('/')
          })
          .catch(error=>alert(error.message))


    }

    const registeruser=e=>{
        e.preventDefault();

        auth
           .createUserWithEmailAndPassword(email,password)
           .then((auth)=>{
               console.log(auth);
               if(auth){
                   history.push('/')
               }
           }) 
           .catch(error=>alert(error.message))
        
    }

    

  return (
    <div className='login'>
      <Link to="/">  <h2 className='heading_login'>Weather Website</h2>  </Link>
      <div className='login_container'>
          <h1>Sign-In</h1>

          <form action="">
              <h5>Email</h5>
              <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
              <h5>Password</h5>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
              <button type='submit' onClick={loginuser} className='login_signInButton'>Sign In</button>
          </form>
          <button onClick={registeruser} className='login_registerButton'>Create Your amazon account</button>
      </div>
    </div>
  )
}

export default Login