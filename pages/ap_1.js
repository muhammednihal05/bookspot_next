import React from 'react';
import styles from '../styles/ap_1.module.css';
import Product from '../components/product';
import Header from '../components/Header';

function ap_1() {
  return (
    
    <div>
        <Header/>
        <img className={styles.bg_image} src='./Bookspot.png' alt='logo'/>
        <div className={styles.home_container}>
            <div className={styles.home_row}>
                <Product
                  id="1"
                  title="The wings of Fire"
                  author="APJ Abdul Kalam"
                  image="https://booxoul.com/wp-content/uploads/2022/04/Understanding-The-Resilience-And-The-True-Journey-Of-Indias-Missile-Man-A-Book-Review-Of-Wings-Of-Fire-An-Autobiography-By-APJ-Abdul-Kalam-768x576.jpeg"
                />
                <Product
                  id="2"
                  title="The wings of Fire"
                  author="APJ Abdul Kalam"
                  image="https://booxoul.com/wp-content/uploads/2022/04/Understanding-The-Resilience-And-The-True-Journey-Of-Indias-Missile-Man-A-Book-Review-Of-Wings-Of-Fire-An-Autobiography-By-APJ-Abdul-Kalam-768x576.jpeg"
                />

            </div>
          </div>
    
    </div>
  )
}

export default ap_1