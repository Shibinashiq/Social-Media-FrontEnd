import React from 'react'
import Searchbar from './Search/Searchbar'
import Chatuser from './Chat/Chatusers'



function ChatFirst() {
  return (
    <div>
        <div className='bg-black '>
      <Searchbar/>
     
        </div>
        
      <Chatuser/>
        </div>
  )
}

export default ChatFirst
