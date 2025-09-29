import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '@/styles/global.css';

import { motion } from 'framer-motion';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"


interface ImpactDialogProps {

    event:string;
    date:string;
    blurb?:string;
    description?:string;
    type?:string;
    heroimg?:string;
    heroalt?:string;
    previewimg?:string;
    previewalt?:string;
    previewlink?:string;

}

const ImpactDialog : React.FC<ImpactDialogProps> = ({event,date, blurb, description, type, heroimg, heroalt, previewimg,previewalt,previewlink}) =>{

    return (

        <motion.div
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            whileHover={{scale:1.03}}
            transition={{duration:1.5, type:'spring'}}

        >

            <Dialog >
                
                <DialogTrigger className='min-w-[180px] md:w-[360px] max-w-[360px] aspect-[4/5] pt-2 flex flex-col rounded-2xl bg-white shadow-md shadow-neutral-300  ' >
                    <div className='p-2 w-full flex gap-2 items-center '>
                        <div className='w-2 h-2 bg-pink-800 rounded-full'></div>
                        <h1 className='text-left text-sm text-neutral-700'>{date}</h1>
                    </div>
                    <img alt={previewalt} src={previewimg} className='w-full min-h-[300px] max-h-[300px] '/>
                    <h1 className='text-left p-2 text-lg text-neutral-900 font-bold '>{event}</h1>
                </DialogTrigger>

                <DialogContent className='min-w-[300px] max-w-none md:w-[540px] lg:w-[800px] xl:w-[1200px] sm:w-4/5 bg-white overflow-y-scroll !h-[80vh] ' >
                    <DialogHeader className='relative bg-transparent pt-12 !pb-0 text-left h-[160px] flex flex-col justify-end'>
                        <DialogTitle className='w-full text-left bg-transparent text-black text-[2rem] lg:text-[2.4rem]'>{event}</DialogTitle>
                        <DialogDescription className='w-full text-left  bg-transparent text-neutral-800 lg:text-lg'>{date}</DialogDescription>
                        

                    </DialogHeader>
                    <div className='bg-white relative flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:items-start lg:gap-x-8 w-full min-h-[360px] !pt-none !max-w-none'>
                        
                        <motion.img 
                            initial={{opacity:0, scale:0.9}}
                            animate={{opacity:1, scale:1}}
                            transition={{duration:1.5, type:'spring'}}
                            className='w-full lg:w-[480px] xl:w-[540px]'
                            src={previewimg} alt={previewalt}/>

                        <motion.div 
                            initial={{opacity:0, y:20}}
                            animate={{opacity:1, y:0}}
                            transition={{delay:.125, duration:1.5, type:'spring'}}
                            className='!prose max-w-none pt-4 '> 
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                        </motion.div>

                        
                    
                        

                    </div>



                </DialogContent>


            </Dialog>

        </motion.div>


    );

};

export default ImpactDialog;