'use client'
import {useRef } from "react"
//import '../app/globals.css'
import {motion,useInView} from 'framer-motion'

const pro=[{id:'1',title:'Music App',description:"make this app using React,redux tookit and tailwind for designing ,i used Shazam core Api for fetching data like music ,top chart,artist .. and display it in my website"}
,{id:'2',title:'Blog App',description:"also make app by React ,redux ,tailwind for desigigng and make Rest Api by using mock json server,so can add .update,delete blog ,and add,update,delete user ...,assign specific user to be admin and some service restricted by admin.. "},
{id:'3',title:'QuizApp',description:"make this app using React,redux tookit and tailwind for designing iused '' as api for fetching question and answers,therer ar many subjects choose one and answer the question with counter"},
{id:'4',title:'e-commerce',description:"made by React ,redux toolkit,tailwind use this fakestoreapi for fetching products and display it on my appusers can add product to its card and see detail of product"}]
   

export default function Project2(){
 
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const projectVariants={
    initial:{opacity:0,y:0},
    animate:{opacity:1,y:20},
  };
   

    return (
        <div className="w-full  h-[300px] mt-9">
            <h3 className='text-center font-bold text-2xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300'><span className='underline underline-offset-4 text-yellow-300'>MY </span> PROJECTS</h3>
            <ul  ref={ref} className='w-full flex flex-col gap-7  items-center'>
                {pro?.map((ele,index)=>(
                  <motion.li 
                  key={index}
                  variants={projectVariants}
                  initial='initial'
                  animate={isInView ? 'animate' : ' initial'}
                  transition={{duration :0.3 ,delay:index * 0.3}}
                  >
                      <button key={ele.id} className='bg-gradient-to-r  from-yellow-500 to-blue-300 w-32 h-7 rounded-md ' onClick={()=>{document.getElementById(`my_modal_${ele.id}`).showModal()}}>{ele.title}</button>
                      <dialog id={`my_modal_${ele.id}`} className="modal border-gray-800  text-white shadow-lg shadow-gray-600">
                   <div className="modal-box border-gray-800 bg-gray-950  text-white shadow-lg shadow-gray-600">
                    <h3 className="font-bold text-lg text-yellow-500">{ele.title}</h3>
                  <p className="py-4 ">{ele.description}</p>
                  <div className="modal-action">
                  <form method="dialog">
              <button className=" text-center text-sm p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-gray-700 text-gray-900 animate-pulse">Close</button>
              </form>
           </div>
         </div>
       </dialog>
        </motion.li>
                ))}
          
            </ul>
          
            </div>
           

      
       
    )
}