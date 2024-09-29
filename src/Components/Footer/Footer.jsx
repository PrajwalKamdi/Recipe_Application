import React from 'react';
import { FaHeart } from "react-icons/fa";
import { LiaCopyright } from "react-icons/lia";

function Footer() {
  return (
    <div className='py-20 bg-slate-300'>
        <footer className='px-10 '>
            <div className='flex items-center gap-1 justify-center py-1'>
            <LiaCopyright size={20}/>
             2024 All Rights Reserved
            </div>
           <div className='flex items-center justify-center gap-1'>
            <p>Made with</p>
            <FaHeart color='red'/>
           </div>
        </footer>
    </div>
  )
}

export default Footer