import React from 'react'
import styles from './Login.module.css'
import arrowWhite from '../../assets/Images/arrowWhite.svg'
import loginBackground from '../../assets/Images/loginBackground.svg'
import { NavLink } from 'react-router-dom'


import LoginForm from './components/LoginForm'

const Login = () => {
    
  return (
    <div>
    <div className={styles.loginContainerDiv}>
    <div className={styles.loginContainer}>
 
<ul >
<div >
    <img src={arrowWhite} alt="" />
    <a href="/home">Main page</a>
</div>
<li>
    <img src={loginBackground} alt="" />
    <div className={styles.loginLiDiv}>
<div className={styles.loginLiDiv1}>
    <div className={styles.loginLiDiv2}></div>
    <div className={styles.loginLiDiv3}>
       <div className={styles.loginLiDiv3P}>Hi</div>
       <div className={styles.loginLiDiv3P1}>Pizza Hut</div>

    </div>
    <div>
        
    </div>


  
</div>

<div className={styles.log}>Log in and get access on all services with one account</div>
<div className={styles.log1}>
<label ><NavLink to='/authorization'>Log In</NavLink> </label>
</div>
    </div>

</li>
</ul>

<div className={styles.formContainer}>
   <div ><LoginForm/></div> 
</div>

   
    </div>
   
    </div>
    <div className={styles.openLoginDiv}><LoginForm/></div> 
    </div>
  )
}

export default Login