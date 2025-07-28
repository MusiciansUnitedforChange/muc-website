import React from 'react';
import '../styles/global.css';

import { Home, Calendar, MessageCircleQuestion } from 'lucide-react';

const FloatingNavigation: React.FC = () => {

    return (

    <div className='w-full sticky bottom-6 flex flex-row justify-around p-8 md:hidden'>
        <div className='w-2/3 h-[64px] flex flex-row justify-center items-center gap-x-8 bg-white shadow-2xl shadow-gray-900 rounded-3xl'>
             
             <Home/>
             <Calendar/>
             <MessageCircleQuestion/>

        </div>
    </div>

    );


};

export default FloatingNavigation;