import React from 'react'
import BUTTON from './button1'
import BUTTON2 from './button2'

function REGISTER() {
  return (
    <div className='items-center justify-center flex'>
    <div className=' rounded-md w-full h-[172px] flex justify-between p-10 bg-gradient-to-r from-purple-500 via-purple-500 to-orange-400'>
     <div className='py-10'>
     <div className='text-[13px] font-mono text-slate-900  '>Request Early Access to Get Started </div>
      <div className='text-[19px] font-bold   text-black absolute py-2 '>Register today & start exploring the endless possiblities.</div>
     </div>
     <div className='items-center px-20 py-8'>
        <BUTTON2></BUTTON2></div>
            
    </div>
    
    
    
    </div>
  )
}

export default REGISTER