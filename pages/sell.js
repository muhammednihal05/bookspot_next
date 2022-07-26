import React from 'react';
import Router from 'next/router';
import styles from '../styles/sell.module.css';

function Login() {
  return (
    <div>
      <div className={styles.loginParentDiv}>
        <h1 className={styles.details_head}>Enter Book Details</h1>
        <form>
          <label htmlFor="book_name">Book Name</label>
          <br />
          <input className={styles.input} type="text" id="book_name" name="book_name" />
          <br />
          <label htmlFor="book_author">Book Author</label>
          <br />
          <input className={styles.input} type="text" id="book_author" name="book_author" />
          <br />
          <label htmlFor="book-edition">Book Edition</label>
          <br />
          <input className={styles.input} type="text" id="book-edition" name="book-edition" />
          <br />
          <label htmlFor='pages'>Number of Pages</label>
          <br />
          <input className={styles.input} type="text" id="pages" name="pages" />
          <br />
          <label htmlFor='book_image'>Upload Book Image</label>
          <br />
          <input className={styles.input} type="file" id="book_image" name="book_image" />
          <br />
          <br />
          <button type='button' onClick={() => Router.push('/auction')}>Proceed</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
