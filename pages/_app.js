import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import '../styles/globals.css'
import { supabase } from '../supabse';

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [isAuthenticated, setisAuthenticated] = useState(false)

  useEffect(() => {
    if(!isAuthenticated){
      const user = supabase.auth.user()
      if(user === null && router.asPath !== '/signup' ) {
        setisAuthenticated(false) 
        router.push('/login')
      } else if(router.asPath == '/signup' && user === null){
        setisAuthenticated(false) 
      } else setisAuthenticated(true)
    } 
  }, [router])
  
  return(
    <Component {...pageProps} />
  )
}

export default MyApp
