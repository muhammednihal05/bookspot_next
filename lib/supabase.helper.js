import { supabase } from "../supabse";

// ------------------------------------------------------------------- auth -----------------------------------------------------------------------
export async function signUp({email, password, data, seterror, setloading, router}){
    setloading(true)
    delete data.password
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    },
    {
      data: data,
    })

    // create a public schema table for users
    if(!error){
        const users = await supabase.from('users').insert([{ 
            id: user.id, name: data.name, email: data.email, phone: data.phone 
        }])
        users.error ? seterror(true) : router.push('/')
    } else 
        seterror(true)
    
    setloading(false)
}

export async function signIn({email, password, seterror, setloading, router}){
    setloading(true)
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    error ? seterror(true) : router.push('/')
    setloading(false)
}

//---------------------------------------------------pofile----------------------------------------------------
export async function updateProfile(data, setsuccess, seterror, setloading){
    setloading(true)
    const { user, error } = await supabase.auth.update({ 
        data: data
    })
    if(error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
    setloading(false)
}

// -------------------------------------------------------------------------------Books --------------------------------------------------------------------------
export async function addBook({data, seterror}){
    // upload book image
    const image = await supabase.storage.from('books').upload(data.book_name.toLowerCase().trim().replace(/\s+/g,"_"), data.book_image[0])
    data.book_image = 'https://ytyzirplprsyoxvxaztk.supabase.co/storage/v1/object/public/' + image?.data?.Key 
    if(image?.error) seterror(true)
    else {
        // inserting book details to book table
        const books = await supabase.from('books').insert([data])
        if (books?.error) seterror(true)
        else {
            return {
                id: books?.data[0]?.id
            }
        }
    }
}



// ----------------------------------------------------------------------------- BOOK SELLING--------------------------------------------------------------------
export async function sellBook({data, seterror, setloading, router}){
    setloading(true)
    // upload book
    const book = await addBook({ data: data, seterror: seterror})
    // updating auction table to add newly selling book
    const auction = await supabase.from('auction').insert([{selling_book: book?.id}])
    auction?.error ? seterror(true) : router.push(`/auction/${auction?.data[0]?.id}`) // redirecting to auction page

    setloading(false)
}
export async function getSellingBooks({setbookData}){
    const books = await supabase.from('auction').select(`*, selling_book(*)`).is('exchanging_book', null)
    setbookData(books?.data)
}
export async function getSellingBook({id, setbookData}){
    const book = await supabase.from('auction').select(`*, selling_book(*)`).match({ id: id })
    setbookData(book?.data[0])
}



// ------------------------------------------------------------------------------ Book Buy ---------------------------------------------------------------------
export async function exchangeBook({data, sellingBookId, seterror, setloading, router}){
    setloading(true)
    // upload exchanging book image
    const book = await addBook({ data: data, seterror: seterror})
    // updating auction buyers table to add newly exchanging book
    const auction = await supabase.from('auction_buyer').insert([{auction: sellingBookId, exchanging_book: book?.id}])
    auction?.error ? seterror(true) : router.push(`/auction/${sellingBookId}`) // redirecting to auction page
    
    setloading(false)
}
export async function getExchangingBooks({id, setexchangingBookData}){
    const book = await supabase.from('auction_buyer').select(`*, exchanging_book(*)`).match({auction: id})
    setexchangingBookData(book?.data)
}
export async function getJoinedAuctions({id, setbooksData}){
    const mybooks = await supabase.from('books').select(`id`).match({uploaded_by: id})
    if(!mybooks?.error){
        const ids = mybooks?.data?.map((item)=> item?.id)
        const books = await supabase.from('auction_buyer').select(`*, auction(*, selling_book(*)), exchanging_book(*)`).in('exchanging_book', ids)
        !books?.error &&  setbooksData(books?.data)
    }
}



// --------------------------------------------------chats-----------------------------------------------------
export async function getMessages({exchangeId, setmessages}){
    const messages = await supabase.from('chat').select(`*, sender(name,id)`).match({ exchange_id: parseInt(exchangeId) }).order('created_at', { ascending: true })
    if (!messages?.error) setmessages(messages.data)
}
export async function getMessage(id, setmessages, seterror){
    const messages = await supabase.from('chats').select(`
        *,
        volunteer (
            name,
            id
        )`).match({ id: id - 1 })

    if (messages?.error) {
        seterror(true)
    } else {
        console.log(messages);
        setmessages((prev)=> [...prev, messages.data[0]])
    }
}
export async function createMessage({exchangeId, userId, message}){
    await supabase.from('chat').insert([{ 
        exchange_id: exchangeId,
        message: message, 
        sender: userId
    }])

}

