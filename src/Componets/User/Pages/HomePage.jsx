import React from 'react'
import Postes from '../Postes/Postes'
import Story from '../Story/Story'

function HomePage() {
  return (
    <div className='w-full   flex  justify-between overflow-hidden h-screen'>
        
        <div className='w-full '>

        <Story/>
        <Postes/>
        </div>

       
        
      
    </div>
  )
}

export default HomePage
