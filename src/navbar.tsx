import React from 'react'
import BUTTON from './button1'

function NAVBAR() {
  return (
    <nav className=' bg-transparent p-10 px-[90px] items-center flex space-x-32 '>
        <div className='text-white text-[30px]  font-bold'>J.A.R.V.I.S</div>
        <div className='space-x-14 items-center'>
            <a href="#" className='text-white text-[13px]  hover:text-slate-200 '>Home</a>
            <a href="#" className='text-white text-[13px]  hover:text-slate-200'>What is J.A.R.V.I.S?</a>
            <a href="#" className='text-white text-[13px]  hover:text-slate-200'>Open AI</a>
            <a href="#" className='text-white text-[13px]  hover:text-slate-200'>Case Studies</a>
            <a href="#" className='text-white text-[13px]  hover:text-slate-200'>Library</a>

        </div>
        <BUTTON></BUTTON>
    </nav>
  )
}

export default NAVBAR