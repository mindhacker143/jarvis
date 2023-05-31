import { useState } from 'react'
import NAVBAR from './navbar'
import GETSTARTED from './getstarted'
import AI from './ai'
import SECTION2 from './section2'
import FUTURE from './future'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-full w-screen bg-gradient-to-r from-black via-sky-900 to-sky-800 '>
        
        <NAVBAR></NAVBAR>
        <div className='flex '><div>  <GETSTARTED></GETSTARTED></div>
          <div><AI></AI></div></div>




        <div className='items-center p-20 justify-center pl-10 flex '> <div className=' text-center flex  justify-center space-x-8 py-4  h-[1000px] w-[1000px] border-2  border-white  bg-gradient-to-r from-sky-900 to-sky-700 '>
          <div className='h-full w-screen bg-gradient-to-r from-sky-900 to-sky-500 shadow-2xl py-10 space-y-20'>
            <p className='font-bold text-2xl'>What is JARVIS?</p>
            <p>J.A.R.V.I.S. (Just A Rather Very Intelligent System) is a fictional character voiced by Paul Bettany in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics characters Edwin Jarvis and H.O.M.E.R., respectively the household butler of the Stark family and another AI designed by Stark. J.A.R.V.I.S. is an artificial intelligence created by Tony Stark, who later controls his Iron Man and Hulkbuster armor for him. In Avengers: Age of Ultron, after being partially destroyed by Ultron, J.A.R.V.I.S. is given physical form as Vision, physically portrayed by Bettany. Different versions of the character also appear in comics published by Marvel Comics, depicted as AI designed by Iron Man and Nadia van Dyne.[1]</p>
            <p className='font-bold text-2xl'>Marvel Cinematic Universe</p>
            <p>
              J.A.R.V.I.S. is first introduced in the Marvel Cinematic Universe's films, voiced by Paul Bettany. Modeled after H.O.M.E.R. from the comics, J.A.R.V.I.S. is presented as a sophisticated AI assistant as opposed to a human like his namesake. This was done to avoid similarities to Alfred Pennyworth and Batman. Bettany admits he had little idea of what the role was, even as he recorded it, simply doing it as a favor for Jon Favreau.[2]
              The character makes his debut in the 2008 film Iron Man before subsequently appearing in the 2010 film Iron Man 2,[3] the 2012 film The Avengers,[4] and the 2013 film Iron Man 3. J.A.R.V.I.S. is an AI that functions as Tony Stark's assistant, running and taking care of all the...... <a href="#" className='hover:text-white text-black'>Read More</a></p>
          </div>
          <div className='h-full w-screen bg-gradient-to-r from-sky-500 to-sky-800 shadow-2xl p-4 py-10 space-y-20'>
            <p className='font-bold text-2xl'>Features?</p>
            <p>Jarvis is a simple personal assistant for Linux, MacOS and Windows which works on the command line. He can talk to you if you enable his voice. He can tell you the weather, he can find restaurants and other places near you. He can do some great stuff for you. In order to start Jarvis just clone this repository and run python installer. Run Jarvis from anywhere by command jarvis. You can start by typing help within the Jarvis command line to check what Jarvis can do for you. Plugins may be modified using the decorators @alias, @require and @complete. These special decorators may be used in any order or several times.Not all plugins are compatible with every system. To specify compatibility constraints, use the require-feature.</p>
            <p className='font-bold text-2xl'>Free to Download</p>
            <p>The 3.0.0.1 version of JARVIS is provided as a free download on our software library. The program lies within System Utilities, more precisely Device Assistants. The file size of the latest downloadable setup file is 1.2 MB.</p>
          </div>





        </div>



        </div>

        <div className='p-20 py-10 h-[1080px] w-full text-white flex'> <FUTURE></FUTURE></div>


      </div>
    </>
  )
}

export default App
