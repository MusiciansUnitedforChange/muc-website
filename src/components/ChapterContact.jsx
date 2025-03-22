import { useState } from "react";
import { motion } from 'framer-motion';
import '../styles/global.css';
import { X } from 'lucide-react';

export default function Popup(props){

  const [isOpen, setIsOpen] = useState(false);

  return(
    
    <>

      <div className='flex flex-col items-center w-full h-1/2'>

        <h1 className='text-4xl m-10 mb-5'>Any Questions?</h1>
        <h2 className='text-2xl font-inter font-thin mt-0 m-10'>Our members would be happy to answer</h2>

        <button onClick={ ()=> setIsOpen(true)}
              className="w-[200px] h-[100px] bg-green-300 rounded-3xl shadow-2xl shadow-sombra text-white text-2xl transition duration-300 ease-in-out hover:bg-green-400 hover:scale-105"
        >Reach Out</button>
      </div>

      {isOpen && (

        <div className='fixed z-[2000] left-0 top-0 bg-black bg-opacity-70 w-full h-full flex justify-center items-center '>
          
          <button onClick={()=> setIsOpen(false)} className="fixed top-10 right-20 text-white"><X className='outline-none opacity-90' size={80}/></button>

          <motion.div 
            initial={{opacity:0, }}
            animate={{opacity:1,}}
            transition={{duration:0.3}}        
            className='bg-white w-1/3 h-[750px] p-20 relative shadow-black shadow-2xl rounded-3xl'
            client:load
          >
            <h2 className='text-2xl'>Contact Our {props.name} Chapter</h2>
            <h3 className='text-md font-inter'>We will do out best to respond to you within x business days.</h3>
            <form className='mt-10 flex flex-col'>
              <label htmlFor='name' className=""
              >Name</label>
              <input className="font-inter w-full border-b-2 h-10 border-b-black outline-none mb-5 " id='name' type='text' required/>

              <label htmlFor='email' className=""
              >Email</label>
              <input className="font-inter w-full border-b-2 h-10 border-b-black outline-none mb-5" id='email' type='email' required/>

              <label htmlFor='message' className=""
              >How can we help?</label>
              <textarea className="font-inter w-full h-[250px] border-b-2 border-b-black outline-none mb-5" id='message' required></textarea>

              <button className='w-[150px] h-[50px] bg-green-300 text-white shadow-2xl shadow-sombra rounded-3xl mx-auto transition duration-300 ease-in-out hover:bg-green-400 hover:scale-105'>Submit</button>

            </form>

          </motion.div>
        </div> 




      )}

    </>

  );

}


