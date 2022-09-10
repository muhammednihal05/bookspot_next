import { useEffect, useState } from 'react';
import styles from '../../styles/Auction.module.css';
import Product from '../../components/Product';
import Header from '../../components/Header';
import { getSellingBooks } from '../../lib/supabase.helper';
import { supabase } from '../../supabse';
import { useRouter } from 'next/router';
import bg from "../../public/Bookspot.png"

export default function AuctionMy() {

  const router = useRouter()

  const [bookData, setbookData] = useState(null)
  const [userId, setuserId] = useState(null)

  useEffect(() => {
    const user = supabase.auth.user()
    setuserId(user?.id)
    getSellingBooks({setbookData: setbookData})
  }, [])


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
            <div className='grid grid-cols-5 gap-6 place-content-center justify-items-center'>
              { bookData?.filter((item)=> item?.selling_book?.uploaded_by == userId)?.map((book)=>
                <Product
                key={book?.id}
                id={book?.id}
                title={book?.selling_book?.book_name}
                author={book?.selling_book?.book_author}
                image={book?.selling_book?.book_image}
                seller={ 'seller' }
                />
                )}
            </div>
          </div>
    
    </div>
  )
}

