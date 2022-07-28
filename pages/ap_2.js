import React from 'react';
import styles from '../styles/ap_2.module.css'
import Sell_comp from '../components/sell_comp';
import Buy_comp from '../components/buy_comp';
function ap_2() {
  return (
    <div className={styles.page_container}>
        <div className={styles.sell_part}>
            <h1 className={styles.sell_title}>Auctioned Item</h1>
            <Sell_comp
                id="1"
                title="The wings of Fire"
                author="APJ Abdul Kalam"
                image="https://booxoul.com/wp-content/uploads/2022/04/Understanding-The-Resilience-And-The-True-Journey-Of-Indias-Missile-Man-A-Book-Review-Of-Wings-Of-Fire-An-Autobiography-By-APJ-Abdul-Kalam-768x576.jpeg"
                user_name="black_hope_5"
                email="mhmdnihal05@gmail.com"
            />
        </div>
        <div className={styles.buy_part}>
            <h1 className={styles.sell_title}>Auction Calls</h1>
            <div className={styles.home_row}>
                <Buy_comp
                    title="The fault in our Stars"
                    author="John Green"
                    image="http://2.bp.blogspot.com/-wOs-sFOu-is/U86cQm68sZI/AAAAAAAALi8/Un_1CIrEXt8/s1600/faultinourstars.jpg"
                />
                <Buy_comp
                    title="Engineering Mathematics with applications"
                    author="Sudhir Kumar Pundir"
                    image="https://www.cbspd.co.in/media/catalog/product/cache/1/image/c66ed2c04ee7ca3766803238dbeea301/9/7/9789389688870.jpg"
                />

            </div>

        </div>
    
    </div>
  )
}

export default ap_2