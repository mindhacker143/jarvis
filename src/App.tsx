import { useState } from 'react'
import NAVBAR from './navbar'
import GETSTARTED from './getstarted'
import AI from './ai'

import FUTURE from './future'
import G from './g'
import WTG from './wtg'
import IMAGINE from './imagine'
import CHATBOX from './chatbox'
import REMOTE from './remote'
import REGISTER from './register'
import BUTTON2 from './button2'
import BLOG from './blog'
import BOX from './box'
import STEP from './step'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='w-screen h-full'>
    <div className='h-full w-screen flex flex-col justify-center items-center  bg-gradient-to-r from-[#002853] via-black to-[#002853] '>
      <div className="h-full w-[1200px]">


        <NAVBAR></NAVBAR>
        <div className='flex '><div>  <GETSTARTED></GETSTARTED></div>

          <div><AI></AI></div></div>
        <div><G></G></div>




        <div className='items-center p-20 justify-center pl-10 flex text-white'>
          <div className=' p-20  flex  justify-center space-x-8 py-8  h-[695px] w-[1170px]   bg-gradient-to-r from-[#0F4279] to-sky-700 '>
            <div className='flex flex-col space-y-20 '>
              <WTG></WTG>
              <IMAGINE></IMAGINE>
              <CHATBOX></CHATBOX>

            </div>


          </div>



        </div>

        <div className='p-20 py-10 w-full text-white flex items-center justify-center'> <FUTURE></FUTURE></div>
        <div className="w-full ">

          <REMOTE></REMOTE>
          <REGISTER></REGISTER>
          <div className=''> <BLOG></BLOG></div>
          <div className=''> <BOX></BOX></div>
        
          <div className='py-10'> <STEP></STEP></div>
           </div>
          
           
    </div>
   
    
   
    // </div>
  )
}

export default App
