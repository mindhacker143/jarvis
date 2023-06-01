import React from 'react'
import BUTTON from './button1'

function NAVBAR() {
  return (
    <nav className=' bg-transparent p-10 justify-center items-center flex space-x-32  '>
        <div className='text-white text-[30px]  font-bold'>gpt5</div>
        <div className='space-x-14 items-center'>
            <a href="#" className='text-white text-[13px]  hover:text-[#FF4820] '>Home</a>
            <a href="#" className='text-white text-[13px]  hover:text-[#FF4820]'>What is gpt5?</a>
            <a href="#" className='text-white text-[13px]  hover:text-[#FF4820]'>Open AI</a>
            <a href="#" className='text-white text-[13px]  hover:text-[#FF4820]'>Case Studies</a>
            <a href="#" className='text-white text-[13px]  hover:text-[#FF4820]'>Library</a>

        </div>
        <BUTTON></BUTTON>
    </nav>
  )
}

export default NAVBAR