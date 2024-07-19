'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function About() {

    return (
        <section id='About'>
        <motion.div
         initial={{opacity:0,scale:0.5}} 
         animate={{opacity:1,scale:1}}
         transition={{duration:0.5}}
         className='sm:w-full h-[400px] flex flex-row border-spacing-1  bg-gray-950 brightness-150 max-[450px]:h-[500px] max-[400px]:h-[580px]' style={{borderRadius:'0% 0% 28% 88% /45% 41% 44% 49%'}} 
         >
         <div className='w-1/2 relative '>
         <Image src='/programmer1.png' alt='programmer1' width={400} height={400} className='absolute -mt-12 left-[50%]  -translate-x-[50%] '/>
         </div>
       
         <div className='w-1/2 mt-10 text-white mr-12'>
        
         <h2 className="text-2xl"><span className='text-yellow-500 underline underline-offset-4 '>Ab</span>out Me</h2>
            <p className='text-md mt-4'>hello iam Reem Hasan,live in tartus city ,iwas graduated from Information and telecommunication technology college ,iam ICT engineer and frontend developer ,
                iam seeking for opprtunity to make my dream real and be successful in this domain.
            </p>
            <div className='flex flex-row gap-3 mt-5'>
            <a href='#contacts' ><button className='sm:py-1 px-5 font-bold text-sm text-center text-slate-800 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full  shadow-sm shadow-yellow-300 hover:animate-pulse'>contact me</button></a>
        <a href='/Reem.pdf' target='_blank' download ><button className='py-1 px-5 font-bold  text-sm text-center text-slate-800 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full  shadow-sm shadow-yellow-300 hover:animate-pulse'>Download CV</button></a>
            </div>
            
           
           
         </div>
         </motion.div >
        </section>
    )
}
