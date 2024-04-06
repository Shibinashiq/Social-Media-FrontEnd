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
import axios from "axios";

function Addpost({ onClose }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

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

    axios
      .post("", formData)
      .then((response) => {
        if (response.status === 201) {
          onClose();
        } else {
          throw new Error("failed to save");
        }
      })
      .catch((error) => {
        console.error("Error saving post:", error);
      });
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>

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
              <img src={URL.createObjectURL(image)} alt="Selected" />
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
    </Modal>
  );
}

export default Addpost;
