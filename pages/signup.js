import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from '../lib/supabase.helper';
import styles from "../styles/Signup.module.css";
import bg from "../public/Bookspot.png"


export default function Signup() {

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)

  const onSubmit = data => {
    seterror(null)
    signUp({email: data.email, password: data.password, data: data, seterror: seterror, setloading: setloading, router: router})
  }

  console.log(errors);

  return (
    <div>
      <div className={styles.signupParentDiv}>
        <img width="200px" height="200px"  src={bg.src} alt='logo'></img>
        <form onSubmit={handleSubmit(onSubmit)}> 
          <label htmlFor="name">Name</label>
          <br />
          <input className="input" type="text" {...register('name', { required: 'Name field is required', minLength: 5 })}/>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input className={styles.input} type="email"  {...register('email', { required: 'Email field is required' })}/>
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input className={styles.input} type="number" {...register('phone', { required: 'Phone field is required', min:10 })}/>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className={styles.input} type="password" name="password" {...register('password', { required: 'Password field is required' })}/>
          <br />

          {Object.keys(errors).map((item)=>
            <p className={styles.error} key={item} > {errors?.[item]?.message} </p>
          )}

          {error && <p className={styles.error}>{error?.message}</p>}

          <button type='submit'>
            {loading ? 'Loading...' : 'Signup'}
          </button>
        </form>
        
      </div>
    </div>
  );
}
