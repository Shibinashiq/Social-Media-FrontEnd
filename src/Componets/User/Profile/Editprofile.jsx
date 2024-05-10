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
  const [loading, setLoading] = useState(false); 
  const [profileData, setProfileData] = useState(null); 
  const [showLoading, setShowLoading] = useState(false); 
  const username = useSelector((state) => state.username || ""); 
  const userId = useSelector((state) => state.userId || ""); 
  const axiosInstance = useAxios();

  useEffect(() => {
    setNewUsername(username);
    setLoading(false);
 
  }, [username]); 

  useEffect(() => {
    if (profileData) {
      setNewUsername(profileData.username);
      setBio(profileData.bio);
    }
  }, [profileData]);

  const handleEditProfile = async () => {
    setLoading(true); 
    const formData = new FormData();
    formData.append("username", newUsername);
    formData.append("bio", bio);
    formData.append("photo", profilePhoto);

    try {
      const response = await axiosInstance.put(`/Auth/update-profile/${userId}/`, formData);
      if (response.status === 200) {
        console.log("Profile updated successfully");
        toast.success("Profile updated successfully");
        setProfileData(response.data);
        cancel(); 
        setShowLoading(true); 
        window.location.reload();
      } else {
        const errorMessage = getErrorMessage(response.status);
        toast.error(errorMessage); 
        console.error("Error:", errorMessage);
      }
    } catch (error) {
      console.error("Error:", error); 
      toast.error("Enter the correct data and try again .");
    } finally {
      setLoading(false); 
    }
  };

  const getErrorMessage = (statusCode) => {
  };

  return (
    <Modal isOpen onClose={cancel}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>

        <ModalBody>
          <Input
            type="text"
            variant="bordered"
            label="Change Username"
            onChange={(e) => setNewUsername(e.target.value)}
          />

          <Input
            type="text"
            variant="bordered"
            label="Add Bio"
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
          <Button color="primary" onClick={handleEditProfile} disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </ModalFooter>
      </ModalContent>
      {showLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Modal>
  );
}

export default Editprofile;
