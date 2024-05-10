import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsersProfile from "../UsersProfile/UsersProfile";
import UsersPosts from "../UsersProfile/UsersPosts";
import useAxios from "../../../axios";

function UsersPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const axiosInstance = useAxios();

  useEffect(() => {
          const fetchUserData = async () => {
            try {
              const response = await axiosInstance.get(
                `User/user_details_with_posts/${id}/`
              );
              setUserData(response.data);
            } catch (error) {
              console.error("Error fetching user data:", error);
            }
          };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="">
        {userData && (
          <UsersProfile
            userId={id}
            username={userData.username}
            bio={userData.bio}
            userphoto={userData.photo}
          />
        )}
        <div className="mt-3">
          {userData && <UsersPosts posts={userData.posts} />}
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
