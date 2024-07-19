'use client'
import { useRef } from 'react'
import {motion,useInView} from 'framer-motion'



export default function Projects() {
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const divVariants={
    initial:{opacity:0},
    animate:{opacity:1},
  };
  return (
   <>
    <motion.div 
    ref={ref}
    id='Projects'
    initial='initial'
    variants={divVariants}
    animate={isInView? 'animate' : 'initial'}
    transition={{duration:0.5,delay:0.6}}
    className='w-full h-[800px]'>
      <h3 className='text-center font-bold text-2xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300'><span className='underline underline-offset-4 text-yellow-300'>MY </span> PROJECTS</h3>

      <div className='flex flex-row text-slate-200  w-full h-[600px]  mt-7'>
    <div className='w-1/2 flex flex-col max-[970px]:hidden'>

      <div className='flex flex-row  '>
        <div className='w-[50%] h-38  mt-16 ml-[33%] border border-gray-800 p-3 shadow-lg shadow-gray-600 '>
          <p className='text-yellow-200'>music app</p>
          <p className='text-sm'>make this app using React,redux tookit and tailwind for designing 
          iused Shazam core Api for fetching data like music ,top chart,artist .. and display it in my website 
          <br />
         <span className='underline'> note </span>: <span className=''>shazam core restricted in syria</span> </p>
        </div>
        <div className='w-32 h-[2px] bg-gradient-to-b from-gray-600 to-yellow-600 mt-[23.5%]'></div>
      </div>

    <div>
    <h3 className='mt-[3%] ml-[80%] '>Quiz App</h3>
    </div>
   

    <div className=' flex flex-row '>
        <div className='w-[50%] text-wrap border-gray-800  shadow-lg shadow-gray-600  mt-16 ml-[33%] p-3 '>
        <p className='text-yellow-200'>Blog App</p>
          <p className='text-sm'>also make app by React ,redux ,tailwind for desigigng and make Rest Api by using mock json server,so can add .update,delete
          blog ,and add,update,delete user,assign specific user to be admin and some service restricted by admin.. 
          </p>
        </div>

        <div className='w-32 h-[2px] bg-gradient-to-b from-gray-600 to-yellow-600 mt-[22%] '></div>
      </div>

    <div>
    <h3 className='mt-[7%] ml-[74%]'>E-Commerce App</h3>
    </div>
    

    </div>
    <div className='w-[1px] h-[650px] bg-gradient-to-b from-gray-600 to-yellow-600'>
    </div>


    <div className='w-1/2 flex flex-col max-[970px]:hidden'>
      <div>
    <h3 className='mt-[21%] ml-6'>Music App</h3>
    </div>
    
    <div className='flex flex-row '>
    <div className='w-32 h-[2px] bg-gradient-to-b from-gray-600 to-yellow-600 mt-[23%]'></div>
    <div className='w-[50%]  shadow-lg shadow-gray-600  mt-16 p-3'>
    <p className='text-yellow-200'>Quiz App</p>
          <p className='text-sm'>make this app using React,redux tookit and tailwind for designing 
         iused as api for fetching question and answers,therer ar many subjects choose one and answer the question with counter
          <br />
         <span className='underline'> note </span>: <span>shazam core restricted in syria</span> </p>
        </div> 
      </div>
  
      <div>
    <h3 className='mt-2 ml-6'>Blog App</h3>
    </div>

     
    <div className=' flex flex-row '>
    <div className='w-32 h-[2px] bg-gradient-to-b from-gray-600 to-yellow-600 mt-[17.5%]'></div>
    <div className='w-[50%]  borderborder-gray-800 shadow-lg shadow-gray-600 mt-12 p-3'>
    <p className='text-yellow-200'>E-commerce</p>
          <p className='text-sm'>made by React ,redux toolkit,tailwind use this api for fetching products and display it on my app.
          users can add product to its card and see detail of product
        </p></div> 
      </div>
  
      </div>

      
    </div>
    </motion.div>
   
   </>

  
   
  )
}
