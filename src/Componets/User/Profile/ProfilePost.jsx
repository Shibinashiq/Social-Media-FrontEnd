import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import useAxios from "../../../axios";

function ProfilePost({ userId }) {
  const [userPosts, setUserPosts] = useState([]);
  const axiosinstance = useAxios();

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axiosinstance.get(`Auth/user-posts/${userId}/`);
        setUserPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
        // Handle error here, e.g., show an error message to the user
      }
    };

    fetchUserPosts();
  }, []); 

  return (
    <  >
      <div
        className="gap-2 grid grid-cols-3 sm:grid-cols-4 overflow-y-auto md:grid-cols-5"
        style={{ maxHeight: "70vh" }}
      >
        {userPosts.map((post, index) => (
          <Card
          className=" "
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("user post pressed")}
          >
            <CardBody className="md:h-80">
            <Image
          
              shadow="sm"
              radius="lg"
              height="100%"
              width="100%"
              
              alt={post.description}
              className="w-full  object-cover h-[140px] md:h-full "
              src={post.image}
            />
           
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{post.description}</b>
             
            
            </CardFooter>
            
          </Card>
          
        ))}
        
      </div>
      {console.log("userPosts")}
      {console.log(userPosts)}
      {/* <img src={response.data.image} alt="error" /> */}
      {/* {userPosts && <img  src={`http://127.0.0.1:8000/media/posts/829B18D1-747B-4674-BF6A-016815C43CEB.jpg`}alt="" />} */}
    </>
  );
}

export default ProfilePost;
