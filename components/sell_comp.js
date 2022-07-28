import React from 'react';
import styles from '../styles/sell_comp.module.css';
import Router from 'next/router';


function sell_comp({id,title,author,image,user_name,email}) {
  return (
    <div className={styles.sell_row}>
        <div className={styles.left_info}>
            <p className={styles.product_info}>{title}</p>
            <p className={styles.prioduct_author}>{author}</p>
        </div>
        <div className={styles.center_info}>
            <img src={image} alt="" />
            <button className="" type='button' onClick={() => Router.push('/join_auc')}>Join Bidding</button>
        </div>
        <div className={styles.right_info}>
            <p className={styles.product_info}>{user_name}</p>
            <p className={styles.prioduct_author}>{email}</p>
        </div>
    </div>
  )
}

export default sell_comp