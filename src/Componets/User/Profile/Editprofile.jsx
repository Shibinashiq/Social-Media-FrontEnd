import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Importing useSelector hook
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
  const [newUsername, setNewUsername] = useState(""); // State to store new username
  const [bio, setBio] = useState(""); // State to store bio
  const [profilePhoto, setProfilePhoto] = useState(null); // State to store profile photo
  const [loading, setLoading] = useState(true); // State to track loading state
  const username = useSelector((state) => state.username || ""); // Fetch existing username from Redux state
  const userId = useSelector((state) => state.userId || ""); // Fetch userId from Redux state
  const token = useSelector((state) => state.token || ""); // Fetch userId from Redux state
// console.log(token);
  useEffect(() => {
    // Set the initial username in the input field when the component mounts
    setNewUsername(username);
    setLoading(false); // Set loading to false
  }, [username]); // Trigger useEffect when the username changes

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
        // Handle success
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle fetch error
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
