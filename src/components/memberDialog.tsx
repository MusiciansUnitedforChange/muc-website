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


interface MemberDialogProps {

    name:string;
    role:string;
    blurb?:string;
    description:string;
    type?:string;
    heroimg?:string;
    heroalt?:string;
    previewimg?:string;
    previewalt?:string;
    previewlink?:string;

}

const MemberDialog : React.FC<MemberDialogProps> = ({name,role, blurb, description, type, heroimg, heroalt, previewimg,previewalt,previewlink}) =>{

    return (

        <motion.div
            initial={{opacity:0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, type:'spring'}}

        >

            <Dialog >
                
                <DialogTrigger className='w-[300px] md:w-[400px] min-w-[300px] flex flex-col rounded-2xl bg-transparent shadow-md shadow-neutral-300'>

                    <img alt={heroalt} src={heroimg} className='w-full min-h-[128px] max-h-[256px]'/>

                    <div className='bg-white p-4 w-full flex flex-col items-center justify-center rounded-b-2xl'>
                        <h2 className='text-xl lg:text-2xl font-bold'>{name}</h2>
                        <p className='text-md lg:text-lg text-neutral-700'>{role}</p>
                    </div>
                </DialogTrigger>

                <DialogContent className='min-w-[300px] sm:w-4/5 bg-white overflow-y-auto max-h-[80vh]' >
                    <DialogHeader className='relative bg-transparent pt-12 text-align min-h-[240px] flex flex-col items-center '>
                        <DialogTitle className='bg-transparent text-black text-[2rem] lg:text-[2.4rem]'>{name}</DialogTitle>
                        <DialogDescription className='px-4 bg-transparent text-neutral-800 lg:text-lg'>{role}</DialogDescription>
                        

                    </DialogHeader>
                    <div className='bg-white relative flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:items-start px-8 md:px-12 lg:px-16 w-full min-h-[360px] !max-w-none'>
                        
                        <motion.img 
                            initial={{opacity:0, scale:0.9}}
                            animate={{opacity:1, scale:1}}
                            transition={{duration:1.5, type:'spring'}}
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

export default MemberDialog;