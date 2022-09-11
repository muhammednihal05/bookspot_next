import { useRouter } from 'next/router';
import styles from "../styles/Header.module.css";
import { FaSearch } from 'react-icons/fa';
import { supabase } from '../supabse';
import bg from "../public/Bookspot.png"
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Header() {

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [searchData, setsearchData] = useState(null)
  const [loading, setloading] = useState(false)

  const logOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const onSubmit = async (d) => {
    setsearchData(null)
    setloading(true)
    const author = await supabase.from('books').select('id, book_name, book_author').textSearch('book_author', `${d.search}`, {
      config: 'english',
    })
    const name = await supabase.from('books').select('id, book_name, book_author').textSearch('book_name', `${d.search}`, {
      config: 'english',
    })

    let filteredData = []
    let data = []
    author?.data?.length > 0 && author?.data?.map((item)=> data.push(item))
    name?.data?.length > 0 && name?.data?.map((item)=> data.push(item))
    if (data?.length > 0) {
      const ids = data?.map((item)=> item?.id)
      const books = await supabase.from('auction').select(`id, selling_book`).in('selling_book', ids)
      for (let i = 0; i < data?.length; i++) {
        const bid = data[i]?.id;
        for (let j = 0; j < books?.data?.length; j++) {
          if(bid == books?.data[j]?.selling_book){
            data[i].id = books?.data[j]?.id
            filteredData.push(data[i])
            break
          }
        }
      }
      setsearchData(filteredData)
    }else{
      setsearchData([])
    }
    setloading(false)
  }

  return (
    <div className="h-20 bg-slate-800 flex items-center sticky top-0 z-50">
        <img className={styles.header_logo} src={bg.src} alt='logo'/>
        <form className={styles.header_search} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.header_searchInput} type="text" {...register('search')} />
            <button type='submit'>
              <FaSearch className={styles.header_searchIcon}/>
            </button>
        </form>
        <div className="flex flex-row justify-between space-x-4 text-white ">
            <button className="login_b" type='button' onClick={() => router.push('/')}>Home</button>
            <button className="login_b" type='button' onClick={() => router.push('/auction/all')}>Auction</button>
            <button className="login_b" type='button' onClick={() => router.push('/auction/my')}>My Books</button>
            <button className="login_b" type='button' onClick={logOut}>Log out</button>
        </div>
        <div className='absolute flex flex-col space-y-2 text-white top-14 bg-white left-36 w-96'>
          {searchData?.map((item)=>
            <div className='flex flex-col bg-zinc-800 px-2 cursor-pointer' onClick={()=>router.push('/auction/'+item?.id)}>
                <p className='text-sm font-semibold'>{item?.book_name}</p>
                <p className='text-xs'>{item?.book_author}</p>
            </div>
          )}
          {searchData?.length == 0 && <p className='text-zinc-900'>No match found</p>}
          {loading && <p className='text-zinc-900'>Loading...</p>}
        </div>
    </div>
    
  )
}

export default Header
