import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { FaEllipsisV } from "react-icons/fa";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useSelector } from "react-redux";
import useAxios from "../../../axios";
import { Toaster } from 'react-hot-toast'; // Import the Toaster component

export default function Report({ postId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = useSelector((state) => state.userId || "");
  const axiosInstance = useAxios();
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const handleReportClick = () => {
    onOpen();
  };

  const handleReportSubmit = async () => {
    try {
      const response = await axiosInstance.post("/User/reports/", {
        reason: reason,
        message: message,
        reporter: userId,
        reported_Post: postId
      });
      console.log("Report submitted:", response.data);
      onClose();
    } catch (error) {
      console.error("Error submitting report:", error);
      toast.error("Error submitting report"); // Use toast for error notification
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} /> {/* Add the Toaster here */}
      <div className="mt-2">
        <Popover key="bottom-end" placement="bottom-end">
          <PopoverTrigger>
            <button className="flex items-center space-x-1 capitalize focus:outline-none">
              <FaEllipsisV />
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <p className="text-danger cursor-pointer" onClick={handleReportClick}>Report</p>
            </div>
          </PopoverContent>
        </Popover>
        <Modal isOpen={isOpen} placement="bottom-center" onClose={onClose}>
          <ModalContent>
            <ModalHeader>Report</ModalHeader>
            <ModalBody>
              <RadioGroup
                label="Select reason for reporting"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <Radio value="spam">Spam</Radio>
                <Radio value="inappropriate">Inappropriate content</Radio>
                <Radio value="violence">Violence or harmful behavior</Radio>
                <Radio value="other">Other</Radio>
              </RadioGroup>
              <p>Please provide details about the issue you are reporting:</p>
              <textarea
                rows="4"
                cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your report here..."
              ></textarea>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" variant="light" onClick={onClose}>Cancel</Button>
              <Button color="primary" onClick={handleReportSubmit}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
