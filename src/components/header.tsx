import React from 'react';
import '../styles/global.css';

const Header: React.FC = () =>{

    return (

        <div id="header" className="p-4 w-full">

            <h1 className="text-xs font-bold w-3/4">Musicians United for Change</h1>
            <h2 className="text-[9px] pt-1 ">Kids changing communities with music.</h2>
        
        </div>

    );

};

export default Header;