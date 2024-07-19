'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import {motion,useInView} from 'framer-motion'


export default function Myservice() {
  const arr=[{id:1,src:'/ser3-removebg-preview.png',title:'Web Development',description:"creating and maintaining websites ,encompassing various aspects such as web design,front end developement"},
            {id:2,src:'/OIP__2_-removebg-preview.png',title:'Web Responsive Design',description:"make the front interface that user interact and make the application design suit with all screens size"},
            {id:3,src:'/OIP__1_-removebg-preview.png',title:'Coding',description:"writing and orgnizing lines of code to cretae software ,application,websites and other digital solution"}]

            const ref=useRef(null)
            const isInView=useInView(ref,{once:true})
            const cardVariants={
              initial:{y:50,opacity:0},
              animate:{y:0,opacity:1},
            };
  return (
    
    <div id='Service' className='justify-center items-center text-white '>
        <h1 className='text-center font-bold text-2xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300 '><span className='underline underline-offset-4 text-yellow-300'>MY</span> SERVICES</h1>
    <ul ref={ref} className='flex flex-row gap-3  max-[850px]:flex-col justify-center items-center ml-7 '>
      {arr.map((ele,index)=>
      (<motion.li
       key={index}
       variants={cardVariants}
       initial='initial'
       animate={isInView ? 'animate' : ' initial'}
       transition={{duration :0.3 ,delay:index*0.4}}
       >
      <div className=' bg-gray-950 brightness-150 w-60 h-64 p-4 m-4 shadow-md shadow-yellow-300'>
        <Image src={ele.src} alt='serv1' width={40} height={40} />
        <h2 className='mt-3 text-lg text-yellow-300'>{ele.title}</h2>
        <p className='mt-4 text-sm'>{ele.description}</p>
      </div>
      
      </motion.li>)
      )}
     
    </ul>
    </div>
   
   
  )
}
