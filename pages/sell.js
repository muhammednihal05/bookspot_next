import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/sell.module.css';
import { sellBook } from '../lib/supabase.helper';
import { useForm } from 'react-hook-form';
import { supabase } from '../supabse';

function Login() {

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)

  const onSubmit = data => {
    const user = supabase.auth.user()
    data.uploaded_by = user.id
    sellBook({data: data, seterror: seterror, setloading: setloading, router: router})
  }
  
  return (
    <div>
      <div className={styles.loginParentDiv}>
        <h1 className={styles.details_head}>Enter Book Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="book_name">Book Name</label>
          <br />
          <input className={styles.input} type="text" {...register('book_name', { required: 'Book Name field is required' })} />
          <br />
          <label htmlFor="book_author">Book Author</label>
          <br />
          <input className={styles.input} type="text" {...register('book_author', { required: 'Book Author field is required' })} />
          <br />
          <label htmlFor="book_edition">Book Edition</label>
          <br />
          <input className={styles.input} type="text" {...register('book_edition', { required: 'Book Edition field is required' })} />
          <br />
          <label htmlFor='pages'>Number of Pages</label>
          <br />
          <input className={styles.input} type="number" {...register('pages', { required: 'Pages field is required' })} />
          <br />
          <label htmlFor='book_image'>Upload Book Image</label>
          <br />
          <input className={styles.input} type="file" {...register('book_image', { required: 'Book Image field is required' })} />
          <br />

          {Object.keys(errors).map((item)=>
            <p className={styles.error} key={item} > {errors?.[item]?.message} </p>
          )}

          {error &&  <p className={styles.error} > Error occured, try again </p>}

          <button type='submit' >
            {loading ? 'Loading...' : 'Proceed'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
