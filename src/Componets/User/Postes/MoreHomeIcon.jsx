import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { FaEllipsisV } from "react-icons/fa";
import { Tooltip} from "@nextui-org/react";

export default function MoreHomeIcon() {
  const content = (
    <PopoverContent>
      <div className="px-1 py-2">
        {/* <p className="cursor-pointer">Liked Users</p> */}
        {/* <hr /> */}
        <p className="text-danger cursor-pointer" color="danger">Report</p>
      </div>
    </PopoverContent>
  );

  return (
    <div className="mt-2">
      <Popover key="bottom-end" placement="bottom-end">
        <PopoverTrigger>
          <button className="flex items-center space-x-1 capitalize focus:outline-none">
            <FaEllipsisV />
          </button>
        </PopoverTrigger>
        {content}
      </Popover>
      <Tooltip
        key="top-start"
        placement="top-start"
        content="top-start"
        color="secondary"
        style={{ marginTop: "10px" }} // Add some margin to avoid overlapping
      >
        {/* <button className="flex items-center space-x-1 capitalize focus:outline-none"> */}
          {/* <FaEllipsisV /> */}
        {/* </button> */}
      </Tooltip>
    </div>
  );
}
