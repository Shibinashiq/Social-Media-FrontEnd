import React, { useState, useEffect } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useSelector } from "react-redux";
import useAxios from "../../../axios";
import { MoveLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Save() {
  const [savedPosts, setSavedPosts] = useState([]);
  const userId = useSelector((state) => state.userId || "");
  const axiosinstance = useAxios();
  const Navigate =useNavigate()
  const backetoprofile =()=>{
    Navigate('/Userprofile')
  }

  useEffect(() => {
    fetchSavedPosts();
  }, []);

  const fetchSavedPosts = async () => {
    try {
      const response = await axiosinstance.get(`User/saved_posts/${userId}/`);
      setSavedPosts(response.data);
    } catch (error) {
      console.error("Error fetching saved posts:", error);
    }
  };

  const removeSavedPost = async (postId) => {
    console.log("Removing saved post with ID:", postId);
    try {
      await axiosinstance.delete(`User/remove_saved_post/${postId}/`);
      fetchSavedPosts();
    } catch (error) {
      console.error("Error removing saved post:", error);
    }
  };

  return (
    <>
    <div className="min-h-screen mt-4">
    <div>
    <MoveLeft className="h-7 w-8 ml-3" onClick={backetoprofile} />

    </div>
    <div className="gap-2 grid grid-cols-6 ml-10 mt-5">
      {savedPosts.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody>
            <Image
              alt="not able"
              src={`http://127.0.0.1:8000${item.image}`}
              width="170px"
              height="170px"
              className="max-w-80 max-h-64 min-h-64 "
            />
            <X
              onClick={() => {
                console.log("Post ID:", item.id); 
                removeSavedPost(item.id);
              }}
              className="absolute top-2 right-2 cursor-pointer text-red-500"
            />
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
    </>
  );
}
