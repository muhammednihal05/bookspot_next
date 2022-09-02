import React from 'react';
import Router from 'next/router';
import styles from "../styles/Header.module.css";
import { FaSearch } from 'react-icons/fa';
// import { GrLogin } from 'react-icons/gr';
// import { AiFillShopping } from 'react-icons/ai';



function Header() {
  return (
    <div className="h-20 bg-slate-800 flex items-center">
        <img className={styles.header_logo} src="./Bookspot.png" alt='logo'/>
        <div className={styles.header_search}>
            
            <input className={styles.header_searchInput} type="text" />
            <FaSearch className={styles.header_searchIcon}/>
            
        </div>
        <div className="flex flex-row justify-between space-x-4 text-white ">
            <button className="login_b" type='button' onClick={() => Router.push('/ap_1')}>Auction</button>
            {/* <AiFillShopping/> */}
            <div>
                  <button className="login_b" type='button' onClick={() => Router.push('/login')}>Log in</button>
                  {/* <GrLogin/> */}
                  
            </div>
        </div>
        </div>
    
  )
}

export default Header
