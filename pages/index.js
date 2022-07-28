import React from 'react';
import styles from "../styles/Home.module.css";
import Header from '../components/Header';
import {MdSell} from 'react-icons/md';
import {ImBooks} from 'react-icons/im';
import Router from 'next/router';

//import pic from '../public/Bookspot.png';

function Home() {
  return (
    <div className={styles.home}>
         <div className={styles.home_container}>
            <Header/>
            <img className={styles.bg_image} src='./Bookspot.png' alt='logo'/>
            <div class={styles.button_items}>
                <button className="" type='button' onClick={() => Router.push('/sell')}><div class={styles.sell_button}><MdSell className={styles.sell_logo}/><br/><b>SELL</b></div></button>
                <button className="" type='button' onClick={() => Router.push('/ap_1')}><div class={styles.buy_button}><ImBooks className={styles.buy_logo}/><br/><b>BUY</b></div></button>
                <div class={styles.request_button}><ImBooks className={styles.buy_logo}/><br/><b>REQUEST BOOK</b></div>
                {/* <div class={styles.buy_button}><ImBooks className={styles.buy_logo}/><br/><b>FREE BOOKS</b></div> */}
            </div>
            
            
        </div> 
    </div>
  )
}

export default Home
