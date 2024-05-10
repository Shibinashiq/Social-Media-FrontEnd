import React, { useState } from "react";
import { Button, User } from "@nextui-org/react";

function UsersProfile({ username, bio, userphoto }) {
  const [userData, setUserData] = useState({ username, bio, userphoto });

  return (
    <>
      <div className="flex flex-row justify-between mt-2 h-auto w-screen px-4 md:justify-center md:gap-8 ">
        <div className="mt-3">
          <User
            className="object-cover h-full w-full rounded-lg"
            as="button"
            avatarProps={{
              src: `http://127.0.0.1:8000${userData.userphoto}`,
            }}
          />
        </div>

        <div className="mt-3">
          
          <div>
            <p className="font-bold ml-3">4</p>
            <p className="text-sm">Post</p>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <p className="font-bold ml-3">904</p>
            <p className="text-sm">followers</p>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <p className="font-bold ml-3">904</p>
            <p className="text-sm">followers</p>
          </div>
        </div>
      </div>

      <div className="mt-3 md:flex md:justify-center">
        <div className="mr-48">
          <p className="text-sm ml-2">"{userData.bio}"</p>
        </div>
      </div>
      <div className="flex flex-row gap-9 mt-4  px-4 h-auto w-screen md:flex md:justify-center ">
        <Button
          color="primary"
          variant="faded"
          className=" w-40 h-9  text-white"
        >
          Follow
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

export default UsersProfile;
