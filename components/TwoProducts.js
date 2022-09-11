import { useRouter } from 'next/router';

export default function TwoProduct({id, auctionId, exchange, selling}) {

  const router = useRouter()

  return (
    <div className='flex flex-col justify-center items-center py-4 px-6 bg-white space-y-5'>

      <div className='flex space-x-6 '>

        <div className='flex flex-col space-y-4'>
          <h5 className='text-2xl font-bold'>Exchanging Book</h5>
          <div className='flex flex-col'>
            <h6>{exchange?.book_name}</h6>
            <p>{exchange.book_author}</p>
          </div>

          <img className='w-40 h-40' src={exchange?.book_image}/>

        </div>

        <div className='flex flex-col space-y-4'>
          <h5 className='text-2xl font-bold'>Selling Book</h5>
          <div className='flex flex-col'>
            <h6>{selling?.book_name}</h6>
            <p>{selling.book_author}</p>
          </div>

          <img className='w-40 h-60' src={selling?.book_image}/>

        </div>
      </div>

      <button className='bg-yellow-500 border px-4 py-2' onClick={()=>router.push('/auction/'+ auctionId + '/exchange/' + id)}>
        See Chat
      </button>

    </div>
  )
}

