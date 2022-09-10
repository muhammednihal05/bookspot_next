import { useEffect, useState } from 'react';
import styles from '../../styles/Auction.module.css';
import Product from '../../components/Product';
import Header from '../../components/Header';
import { getJoinedAuctions } from '../../lib/supabase.helper';
import { supabase } from '../../supabse';
import { useRouter } from 'next/router';
import bg from "../../public/Bookspot.png"
import TwoProduct from '../../components/TwoProducts';


export default function AuctionsJoined() {

  const router = useRouter()

  const [userId, setuserId] = useState(null)
  const [booksData, setbooksData] = useState(null)
  
  useEffect(() => {
    const user = supabase.auth.user()
    setuserId(user?.id)
    getJoinedAuctions({id: user?.id, setbooksData: setbooksData})
  }, [])

  console.log(booksData);


  return (
    <div>
        <Header/>
        <img className={styles.bg_image} src={bg.src} alt='logo'/>
        <div className='flex flex-col items-center'>
            <div className='flex space-x-10 py-6'>
              <button className={`bg-white w-48 h-12 `} onClick={()=> router.push('/auction/all')}>
                All
              </button>
              <button className={`bg-white w-48 h-12 `} onClick={()=> router.push('/auction/my')}>
                My Books
              </button>
              <button className={`bg-white w-48 h-12 `} onClick={()=> router.push('/auction/joined')}>
                Joined Auctions
              </button>
            </div>
            <div className='grid grid-cols-3 gap-6 place-content-center justify-items-center'>
                { booksData?.map((book)=>
                <TwoProduct
                  key={book?.id}
                  id={book?.id}
                  auctionId={book?.auction?.id}
                  exchange={book?.exchanging_book}
                  selling={book?.auction?.selling_book}
                />
                )}
            </div>
          </div>
    
    </div>
  )
}

