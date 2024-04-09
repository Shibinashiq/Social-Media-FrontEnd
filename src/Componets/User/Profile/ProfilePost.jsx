import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useSelector } from "react-redux";

function ProfilePost({ userId}) {
  const [userPosts, setUserPosts] = useState([]);
  const token = useSelector(state => state.token);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user-posts/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        console.log("User token:", token);
        setUserPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserPosts();
  }, [userId]);

  return (
    <>
      <div
        className=" gap-2  grid grid-cols-3 sm:grid-cols-4 overflow-y-auto"
        style={{ maxHeight: "70vh" }}
      >
        {/* Render user posts */}
        {userPosts.map((post, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("user post pressed")}
          >
            <CardBody className="">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={post.description}
                className="w-full object-cover h-[140px]"
                src={post.image}
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

export default ProfilePost;
