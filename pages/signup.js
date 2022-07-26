import React from 'react';
import styles from "../styles/Signup.module.css";

export default function Signup() {
  return (
    <div>
      <div className={styles.signupParentDiv}>
        <img width="200px" height="200px" src="./Bookspot.png" alt='logo'></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input className="input" type="text" id="fname" name="name"/>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className={styles.input} type="email" id="email" name="email"/>
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input className={styles.input} type="number" id="lname" name="phone"/>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className={styles.input} type="password" id="lname" name="password"/>
          <br />
          <br />
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}
