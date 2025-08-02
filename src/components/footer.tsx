import React from 'react';
import '../styles/global.css';
import { Facebook, Instagram, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {

    return (

        <div className='w-full h-auto min-h-[128px] bg-gradient-to-t from-white from-30% to-transparent backdrop-blur-lg flex flex-col gap-y-8 p-8 pt-16'>
            
            <div className='w-full h-4/5 flex flex-row gap-x-12 '>

                <div className='w-1/3 flex flex-col gap-y-2'>
                    <h1 className='text-xl font-bold '>MUC</h1>
                    <p className='text-xs text-gray-800'>nyah nyah nyah </p>
                    
                    <div className='flex gap-x-1 pt-1 w-3/4'>

                        <Facebook/>
                        <Instagram/>
                        <Twitter/>
                        <Mail/>
                        <Linkedin/>

                    </div>

                </div>

                <div className='w-2/3 flex flex-row justify-between gap-x-1'>
                    
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Six</h1>
                        <p className='text-xs text-gray-800'>Seven</p>
                        <p className='text-xs text-gray-800'>Seven</p>
                        <p className='text-xs text-gray-800'>Seven</p>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Six</h1>
                        <p className='text-xs text-gray-800'>Seven</p>
                        <p className='text-xs text-gray-800'>Seven</p>
                        <p className='text-xs text-gray-800'>Seven</p>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Six</h1>
                        <p className='text-xs text-gray-800'>Seven</p>
                        <p className='text-xs text-gray-800'>Seven</p>
                        <p className='text-xs text-gray-800'>Seven</p>
                    </div>


                </div>

            </div>

            <div className='w-full flex gap-x-auto'>
                <p className='text-xs text-gray-700'>Musicians United for Change 2025</p>
            </div>

        </div>


    );


};

export default Footer;