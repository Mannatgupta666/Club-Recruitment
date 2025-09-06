import styles from'./App.module.css';
import {Inputbar} from '../my_comp/inputbar';
import { Button } from '../my_comp/button';
import React, {useState} from 'react'

function Login() {
    const [email,setemail]=useState("");
    const [enrollment,setenrollment]=useState("");
    const [password,setpassword]=useState("");

  return (
    <div className={styles.back}>
      <div className={styles.box}>
        <h1 className={styles.welcome}>Welcome Back</h1>
        <Inputbar placeholder="Enter IITR Email" label="IITR EMAIL" type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <Button order="Get OTP" to="/verify"/>
        <div className={styles.wrapper}>
          <div className={styles.label}>OR</div>
          <div className={styles.divider}></div>
        </div>
        <Inputbar placeholder="Enter Enrollment Number" label="Enrollment Number" type="text" value={enrollment} onChange={(e)=>{setenrollment(e.target.value)}} />
        <Inputbar placeholder="Enter Password" label="Password" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <a className={styles.forgetpassword}>Forget Password?</a>
         <Button order="Sign In"/>
      </div>

    </div>
  );
}

export default Login;
