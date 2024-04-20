import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import { User } from "@nextui-org/react";
import { Heart, MessageCircle } from "lucide-react";
import { Bookmark } from "react-feather";
import useAxios from "../../../axios";
import { EllipsisVertical } from 'lucide-react';
import { Input } from "@nextui-org/react";

export default function Postes() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null); // State to track the ID of the selected post
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
    setShowInput(true);
    setSelectedPostId(postId); // Set the selected post ID
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
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleOpen = () => {
    setModal(true);
  };

  return (
    <div className="h-full overflow-y-scroll md:items-center mb-40 md:mb-[170px] w-full" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '-webkit-scrollbar': 'none' }} >
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
              <EllipsisVertical className="mt-1" onClick={handleOpen} />
            </div>
          </div>
          <img className="bg-white" src={`http://127.0.0.1:8000${item.image}`} alt="test"  />
          <div className="flex gap-4 items-center p-2 ">
            <Heart />
            <MessageCircle onClick={() => handleShowInput(item.id)} /> {/* Pass the postId to handleShowInput */}
            {showInput && selectedPostId === item.id && ( // Only show input for the selected post
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
              <Bookmark />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
