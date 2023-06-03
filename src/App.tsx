import { useState } from 'react'
import Navbar from './navbar'
import Getstarted from './getstarted'
import Ai from './ai'

import Future from './future'
import G from './g'
import Wtg from './wtg'
import Imagine from './imagine'
import Chatbox from './chatbox'
import Remote from './remote'
import Register from './register'
import BLOG from './blog'
import Box from './box'
import Step from './step'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='w-screen h-full'>
    <div className='h-full w-full flex flex-col justify-center items-center  bg-gradient-to-r from-[#002853] via-black to-[#002853] '>
      <div className="h-full w-[1200px]">


        <Navbar></Navbar>
        <div className='flex '><div>  <Getstarted></Getstarted></div>

          <div><Ai></Ai></div></div>
        <div><G></G></div>




        <div className='items-center p-20 justify-center pl-10 flex text-white'>
          <div className=' p-20  flex  justify-center space-x-8 py-8  h-[695px] w-[1170px]   bg-gradient-to-r from-[#0F4279] to-sky-700 '>
            <div className='flex flex-col space-y-20 '>
              <Wtg></Wtg>
              <Imagine></Imagine>
              <Chatbox></Chatbox>

            </div>


          </div>



        </div>

        <div className='p-20 py-10 w-full text-white flex items-center justify-center'> <Future></Future></div>
        <div className="w-full ">

          <Remote></Remote>
          <Register></Register>
          <div className=''> <BLOG></BLOG></div>
          <div className=''> <Box></Box></div>
        
          <div className=''> <Step></Step></div>
           </div>
          
           
    </div>
   
    
   
    // </div>
  )
}

export default App
