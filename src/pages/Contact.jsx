import React, { useContext, useState } from 'react'
import { ThemeContxt } from '../context/ThemeContxt'

export const Contact = () => {
    const {darkMode} = useContext(ThemeContxt)

    const [userInp,setuserInp] = useState({
        name:"",email:"",message:""
    })
  return (
    <div className={`${darkMode?"bg-black text-white":"bg-white text-black"} w-full min-h-96 flex items-center justify-center`}>
      
   <div className="w-[90%] min-h-full mb-5 border-[1.6px] rounded-xl p-4 border-zinc-300">
   <h1 className='text-2xl uppercase text-zinc-400'>Get in touch</h1>
   <h1 className='text-8xl tb:text-5xl lm:text-4xl min-h-28 mt-2 font-semibold bg-gradient-to-br to-[rgb(253,80,80)] from-[#ffeb0c] inline-block text-transparent bg-clip-text '> Contact .</h1>
   
   <form action="" className='flex flex-col mb-4'>
   <div className="flex flex-col">
    <h1 className='text-lg'>Your Name*</h1>
    <input type="text" className='mt-1 w-full p-3 border-[1.6px] border-zinc-300 rounded-xl focus:outline-none' placeholder='Ex- Aman Gupta'/>
   </div>

   <div className="flex flex-col mt-4">
    <h1 className='text-lg'>Your Email*</h1>
    <input type="email" className='mt-1 w-full p-3 border-[1.6px] border-zinc-300 rounded-xl focus:outline-none' placeholder='Ex- aman@gmail.com'/>
   </div>

   <div className="flex flex-col mt-4">
    <h1 className='text-lg'>Your Name*</h1>
    <textarea className='mt-1 w-full p-3 max-h-32 border-[1.6px] border-zinc-300 rounded-xl focus:outline-none' placeholder='What do you want to say?'/>
   </div>

   <button className='border-[1.6px] border-zinc-300 py-3 mt-4 hover:border-zinc-500 transition-all duration-300 rounded-xl'>Submit Details</button>

   </form>

   </div>

    </div>
  )
}

