import React from 'react'
import {User} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

function Chatuser() {

const navigate=useNavigate()
const handleUserClick =()=>{
  navigate('/individualchat')
}

  return (
    <div className='flex-col flex mr-72 gap-10 mt-20  overflow-y-auto ' >
      <User   
  name="Jane Doe"
  onClick={handleUserClick}
  description="Sent a voice message 17h "
  avatarProps={{
    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  }}
  className="cursor-pointer"
/>

    <Divider className='ml-5 '/>
   
   
       <User   
      name="Jane Doe"
      description="Sent a voice message 17h"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
    <Divider className='ml-5 '/>
       <User   
      name="Jane Doe"
      description="Sent a voice message 17h"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
    <Divider className='ml-5 '/>
       <User   
      name="Jane Doe"
      description="Sent a voice message 17h"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />    <Divider className='ml-5 '/>
       <User   
      name="Jane Doe"
      description="Sent a voice message 17h"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />    <Divider className='ml-5 '/>
       <User   
      name="Jane Doe"
      description="Sent a voice message 17h"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />    <Divider className='ml-5 '/>
       <User   
      name="Jane Doe"
      description="Sent a voice message 17h"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />    <Divider className='ml-5 '/>
       <User   
      name="Jane Doe"
      description="          <Divider className='ml-5 '/>
      "
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />    <Divider className='ml-5 '/>
    </div>
  )
}

export default Chatuser
