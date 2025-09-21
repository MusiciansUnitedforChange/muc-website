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
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, type:'spring'}}

        >

            <Dialog >
                
                <DialogTrigger className='min-w-[240px] md:w-[360px] aspect-[4/5] flex flex-col rounded-2xl bg-transparent shadow-md shadow-neutral-300  ' >

                    <img alt={previewalt} src={previewimg} className='w-full min-h-[128px] aspect-[4/5]'/>

                </DialogTrigger>

                <DialogContent className='min-w-[300px] max-w-none lg:w-[540px] sm:w-4/5 bg-white overflow-y-scroll max-h-[80vh]' >
                    <DialogHeader className='relative bg-transparent pt-12 px-12 !pb-0 text-left min-h-[240px] flex flex-col items-center '>
                        <DialogTitle className='w-full text-left bg-transparent text-black text-[2rem] lg:text-[2.4rem]'>{event}</DialogTitle>
                        <DialogDescription className='w-full text-left px-4 bg-transparent text-neutral-800 lg:text-lg'>{date}</DialogDescription>
                        

                    </DialogHeader>
                    <div className='bg-white relative flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:items-start px-8 md:px-12 lg:px-16 w-full min-h-[360px] !pt-none !max-w-none'>
                        
                        <motion.img 
                            initial={{opacity:0, scale:0.9}}
                            animate={{opacity:1, scale:1}}
                            transition={{duration:1.5, type:'spring'}}
                            className='w-full aspect-[4/5]'
                            src={previewimg} alt={previewalt}/>

                        <motion.div 
                            initial={{opacity:0, y:20}}
                            animate={{opacity:1, y:0}}
                            transition={{delay:.125, duration:1.5, type:'spring'}}
                            className='!prose max-w-none'> 
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                        </motion.div>

                        
                    
                        

                    </div>



                </DialogContent>


            </Dialog>

        </motion.div>


    );

};

export default ImpactDialog;