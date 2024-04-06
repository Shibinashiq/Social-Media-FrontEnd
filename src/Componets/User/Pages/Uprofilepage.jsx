import React, { useState } from "react";
import ProfileComp1 from "../Profile/ProfileComp1";
import ProfilePost from "../Profile/ProfilePost";
import { SquarePlay } from "lucide-react";
import { Grid2X2 } from "lucide-react";
import ProfileReel from "../Profile/ProfileReel";
import PostReel from "../Profile/PostReel";

function Uprofilepage() {
  const [reel, setReel] = useState(false);
  const handleReel = (data) => {
    if (data === false) {
      setReel(true);
    } else {
      setReel(false);
    }
  };
  return (
    <div className="w-screen">
      
      <ProfileComp1 />
      <div className="flex flex-row justify-center gap-14 mt-2">
        <hr className="border-t  border-b-slate-500" />
        <SquarePlay
          className=" cursor-pointer "
          onClick={() => handleReel(false)}
        />
        <PostReel/>
        <Grid2X2
          className=" cursor-pointer "  
          onClick={() => handleReel(true)}
        />
        
        <hr className="border-t  border-b-slate-500" />
      </div>

      <div className="mt-2">
        {reel === false ? <ProfilePost /> : <ProfileReel />}
      </div>
    </div>
  );
}

export default Uprofilepage;
