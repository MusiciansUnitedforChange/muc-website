'use client';

import React from 'react';
import '../styles/global.css'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const Members: React.FC = () =>{

    return (

        <Accordion
            type="single"
            collapsible
            className="w-full bg-neutral-200 overflow-visible"
            
        >

            <AccordionItem value='item-1' className='px-4 relative'>
                <AccordionTrigger className='sticky top-0 self-start flex flex-row justify-between'>
                    <img src='/images/non.png' className='w-[128px] h-[128px]'/>
                    
                    <div className='flex flex-col text-center h-full items-center'>
                        <h2 className='text-xl text-neutral-800'>President</h2>
                        <h1 className='text-2xl pb-4 '>Eric Kim</h1>
                        <p className='text-md text-neutral-800 w-3/4'>Event Organizing and Outreach Committee, Education Committee</p>

                    </div>

                </AccordionTrigger>
                <AccordionContent>

                    <p>text text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text texttext text text text text text text text text text text text</p>

                </AccordionContent>

            </AccordionItem>
    

        </Accordion>



    );

};

export default Members;