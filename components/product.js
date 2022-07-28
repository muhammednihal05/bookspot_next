import React from 'react';
import Router from 'next/router';
import styles from '../styles/product.module.css';

function product({id,title,author,image}) {
  return (
    <div className={styles.product}>
        <div>
            <p className={styles.product_info}>{title}</p>
            <p className={styles.prioduct_author}>{author}</p>
        </div>
        <img src={image} alt="" />
        <button className="" type='button' onClick={() => Router.push('/ap_2')}>Join Bidding</button>
    </div>
  )
}

export default product