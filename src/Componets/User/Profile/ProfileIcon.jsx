  import React from "react";
  import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    User,
  } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

  export default function ProfileIcon({ userImage ,userName}) {
    const navigate = useNavigate()
    const gotosaved = ()=>{
      navigate('/SavedPage')
    }
    return (
      <div className="flex items-center gap-4 ">
        <Dropdown placement="bottom-start" backdrop="blur">
          <DropdownTrigger>
            <User className=""
              as="button"
              avatarProps={{
                src: `http://127.0.0.1:8000${userImage}`,
              }}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">@{userName}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings" onClick={gotosaved}>Saved Collection</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
