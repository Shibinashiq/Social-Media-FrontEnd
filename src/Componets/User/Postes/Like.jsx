import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import useAxios from "../../../axios";
import { Tooltip } from "@nextui-org/react";
import LikedUsers from "./LikedUsers";

export default function Like({ postId, userId }) {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const axiosinstance = useAxios();

  useEffect(() => {
    axiosinstance.get(`User/check_like/${postId}/`)
      .then(response => {
        setLiked(response.data.liked);
      })
      .catch(error => {
        console.error('Error checking like status:', error);
      });
  }, [postId, axiosinstance]);

  const handleLikeClick = () => {
    axiosinstance.post('User/likes/', { post: postId, user: userId })
      .then(response => {
        console.log('Post liked:', response.data);
        setLiked(response.data.liked);
      })
      .catch(error => {
        console.error('Error liking post:', error);
      });
  };

  const handleTooltipClick = () => {
    console.log("onclick working");
    setShowModal(true);
  };

  return (
    <div>
      <Tooltip
        key="top-start"
        placement="top-start"
        content="See liked Users"
        color="default"
        offset={9}
        style={{ cursor: 'pointer' }}
        onClick={handleTooltipClick}
      >
        <Heart
          style={{ cursor: 'pointer', color: liked ? 'red' : 'currentColor' }}
          onClick={handleLikeClick}
          className="max-w-fit"
        />
      </Tooltip>
      {showModal && <LikedUsers onClose={() => setShowModal(false)} postId={postId} />}
    </div>
  );
}
