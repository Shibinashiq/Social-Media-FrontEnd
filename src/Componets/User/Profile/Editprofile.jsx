import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
import { Toaster, toast } from "react-hot-toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import useAxios from "../../../axios";

function Editprofile({ cancel }) {
  const [newUsername, setNewUsername] = useState("");
  const [bio, setBio] = useState(""); 
  const [profilePhoto, setProfilePhoto] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const username = useSelector((state) => state.username || ""); 
  const userId = useSelector((state) => state.userId || ""); 
  const axiosInstance= useAxios ()
  useEffect(() => {
    
    setNewUsername(username);
    setLoading(false); 
  }, [username]); 

  const handleEditProfile = async () => {
    const formData = new FormData();
    formData.append("username", newUsername);
    formData.append("bio", bio);
    if (profilePhoto) {
      formData.append("profile_photo", profilePhoto);
    }
  
    try {
      const response = await axiosInstance.put(`/Auth/update-profile/${userId}/`, formData);
      if (response.status === 200) {
        console.log("Profile updated successfully");
        toast.success("Profile updated successfully");
        cancel(); // Close the modal
        // Handle success
        console.log("Profile updated successfully");
      } else {
        toast.error( response.data);
        console.error("Error:", response.data); // Log the error response
        // Handle specific error cases if needed
      }
    } catch (error) {
      console.error("Error:", error); // Log the error
      toast.error( response.data);
    }
  };
  

  return (
    <Modal isOpen onClose={cancel}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>

        <ModalBody>
          <Input
            type="text"
            variant="bordered"
            label="Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />

          <Input
            type="text"
            variant="bordered"
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <label htmlFor="profile-photo">Upload Profile Photo</label>
          <input
            type="file"
            id="profile-photo"
            accept="image/*"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onClick={cancel}>
            Close
          </Button>
          <Button color="primary" onClick={handleEditProfile}>
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
      <Toaster position="top-right" reverseOrder={false} />
    </Modal>
  );
}

export default Editprofile;
