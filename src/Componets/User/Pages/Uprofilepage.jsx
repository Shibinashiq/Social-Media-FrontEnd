import React from "react";
import ProfileComp1 from "../Profile/ProfileComp1";
import ProfilePost from "../Profile/ProfilePost";
// import { Grid2X2, SquarePlay } from "lucide-react";

function Uprofilepage() {
  return (
    <div className="w-screen">
      <ProfileComp1 />
      
      <div className="mt-2">
        <ProfilePost />
      </div>
    </div>
  );
}

export default Uprofilepage;
