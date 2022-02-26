import './login.css'

import React from 'react'

import {useState} from 'react'

function Login() {


    const [tab,settab]=useState(0);

    const handletab=(number)=>{
        settab(number);
    }


  return (
    <div className='Login'>

    <div className="login-container">

    <div className="login-header">
    <div className={tab===0 ?"tab active-tab":"tab"} onClick={()=>handletab(0)}>
        Admin
    </div>
    <div className={tab===1 ?"tab active-tab":"tab"} onClick={()=>handletab(1)}>
        Client
    </div>
    </div>


    <div className="login-center">
        <div className="login-title">
    <h1>Login</h1>
    <p>Login into our account to get all the facilities provided by us.Thank you to join us.</p>
    </div>

    <div className="login-label">

    <label>E-mail</label>
    <input type="email" className='email-label'/>

    <label>Password</label>
    <input type="email" className='email-label'/>
    
    </div>

    </div>

    <div className="login-bottom">
    <button className='login-btn'>Login</button>
    <div className="signup-option">
    <p>Don't have an account? </p>
    <p><a href="#"> Sign Up Now</a></p>
    </div>

    </div>

    </div>









    </div>
  )
}

export default Login