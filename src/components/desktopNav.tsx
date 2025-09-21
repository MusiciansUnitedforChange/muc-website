import React from 'react';
import '../styles/global.css';
import { motion } from 'framer-motion'
import CalendarDialog from './calendar';

const desktopNav : React.FC = () => {

    return(

        <div className='items-center justify-end gap-8 w-full h-full hidden md:flex  '>
            <motion.a 
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                whileHover={{scale:1.1, transition:{duration:1, type:'spring', delay:0}}}
                transition={{delay:0, duration:1.5, type:'spring'}}
                href='/' className='h-1/2 will-change-transform align-center text-center text-[30px] md:text-[24px]'>Home</motion.a>

            <motion.a 
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                whileHover={{scale:1.1, transition:{duration:1, type:'spring', delay:0}}}
                transition={{delay:.1, duration:1.5, type:'spring'}}
                href='/about' className='h-1/2 will-change-transform align-center text-center text-[30px] md:text-[24px] '>About</motion.a>
            
            <motion.a 
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                whileHover={{scale:1.1, transition:{duration:1, type:'spring', delay:0}}}
                transition={{delay:.15, duration:1.5, type:'spring'}}
                href='/programs' className=' h-1/2 will-change-transform align-center text-center text-[30px] md:text-[24px]'>Programs</motion.a>
            
            <motion.div
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                whileHover={{scale:1.1, transition:{duration:1, type:'spring', delay:0}}}
                transition={{delay:.15, duration:1.5, type:'spring'}}
                className='will-change-transform h-1/2'
            >
                <CalendarDialog/>
            </motion.div>
        </div>

    );

};

export default desktopNav;