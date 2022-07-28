import React from 'react';
import styles from '../styles/buy_comp.module.css';

function buy_comp({id,title,author,image}) {
  return (
    <div>
        <div className={styles.product}>
        <div>
            <p className={styles.product_info}>{title}</p>
            <p className={styles.prioduct_author}>{author}</p>
        </div>
        <img src={image} alt="" />
        <button>Select</button>
    </div>
    </div>
  )
}

export default buy_comp