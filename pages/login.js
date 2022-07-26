import React from 'react';
import Router from 'next/router';
import styles from '../styles/Login.module.css';

function Login() {
  return (
    <div>
      <div className={styles.loginParentDiv}>
        <img className="place-content-center" width="250px" height="200px" src="./Bookspot.png" alt="logo"/>
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input className={styles.input} type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className={styles.input} type="password" id="password" name="password" />
          <br />
          <br />
          <button type='button' onClick={() => Router.push('/login')}>Login</button>
        </form>
        <button type='button' onClick={() => Router.push('/signup')}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
