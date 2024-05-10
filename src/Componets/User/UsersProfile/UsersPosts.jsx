import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

function UsersPosts({ posts }) {

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    setUserPosts(posts);
  }, [posts]); 

  return (
    <>
      <div
        className="gap-2 grid grid-cols-3 sm:grid-cols-4 overflow-y-auto md:grid-cols-5 "
        style={{ maxHeight: "70vh" }}
      >
        {userPosts.map((post, index) => (
          <Card
            className=""
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("user post pressed")}
          >
            <CardBody className="md:h-80">
              <img
                shadow="sm"
                radius="lg"
                height="100%"
                width="100%"
                alt="not available"
                className="object-cover h-full w-full rounded-lg"
                src={`http://127.0.0.1:8000${post.image}`}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{post.description}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default UsersPosts;
