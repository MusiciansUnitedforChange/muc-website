import React from 'react';
import '../styles/global.css';
import DesktopNav from '@/components/desktopNav.tsx';
import { motion } from 'framer-motion';


const Header: React.FC = () =>{

    return (

        <div id="header" className="p-4 lg:px-8 w-full h-[128px] flex justify-between items-center ">

            <motion.div
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                transition={{duration:1.5, type:'spring'}}
                className='w-3/4'
            >
                <h1 className="text-xs md:text-lg lg:text-xl font-bold">Musicians United for Change</h1>
                <h2 className="text-[9px] md:text-[11px] lg:text-[12px] pt-1 ">Kids changing communities with music.</h2>
            </motion.div>
        
            <DesktopNav/>
        </div>

    );

};

export default Header;