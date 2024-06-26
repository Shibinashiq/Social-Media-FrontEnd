import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Toaster, toast } from "react-hot-toast";
import useAxios from "../../../axios";

function Addpost({ onClose }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const axiosinstance = useAxios(); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveChanges = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    axiosinstance
      .post("Auth/create-post/", formData)
      .then((response) => {
        if (response.status === 201) {
          onClose();
          toast.success("Post added successfully");
          window.location.reload();
        } else {
          throw new Error("Failed to save");
        }
      })
      .catch((error) => {
        console.error("Error saving post:", error);
        toast.error("Failed to add post");
      });
  };


  return (
    <Modal isOpen onClose={onClose}>
      <ModalContent>
        <ModalHeader className=" flex flex-col gap-1">Add Post</ModalHeader>

        <ModalBody>
          <label htmlFor="profile-photo">Upload Profile Photo</label>
          <input
            type="file"
            id="profile-photo"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <div>
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                style={{ maxWidth: "70%", height: "50%" }}
              />
            </div>
          )}
          <Input
            type="text"
            variant="bordered"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onClick={onClose}>
            Close
          </Button>
          <Button color="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
      {/* Toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </Modal>
  );
}

export default Addpost;
