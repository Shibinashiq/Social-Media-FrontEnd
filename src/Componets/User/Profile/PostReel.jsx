import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Plus } from 'lucide-react';
import Addpost from './Addpost'; 

export default function PostReel() {
  const [isOpen, setIsOpen] = useState(false); 

  const items = [
    {
      key: "Post",
      label: "New Post",
    },
    {
      key: "Reel",
      label: "New Reel",
    },
   
  ];

  const handleNewPostClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <div className="">
            <Plus />
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem key={item.key} onClick={() => {
              if (item.key === 'Post') {
                handleNewPostClick();
              }
            }}>
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

      {isOpen && <Addpost onClose={handleModalClose} />}
    </>
  );
}
