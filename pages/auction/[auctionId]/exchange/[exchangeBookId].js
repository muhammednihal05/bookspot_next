import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { createMessage, getMessages } from "../../../../lib/supabase.helper"

import { MdSend } from "react-icons/md"

import MessageCard from "../../../../components/MessageCard"
import Header from "../../../../components/Header"
import { supabase } from "../../../../supabse"


export default function ChatPage() {

    const router = useRouter()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const ref = useRef()

    const [messages, setmessages] = useState([])
    const [user, setuser] = useState(null)

    useEffect(() => {
	    const user  = supabase.auth.user()
        setuser(user)
    }, [])
    

    //get messages at initail loading
    useEffect(() => {
      router.isReady && getMessages({exchangeId: router.query?.exchangeBookId, setmessages: setmessages})
    }, [router.isReady])

    
    //get new messages without reloading
    useEffect(() => {
        const messageListener = supabase.from("chat").on("INSERT", () => {
            getNewMessages()
        }).subscribe()

        return () => {
            supabase.removeSubscription (messageListener)
          }
    }, [])
    
    const getNewMessages = async () => {
        console.log('new message');
        await getMessages({exchangeId: router.query?.exchangeBookId, setmessages: setmessages})
    }  
    
    
    //scroll down for new message
    useEffect(() => {
        ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [messages])
    

    // create a new message
    const onSubmit = async (data) => {
        await createMessage({exchangeId: router.query?.exchangeBookId, userId: user?.id, message: data.message})
        reset()
    }


    return (
        <div>
            <Header/>    
            <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>
                <div className={`grid grid-cols-1 gap-y-2 content-end justify-items-stretch px-4 min-h-screen
                    pb-20 pt-24 w-screen`} 
                    ref={ref}>
                    { messages?.map((item)=>
                        <MessageCard host={user?.id} key={item?.id} sender={item?.sender?.id} user={item?.sender?.name} message={item?.message}/>
                        )}
                </div>

                {/* message */}
                <form onSubmit={handleSubmit(onSubmit)} 
                    className='flex justify-between space-x-3 px-2 bg-zinc-800 h-14 w-screen fixed bottom-0 z-50'>
                    <input type='text' {...register("message", {required: true})}
                        className='text-white bg-transparent outline-none w-full'/>
                    <button type='submit'>
                        <MdSend className='w-8 h-8 text-white'/>
                    </button>
                </form>   

            </div>
        </div>
    )
}
