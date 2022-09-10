import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';
import { signIn } from '../lib/supabase.helper';
import { useForm } from 'react-hook-form';
import bg from "../public/Bookspot.png"


function Login() {

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)

  const onSubmit = data => {
    signIn({email: data.email, password: data.password, seterror: seterror, setloading: setloading, router: router})
  }

  return (
    <div>
      <div className={styles.loginParentDiv}>
        <img className="place-content-center" width="250px" height="200px" src={bg.src} alt="logo"/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <br />
          <input className={styles.input} type="email" {...register('email', { required: 'Email field is required' })}/>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className={styles.input} type="password" {...register('password', { required: 'Password field is required' })} />
          <br />

          {Object.keys(errors).map((item)=>
            <p className={styles.error} key={item} > {errors?.[item]?.message} </p>
          )}

          {error && <p className={styles.error}>Error occured please try again later</p>}

          <button type='submit' >
            { loading ? 'Loading...' : 'Login' }
          </button>
        </form>
        <h6>Or don't have an account?</h6>
        <button type='button' onClick={() => router.push('/signup')}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
