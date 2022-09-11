import { useEffect, useState } from 'react';
import styles from '../../../styles/AuctionId.module.css'
import Sell_comp from '../../../components/sell_comp';
import Buy_comp from '../../../components/buy_comp';
import { getExchangingBooks, getSellingBook } from '../../../lib/supabase.helper';
import { useRouter } from 'next/router';
import { supabase } from '../../../supabse';
import Header from '../../../components/Header';


export default function AuctionId() {

    const router = useRouter()

    const [userId, setuserId] = useState(null)
    const [bookData, setbookData] = useState(null)
    const [exchangingBookData, setexchangingBookData] = useState(null)

    useEffect(() => {
        router.isReady && getData()
    }, [router.isReady])

    const  getData = async () => {
        await getSellingBook({id: router?.query?.auctionId, setbookData: setbookData})
        await getExchangingBooks({id: router?.query?.auctionId, setexchangingBookData: setexchangingBookData})
    }

    useEffect(() => {
      const user = supabase.auth.user()
      setuserId(user?.id)
    }, [router])


    return (
        <div>
            <Header/>
            <div className={styles.page_container}>
                <div className={styles.sell_part}>
                    <h1 className={styles.sell_title}>Auctioned Item</h1>
                    <Sell_comp
                        title={bookData?.selling_book?.book_name}
                        author={bookData?.selling_book?.book_author}
                        image={bookData?.selling_book?.book_image}
                        seller={userId== bookData?.selling_book?.uploaded_by }
                        />
                </div>
                <div className={styles.buy_part}>
                    <h1 className={styles.sell_title}>Auction Calls</h1>
                    <div className={styles.home_row}>
                        { exchangingBookData?.map((book)=> 
                            <Buy_comp
                                id={book?.id}
                                title={book?.exchanging_book?.book_name}
                                author={book?.exchanging_book?.book_author}
                                image={book?.exchanging_book?.book_image}
                                seller={userId == bookData?.selling_book?.uploaded_by}
                                key={book?.exchanging_book?.id}
                                />
                            )}

                    </div>

                </div>
            
            </div>
        </div>
    )
}
