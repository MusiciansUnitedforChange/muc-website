import React from 'react';
import '../styles/global.css';

import CalendarDialog from '../components/calendar.tsx';

import { Home, Calendar, MessageCircleQuestion } from 'lucide-react';

const FloatingNavigation: React.FC = () => {

    return (

    <div className=' bg-transparent overflow-visible w-full sticky bottom-6 flex flex-row justify-around p-8 md:visible'>
        <div className='w-2/3 h-[64px] flex flex-row justify-center items-center gap-x-8 bg-white shadow-2xl shadow-gray-900 rounded-3xl'>
             
             <a href='/'><Home/></a>
             <CalendarDialog/>
             <MessageCircleQuestion/>

        </div>
    </div>

    );


};

export default FloatingNavigation;