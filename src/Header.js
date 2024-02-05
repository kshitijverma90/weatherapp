import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { auth } from './firebase';
function Header() {
 
    const[user,setUser]=useState(null);
   useEffect(()=>{
        
       auth.onAuthStateChanged(authUser=>{
         if(authUser){
           setUser(authUser);
         }
         else{
           setUser(null);
         }
       })
       

   },[user]);
  const handleAuthentication=()=>{
      if(user){
          auth.signOut();
      }
  }

  return (
    // <div className='header'>
        
  
    //      <div className='header_nav'>
    //       <div className='header_websitename'>
    //       <h1>Weather website</h1>
    //       </div>
    //       <div className='authenticationheader'>
    //      <Link to={!user &&"/login"}> 
    //          <div onClick={handleAuthentication} className='header_option'>
    //              <span className='header_optionLineOne'>{user ? user.email:'Hello Guest'}</span>
    //             <span className='header_optionLineTwo'>{user ? 'Sign Out':'Sign In'}</span>
    //          </div>
    //          </Link> 
    //          </div>  
    //      </div>
    // </div>
    <header className="weather-header">
    <div className="logo-container">
      <h1>Weather Website</h1>
    </div>
    <Link to={!user &&"/login"}>
    <div className="signin-container">
    <h3 className='header_optionLineOne'>{user ? user.email:'Hello Guest'}</h3>
      <button className="signin-button" onClick={handleAuthentication}>{user ? 'Sign Out':'Sign In'}</button>
    </div></Link>
  </header>
  )
}
export default Header
