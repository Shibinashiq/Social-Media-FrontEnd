import React from 'react'
import {Divider} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon ";



function Searchbar() {
  return (
      <div className="max-w-md ml-4  fixed z-10 bg-black ">
      <div className="mt-2  ">
         <Input

        
        isClearable
        radius="sm"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
            "w-[350px]", 
            "h-10",
            "rounded-full"
            
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      </div>
      <Divider className="my-4" />
      
     
     
    </div>
  )
}

export default Searchbar
