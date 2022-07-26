import React from 'react';
import styles from '../styles/ap_1.module.css';

function ap_1(id,title,image,author) {
  return (
    <div className={styles.product}>
        <div className={styles.product_info}>
            <p>{title}</p>
            <p>{author}</p>
        </div>
        <img src={image} alt="" />
        <button>Join Bidding</button>
    </div>
  )
}

export default ap_1