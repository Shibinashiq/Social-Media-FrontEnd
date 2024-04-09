import React from "react";
import { User } from "@nextui-org/react";
import { GanttChart } from "lucide-react";
import { Heart, MessageCircle } from "lucide-react";
import { Bookmark } from "react-feather";

export default function Postes() {
  // Define an array of data for each instance
  const data = [
    {
      name: "Jane Doe",
      description: "Product Designer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026703d",
    },
    {
      name: "Alice Johnson",
      description: "Frontend Developer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026704d",
    },
    // Add more items as needed
  ];

  return (
    <div className="bg-green-400 h-full overflow-y-scroll md:flex flex-col md:items-center 	">
      {data.map((item, index) => (
        <>
        
        <div key={index} className="  ">
          <div className="h-[450px]">
            <div className="flex justify-between p-2 md:p-4 md:ml-6">
              <div>
                <User
                  name={item.name}
                  description={item.description}
                  avatarProps={{ src: item.avatarSrc }}
                  className="mt-1 ml-1 md:ml-[20px] z-10"
                />
                <hr className="border-t  border-b-slate-500" />
              </div>
              
              <div className="mt-1 md:ml-9">
                <GanttChart />
              </div>
            </div>
          </div>
          {index !== data.length - 1 && (
            <hr key={`hr-${index}`} className="border-t border-b-slate-500" />
          )}
        </div>
        <div className="flex gap-4 items-center p-2 ">
        <Heart />
        <MessageCircle />
        <div className="ml-auto">
          <Bookmark />
        </div>
      </div>
      </>
      ))}
      
    </div>
  );
}
