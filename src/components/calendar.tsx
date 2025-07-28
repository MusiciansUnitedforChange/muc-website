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
        <>
            <button onClick={() => console.log('clicked')} className='z-[9999] bg-red-500'>Hello </button>

            <script>console.log('loaded');</script>
        </>


    );


};

export default CalendarDialog;