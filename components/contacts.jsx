'use client'
import {useState} from 'react'
import Image from 'next/image'
import '../app/globals.css'

export default function Contacts() {
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  
 


  return (
    <div id='contacts' className='w-[800px] md:ml-[20%] flex justify-center items-center border-spacing-1 pl-4 bg-gray-950 brightness-150  max-[320px]:justify-start'  style={{borderRadius:'48% 66% 100% 100% /6% 79% 16% 26%'}}>
      
      <div className='w-1/2 flex flex-col gap-2 ml-4 '>
<h1 className='text-xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300'><span className='underline underline-offset-4 text-yellow-300'>CO</span>NTACT ME</h1>
  
  <label className='text-slate-300 text-sm'>Enter Your Email</label>
  <input type='text' className='w-[250px] h-8 rounded-full p-3 font-bold ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <label className='text-slate-300 text-sm'>Enter Your Message</label>
  <textarea className='w-[250px] h-24 rounded-md p-2 font-bold' value={message} onChange={(e)=>setMessage(e.target.value)}/>
  <button className='w-24 py-2 m-2 font-bold text-sm text-center bg-yellow-600 rounded-full  shadow-yellow-300 hover:animate-pulse'  >contact me</button>

    </div>
    <div className='w-1/2  '>
       <Image src='/programmer-removebg-preview.png' alt='programmer' width={300} height={400} className='-mt-6 -ml-16 max-sm:hidden' />
      </div>
    </div>
  )
}
