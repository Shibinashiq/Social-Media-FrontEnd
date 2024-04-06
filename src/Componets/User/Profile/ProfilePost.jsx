import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function ProfilePost() {
  const list = [
    {
      title: "John",
      img: "/images/human-1.jpeg",
    },
    {
      title: "Emma",
      img: "/images/human-2.jpeg",
    },
    {
      title: "Michael",
      img: "/images/human-3.jpeg",
    },
    {
      title: "Sophia",
      img: "/images/human-4.jpeg",
    },
    {
      title: "Ethan",
      img: "/images/human-5.jpeg",
    },
    {
      title: "Olivia",
      img: "/images/human-6.jpeg",
    },
    {
      title: "Noah",
      img: "/images/human-7.jpeg",
    },
    {
      title: "Ava",
      img: "/images/human-8.jpeg",
    },
    {
      title: "John",
      img: "/images/human-1.jpeg",
    },
    {
      title: "Emma",
      img: "/images/human-2.jpeg",
    },
    {
      title: "Michael",
      img: "/images/human-3.jpeg",
    },
    {
      title: "Sophia",
      img: "/images/human-4.jpeg",
    },
    {
      title: "Ethan",
      img: "/images/human-5.jpeg",
    },
    {
      title: "Olivia",
      img: "/images/human-6.jpeg",
    },
    {
      title: "Noah",
      img: "/images/human-7.jpeg",
    },
    {
      title: "Ava",
      img: "/images/human-8.jpeg",
    },
  ];

  return (
    <>
      

      <div
        className=" gap-2  grid grid-cols-3 sm:grid-cols-4 overflow-y-auto"
        style={{ maxHeight: "70vh" }}
      >
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>

    </>
  );
}
