import React from 'react';
import '../styles/global.css';

import CalendarDialog from '../components/calendar.tsx';

import { Home, Calendar, MessageCircleQuestion } from 'lucide-react';

import { motion } from 'framer-motion';

const FloatingNavigation: React.FC = () => {

    return (

    <div className='z-[9] bg-trnsparent h-[60px] overflow-visible w-full fixed bottom-6 flex flex-row justify-around md:hidden '>
        <motion.div 

            initial={{y:100}}
            animate={{y:0}}
            transition={{duration:1.5, type:'spring'}}
        
            className='w-2/3 flex flex-row justify-center items-center gap-x-8 bg-white shadow-2xl shadow-gray-900 rounded-3xl md:gap-16 md:rounded-[36px]'>
             
             <a href='/'><Home/></a>
             <CalendarDialog/>
             <MessageCircleQuestion className='hidden'/>

        </motion.div>
    </div>

    );


};

export default FloatingNavigation;