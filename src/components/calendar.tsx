import React from 'react';
import '../styles/global.css';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"

import { Calendar } from 'lucide-react';


const CalendarDialog : React.FC = () =>{

    return (
        
        <Dialog>
            <DialogTrigger className='flex items-center justify-center '>
            
                <Calendar className="md:hidden"/>
                <h1 className='hidden md:flex text-[30px] md:text-[24px]'>Upcoming Events</h1>
            
            </DialogTrigger>
            <DialogContent className='max-w-none md:w-[720px] lg:w-[840px] xl:w-[1200px] md:p-8 x-overflow-hidden border-none bg-white/85 rounded-2xl z-[9999]'>
                <DialogHeader>
                <DialogTitle className='md:text-[30px] lg:text-[36px]'>Upcoming Events</DialogTitle>
                <DialogDescription>
                    
                </DialogDescription>
                </DialogHeader>
                
                <iframe className='w-full max-w-none h-[360px] md:h-[540px] lg:h[600px] xl:h-[720px] ring-4 ring-[#f0f4f9] ring-offset-2 rounded-3xl' src="https://calendar.google.com/calendar/embed?src=musiciansunitedforchangemuc%40gmail.com&ctz=America%2FDenver"/>
            </DialogContent>
        </Dialog>


    );


};

export default CalendarDialog;