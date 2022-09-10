import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/buy_comp.module.css';

function buy_comp({id,title,author,image, seller}) {

  const router = useRouter()

  return (
    <div>
        <div className={styles.product}>
        <div>
            <p className={styles.product_info}>{title}</p>
            <p className={styles.prioduct_author}>{author}</p>
        </div>
        <img src={image} alt="" />
        { seller && <button onClick={()=> router.push(`${router.asPath}/exchange/${id}`)}> Select</button>}
    </div>
    </div>
  )
}

export default buy_comp