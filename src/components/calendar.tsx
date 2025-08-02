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
        
        <Dialog >
            <DialogTrigger><Calendar/></DialogTrigger>
            <DialogContent className='w-full x-overflow-hidden border-non bg-white/85 rounded-2xl'>
                <DialogHeader>
                <DialogTitle>Upcoming Events</DialogTitle>
                <DialogDescription>
                    
                </DialogDescription>
                </DialogHeader>
                
                <iframe className='w-full h-[360px] ring-4 ring-[#f0f4f9] ring-offset-2 rounded-3xl' src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FDenver"/>
            </DialogContent>
        </Dialog>


    );


};

export default CalendarDialog;