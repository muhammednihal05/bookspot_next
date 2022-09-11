
export default function MessageCard({host, user, sender, message}) {

  return (
    <div className={`flex flex-col py-3 bg-zinc-800 rounded-2xl rounded-tl-lg px-8
      ${ host == sender ? 'justify-self-end': 'justify-self-start'} `}>
        {host !== sender && <p className='text-sm text-rose-700 font-medium'>{user}</p> }
        <p className='text-lg font-bold ' >{message}</p>
    </div>
  )
}
