import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@nextui-org/react";
import Editprofile from "./Editprofile";
import useAxios from "../../../axios";
import ProfileIcon from "./ProfileIcon";

function ProfileComp1() {
  const [modal, setModal] = useState(false);
  const [userBio, setUserBio] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userName,setUsername]=useState("");
  const axiosInstance =useAxios()
  const handleOpen = () => {
    setModal(true);
  };
  const handleCancel = () => {
    setModal(false);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/User/user-data/");
        setUserBio(response.data.bio);
        setUserImage(response.data.photo);
        setUsername(response.data.username)

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <div className="flex flex-row justify-between mt-2 h-auto w-screen px-4 md:justify-center md:gap-8 ">
        <div className=" mt-3">
        <ProfileIcon userImage={userImage} userName={userName}/>
        </div>

        <div className="mt-3 ">
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
        {modal && <Editprofile cancel={handleCancel} />}
      </div>

      <div className="mt-3 md:flex md:justify-center">
        <div className="mr-48">
       
          
          <p className="text-sm ml-2">
            "{userBio}"
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-9 mt-4  px-4 h-auto w-screen md:flex md:justify-center ">
        <Button
          color="primary"
          variant="faded"
          className=" w-40 h-9  text-white"
          onClick={handleOpen}
        >
          Edit Profile
        </Button>
       
        <Button
          color="primary"
          variant="faded"
          className=" w-40 h-9 text-white"
        >
          Share Profile
        </Button>
      </div>
    </>
  );
}

export default ProfileComp1;
