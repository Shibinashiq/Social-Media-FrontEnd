import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "@nextui-org/react";
import { Heart, MessageCircle } from "lucide-react";
import { Bookmark } from "react-feather";
import useAxios from "../../../axios";
import { EllipsisVertical } from 'lucide-react';
import { Input } from "@nextui-org/react";
import Comments from "../Profile/Comments";
import { Toaster, toast } from 'react-hot-toast';
import Like from "./Like";
import MoreHomeIcon from "./MoreHomeIcon";
import LikedUsers from "./LikedUsers";
export default function Postes() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const axiosinstance = useAxios();
  const [showInput, setShowInput] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const userId = useSelector(state => state.userId);


  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axiosinstance.get("/Auth/posts/");
      setPosts(response.data); 
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleShowInput = (postId) => {
   
    if (!showInput || selectedPostId !== postId) {
      setShowInput(true);
      setSelectedPostId(postId);
    } else {
   
      setShowInput(false);
      setSelectedPostId(null);
    }
  };

  const handleInputKeyDown = async (event, postId) => {
    if (event.key === "Enter") {
      try {
        await axiosinstance.post("/User/add-comment/", {
          post: postId,
          user: userId, 
          content: commentContent,
        });
        setShowInput(false); 
        setCommentContent(''); 

        toast.success("Comment added successfully");
      } catch (error) {
        console.error("Error adding comment:", error);

        toast.error("Failed to add comment");
      }
    }
  };


  return (
    <div className="h-full overflow-y-scroll md:items-center mb-40 md:mb-[170px] w-full" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '-webkit-scrollbar': 'none' }} >
      <Toaster position="top-right" reverseOrder={false} />
      {posts.map((item) => (
        <div key={item.id} className="mt-4">
          <div className="flex justify-between ">
            <div className="   ">
              <User
                name={item.username}
                avatarProps={{
                  src: item.user_photo ? `http://127.0.0.1:8000${item.user_photo}` : undefined,
                }}
                className="mt-1 md: z-10"
              />
            </div>
            <div className="mt-1 md:ml-9">
              <MoreHomeIcon className="mt-2" />
            </div>
          </div>
          <img className="bg-white" src={`http://127.0.0.1:8000${item.image}`} alt="test"  />
          <div className="flex gap-4 items-center p-2 ">
            <div>
     
          <Like userId={userId} postId={item.id} />
            </div>

          

            <MessageCircle  onClick={() => handleShowInput(item.id)} />
            {showInput && selectedPostId === item.id && (
              <Input
                type="text"
                variant="underlined"
                placeholder="Post your comment"
                value={commentContent}
                onChange={(event) => setCommentContent(event.target.value)}
                onKeyDown={(event) => handleInputKeyDown(event, item.id)}
              />
            )}
            <div className="ml-auto">
              <Bookmark  />
            </div>
          </div>
           <Comments          postId={item.id} />
        </div>
      ))}
    </div>
  );
}
