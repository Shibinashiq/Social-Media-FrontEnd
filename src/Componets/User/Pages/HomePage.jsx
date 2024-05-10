import React from 'react'
import Postes from '../Postes/Postes'
import { Footer } from '../Footer/Footer'
import ChatFirst from '../ChatArea/ChatFirst'
import Suggestions from '../Suggestion/Suggestions'
function HomePage() {
  return (
    <>
    {/* <Story/> */}
    <div className='w-full flex justify-between h-screen overflow-hidden'>
        <div className='w-full min-h-screen md:grid grid-cols-1 md:grid-cols-3 overflow-y-auto ' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '-webkit-scrollbar': 'none' }}>
            <div className='col-span-1 md:col-span-1 overflow-y-auto hidden sm:block'style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '-webkit-scrollbar': 'none' }} > <ChatFirst/></div>
            <div className='col-span-1 md:col-span-1 h-auto overflow-y-auto md:mt-2 md:w-[430px]'  style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '-webkit-scrollbar': 'none' }}><Postes/></div>
            <div className='col-span-1 md:col-span-1 h-auto overflow-y-auto md:mt-2 md:w-[430px]'  style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '-webkit-scrollbar': 'none' }}><Suggestions/></div>        
        </div>
    </div>
    <div className='ml-'>
    <Footer/>

    </div>
    </>
  
  )
}

export default HomePage
