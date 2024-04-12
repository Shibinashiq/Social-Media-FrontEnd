import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

function Editprofile({ cancel }) {
  const [newUsername, setNewUsername] = useState("");
  const [bio, setBio] = useState(""); 
  const [profilePhoto, setProfilePhoto] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const username = useSelector((state) => state.username || ""); 
  const userId = useSelector((state) => state.userId || ""); 
  const token = useSelector((state) => state.token || ""); 
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
      const response = await fetch(
        `http://127.0.0.1:8000/Auth/update/${userId}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
       
      } else {
   
      }
    } catch (error) {
      
      console.error("Error:", error);
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
    </Modal>
  );
}

export default Editprofile;
