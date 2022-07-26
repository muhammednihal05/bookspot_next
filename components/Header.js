import React from 'react';
import Router from 'next/router';
import styles from "../styles/Header.module.css";
import { FaSearch } from 'react-icons/fa';
import { GrLogin } from 'react-icons/gr';



function Header() {
  return (
    <div className="h-20 bg-slate-800 flex items-center">
        <img className={styles.header_logo} src="./Bookspot.png" alt='logo'/>
        <div className={styles.header_search}>
            
            <input className={styles.header_searchInput} type="text" />
            <FaSearch className={styles.header_searchIcon}/>
            
        </div>
        <div className="flex flex-row justify-between space-x-4 text-white">
            <p className="">Auction</p>
            <div>
                  <button className="" type='button' onClick={() => Router.push('/login')}>Log in</button>
                  <GrLogin/>
                  
            </div>
        </div>
        </div>
    
  )
}

export default Header
