import React from "react";
import { User } from "@nextui-org/react";
import { ChevronLeft, Phone, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ILchat() {
const navigate=useNavigate()
const gotoHome =()=>{
    navigate('/')
}

  return (
    <div className="flex justify-between items-center px-4 py-2 ">
      <div className="flex items-center  gap-5">
        <ChevronLeft  onClick={gotoHome}/>
        <User
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </div>
      <div className="flex items-center space-x-4  gap-5">
        <Phone />
        <Video />
      </div>
    </div>
  );
}

export default ILchat;
