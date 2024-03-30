import React from "react";
import { Avatar, Button } from "@nextui-org/react";

function ProfileComp1() {
  return (
    <>
      <div className="flex flex-row justify-between mt-2 h-auto w-screen px-4">
        <div>
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large mr-4"
          />
        </div>
        <div className="mt-3">
          <p className="font-bold ml-3">4</p>
          <p className="text-sm">posts</p>
        </div>
        <div className="mt-3">
          <div>
            <p className="font-bold ml-3">831</p>
            <p className="text-sm">followers</p>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <p className="font-bold ml-3">904</p>
            <p className="text-sm">following</p>
          </div>
        </div>
        
      </div>
      <div className="mt-3">
          <div>
            <p className="text-sm ml-2">"Stop living your fear and start living your dream"</p>
          </div>
        </div>
      <div className="flex flex-row gap-9 mt-4  px-4 h-auto w-screen">
      <Button color="primary" variant="faded" className=" w-40 h-9  text-white" >
        Edit Profile
      </Button> 
      <Button color="primary" variant="faded" className=" w-40 h-9 text-white" >
        Share Profile
      </Button> 
      </div>
      
    </>
  );
}

export default ProfileComp1;
