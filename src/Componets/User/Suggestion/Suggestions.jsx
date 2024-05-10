import React, { useState, useEffect } from "react";
import { User, Button } from "@nextui-org/react"; 
import useAxios from "../../../axios";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Suggestions() {
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  const fetchRandomUsers = async () => {
    try {
      const response = await axiosInstance.get("/User/random_users/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching random users:", error);
    }
  };

  const handleAddFriend = async (userId) => {
    try {
      await axiosInstance.post("User/follow/", { user_id: userId });
      setFollowedUsers([...followedUsers, userId]);
      toast.success("User followed successfully");
    } catch (error) {
      console.error("Error following user:", error);
      toast.error("Failed to follow user");
    }
  };

  const isUserFollowed = (userId) => followedUsers.includes(userId);

  if (users.length === 0) {
    return null; 
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col gap-7 m-0 bg-transparent border border-gray-400 p-4 rounded-lg shadow-md">
        {users.map((user) => (
          <div key={user.username} className="w-full flex items-center justify-between">
            <Link to={`/UsersProfile/${user.user_id}`}>
              <User
                name={user.username}
                description={user.bio || ''}
                avatarProps={{
                  src: user.photo ? `http://127.0.0.1:8000${user.photo}` : undefined,
                }}
              />
            </Link>
            <div>
              <Button color="primary" variant="Light" onClick={() => handleAddFriend(user.id)}>
                {isUserFollowed(user.id) ? "Following" : "Add Friend"}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
