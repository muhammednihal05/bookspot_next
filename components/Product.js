import { useRouter } from 'next/router';
import styles from '../styles/product.module.css';

export default function Product({id,title,author,image, seller}) {

  const router = useRouter()

  return (
    <div className={styles.product}>
        <div>
            <p className={styles.product_info}>{title}</p>
            <p className={styles.prioduct_author}>{author}</p>
        </div>
        <img src={image} alt="image" />
        {seller == 'seller' ? 
          <button type='button' onClick={() => router.push(`/auction/${id}`)}>
            Show Offers
          </button>
        : seller == false && 
          <button  type='button' onClick={() => router.push(`/auction/${id}`)}>
            Join Bidding
          </button>
        }
    </div>
  )
}

