import React from 'react';
import styles from "../styles/Home.module.css";
import Header from '../components/Header';
import {MdSell} from 'react-icons/md';
import {ImBooks} from 'react-icons/im';
import Router, { useRouter } from 'next/router';
import bg from "../public/Bookspot.png"



function Home() {

  const router = useRouter()

  return (
    <div className={styles.home}>
         <div className={styles.home_container}>
            <Header/>
            <img className={styles.bg_image} src={bg.src}alt='logo'/>
            <div className={styles.button_items}>
                <button type='button' onClick={() => router.push('/sell')}>
                  <div className={styles.sell_button}>
                    <MdSell className={styles.sell_logo}/><br/><b>SELL</b>
                  </div>
                </button>
                <button  type='button' onClick={() => router.push('/auction/all')}>
                  <div className={styles.buy_button}>
                    <ImBooks className={styles.buy_logo}/><br/><b>BUY</b>
                  </div>
                </button>
                {/* <button  type='button' onClick={() => router.push('/request')}>
                  <div className={styles.request_button}>
                    <ImBooks className={styles.buy_logo}/><br/><b>REQUEST BOOK</b>
                  </div>
                </button> */}
            </div>
        </div> 
    </div>
  )
}

export default Home
